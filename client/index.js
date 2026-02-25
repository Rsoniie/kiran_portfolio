const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
const yearEl = document.getElementById("year");
const form = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");
const tabs = document.querySelectorAll(".tab-btn");
const panels = document.querySelectorAll(".tab-panel");
const revealEls = document.querySelectorAll(".reveal-up");
const counters = document.querySelectorAll("[data-counter]");
const navLinks = document.querySelectorAll(".main-nav a");
const sectionTargets = document.querySelectorAll("main section[id]");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (menuBtn && mainNav) {
  menuBtn.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

const animateCounter = (el, target) => {
  const duration = 1300;
  const start = performance.now();

  const update = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    el.textContent = Math.floor(progress * target);
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  };

  requestAnimationFrame(update);
};

let countersAnimated = false;
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");

      if (!countersAnimated && entry.target.closest("#summary")) {
        counters.forEach((counter) => {
          const target = Number(counter.dataset.counter || 0);
          animateCounter(counter, target);
        });
        countersAnimated = true;
      }

      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.2 }
);

revealEls.forEach((el) => revealObserver.observe(el));

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const key = tab.dataset.tab;

    tabs.forEach((item) => {
      const active = item === tab;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-selected", String(active));
    });

    panels.forEach((panel) => {
      panel.classList.toggle("is-active", panel.dataset.panel === key);
    });
  });
});

const setActiveLink = () => {
  let current = "";

  sectionTargets.forEach((section) => {
    const top = window.scrollY;
    const offset = section.offsetTop - 120;
    const height = section.offsetHeight;

    if (top >= offset && top < offset + height) {
      current = section.id;
    }
  });

  navLinks.forEach((link) => {
    const href = link.getAttribute("href") || "";
    const active = href === `#${current}`;
    link.classList.toggle("is-active", active);
  });
};

window.addEventListener("scroll", setActiveLink);
window.addEventListener("load", setActiveLink);

if (form && formNote) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = (formData.get("name") || "").toString().trim();

    formNote.textContent = `Thanks ${name || "there"}. Your message is ready and noted.`;
    form.reset();
  });
}
