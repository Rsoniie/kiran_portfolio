const profile = {
  name: "Kiran Soni",
  roles: ["Accountant", "Growth Lead", "Business Development Professional"],
  contact: {
    email: "kiransoni2412@gmail.com",
    phone: "+91 6299044678",
    location: "Gurugram, India (Vigyan Vihar, Sector 56, 122011)",
    linkedin: "https://www.linkedin.com/in/kiran-soni-ab655a3b2"
  },
  summary:
    "Commerce professional with ADCA+ certification and hands-on strength in lead generation, pipeline management, accounting operations, MS Office reporting, and conversion-focused sales execution."
};

const stats = [
  { label: "Customer Acquisition Growth", value: 30, suffix: "%" },
  { label: "Sales Funnel Conversion Boost", value: 25, suffix: "%" },
  { label: "Key Education Programs", value: 2, suffix: "" },
  { label: "Top Performer Awards", value: 2, suffix: "" }
];

const experiences = [
  {
    title: "Growth Lead",
    org: "Vescavia",
    mode: "Work from home",
    period: "Jan 2026 - Current",
    points: [
      "Drove 30% growth in customer acquisition by launching targeted, data-driven campaigns and improving lead qualification.",
      "Optimized the sales funnel to boost conversions by 25% by refining stages, messaging, and handoffs across the journey.",
      "Built repeatable outreach and follow-up workflows to improve campaign consistency and speed-to-response."
    ]
  },
  {
    title: "Coaching Tutor",
    org: "Independent Coaching",
    mode: "Offline / Academic Support",
    period: "2021 - 2024",
    points: [
      "Taught students up to Class 8 with strong command of Mathematics and Science fundamentals.",
      "Designed structured weekly practice plans that improved student confidence and concept clarity.",
      "Helped learners improve problem-solving approach through step-by-step reasoning methods."
    ]
  }
];

const education = [
  {
    title: "Bachelors of Commerce",
    org: "Vinoba Bhave University, Hazaribagh",
    period: "2018 - 2021",
    points: [
      "Built strong accounting foundations, prepared and analyzed financial statements (Balance Sheet, Cash Flow) with accuracy.",
      "Improved decision-making through costing, budgeting, and ratio analysis to evaluate performance and support management."
    ]
  },
  {
    title: "Advance Diploma in Computer Applications +",
    org: "Gurukul Computer Academy, Hazaribagh",
    period: "2019 - 2020",
    points: [
      "Completed ADCA+ with hands-on training in MS Office (Word, Excel, PowerPoint), Tally, accounting basics, internet and email tools, and basic computer operations."
    ]
  }
];

const achievements = [
  {
    title: "Academy Award Recognition",
    badge: "ADCA+",
    points: ["Top 3 Performer in ADCA+, recognized with an Academy Award."]
  },
  {
    title: "Business Management Excellence",
    badge: "Business Management",
    points: ["Top Performer in Business Management, recognized for outstanding performance."]
  },
  {
    title: "Growth Execution Impact",
    badge: "Vescavia",
    points: [
      "Delivered measurable acquisition and conversion gains by combining campaign structure, qualification logic, and funnel optimization."
    ]
  }
];

const skills = [
  "Lead Generation & Sales",
  "Accounting",
  "ADCA+",
  "Prompt Engineering",
  "MS Office (Excel, Word, PowerPoint)",
  "Pipeline Management",
  "Client Conversion",
  "Funnel Optimization",
  "Reporting & Analysis",
  "Reasoning",
  "Problem Solving"
];

const languages = [
  { name: "English", level: "Professional", percent: 78 },
  { name: "Hindi", level: "Native / Fluent", percent: 100 }
];

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
const navLinks = document.querySelectorAll(".main-nav a");
const sections = document.querySelectorAll("main section[id]");
const yearEl = document.getElementById("year");
const typedText = document.getElementById("typedText");
const progressBar = document.getElementById("progressBar");
const form = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");
const topLinks = document.querySelectorAll('a[href="#top"]');

const contactInline = document.getElementById("contactInline");
const contactList = document.getElementById("contactList");
const statsGrid = document.getElementById("statsGrid");
const experienceTimeline = document.getElementById("experienceTimeline");
const educationGrid = document.getElementById("educationGrid");
const achievementGrid = document.getElementById("achievementGrid");
const skillChips = document.getElementById("skillChips");
const languageBars = document.getElementById("languageBars");

const highlightTitle = document.getElementById("highlightTitle");
const highlightText = document.getElementById("highlightText");
const prevHighlight = document.getElementById("prevHighlight");
const nextHighlight = document.getElementById("nextHighlight");

const safeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const renderContact = () => {
  if (!contactInline || !contactList) return;

  const items = [
    { icon: "bi-envelope-fill", value: profile.contact.email },
    { icon: "bi-telephone-fill", value: profile.contact.phone },
    { icon: "bi-geo-alt-fill", value: profile.contact.location },
    {
      icon: "bi-linkedin",
      value: "LinkedIn Profile",
      href: profile.contact.linkedin
    }
  ];

  const html = items
    .map((item) => {
      const content = item.href
        ? `<a href="${safeHtml(item.href)}" target="_blank" rel="noreferrer">${safeHtml(item.value)}</a>`
        : `<span>${safeHtml(item.value)}</span>`;
      return `<li><i class="bi ${item.icon}"></i>${content}</li>`;
    })
    .join("");

  contactInline.innerHTML = html;
  contactList.innerHTML = html;
};

const renderStats = () => {
  if (!statsGrid) return;

  statsGrid.innerHTML = stats
    .map(
      (item) => `
      <article class="stat-item reveal-up">
        <div class="stat-value" data-counter="${item.value}" data-suffix="${item.suffix}">0${item.suffix}</div>
        <p class="stat-label">${safeHtml(item.label)}</p>
      </article>
    `
    )
    .join("");
};

const renderExperience = () => {
  if (!experienceTimeline) return;

  experienceTimeline.innerHTML = experiences
    .map(
      (item) => `
      <article class="timeline-card reveal-up">
        <span class="timeline-dot" aria-hidden="true"></span>
        <h3>${safeHtml(item.title)}</h3>
        <p class="meta">${safeHtml(item.org)} | ${safeHtml(item.mode)} | ${safeHtml(item.period)}</p>
        <ul>${item.points.map((point) => `<li>${safeHtml(point)}</li>`).join("")}</ul>
      </article>
    `
    )
    .join("");
};

const renderEducation = () => {
  if (!educationGrid) return;

  educationGrid.innerHTML = education
    .map(
      (item) => `
      <article class="edu-card reveal-up">
        <h3>${safeHtml(item.title)}</h3>
        <p class="meta">${safeHtml(item.org)} | ${safeHtml(item.period)}</p>
        <ul>${item.points.map((point) => `<li>${safeHtml(point)}</li>`).join("")}</ul>
      </article>
    `
    )
    .join("");
};

const renderAchievements = () => {
  if (!achievementGrid) return;

  achievementGrid.innerHTML = achievements
    .map(
      (item) => `
      <article class="achievement-card reveal-up">
        <span class="achievement-pill"><i class="bi bi-award-fill"></i>${safeHtml(item.badge)}</span>
        <h3>${safeHtml(item.title)}</h3>
        <ul>${item.points.map((point) => `<li>${safeHtml(point)}</li>`).join("")}</ul>
      </article>
    `
    )
    .join("");
};

const renderSkills = () => {
  if (skillChips) {
    skillChips.innerHTML = skills
      .map((item) => `<span class="skill-chip reveal-up">${safeHtml(item)}</span>`)
      .join("");
  }

  if (languageBars) {
    languageBars.innerHTML = languages
      .map(
        (item) => `
        <article class="language-item reveal-up">
          <div class="language-head">
            <span>${safeHtml(item.name)}</span>
            <span>${safeHtml(item.level)}</span>
          </div>
          <div class="language-track">
            <div class="language-fill" data-progress="${item.percent}"></div>
          </div>
        </article>
      `
      )
      .join("");
  }
};

let highlightIndex = 0;
let highlightTimer;

const updateHighlight = () => {
  if (!highlightTitle || !highlightText || achievements.length === 0) return;
  const item = achievements[highlightIndex % achievements.length];
  highlightTitle.textContent = item.title;
  highlightText.textContent = item.points[0] || "";
};

const startHighlightRotation = () => {
  if (highlightTimer) clearInterval(highlightTimer);
  highlightTimer = setInterval(() => {
    highlightIndex = (highlightIndex + 1) % achievements.length;
    updateHighlight();
  }, 4000);
};

const animateCounter = (el, target, suffix) => {
  const duration = 1300;
  const start = performance.now();

  const update = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const value = Math.floor(progress * target);
    el.textContent = `${value}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  };

  requestAnimationFrame(update);
};

const startCounters = () => {
  document.querySelectorAll("[data-counter]").forEach((counter) => {
    const target = Number(counter.dataset.counter || 0);
    const suffix = counter.dataset.suffix || "";
    animateCounter(counter, target, suffix);
  });
};

const setupReveal = () => {
  const revealEls = document.querySelectorAll(".reveal-up");
  let countersStarted = false;
  let languageAnimated = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");

        if (!countersStarted && entry.target.closest("#about")) {
          startCounters();
          countersStarted = true;
        }

        if (!languageAnimated && entry.target.closest("#skills")) {
          document.querySelectorAll(".language-fill").forEach((el) => {
            const value = Number(el.dataset.progress || 0);
            el.style.width = `${value}%`;
          });
          languageAnimated = true;
        }

        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.16 }
  );

  revealEls.forEach((el) => observer.observe(el));
};

const setActiveNav = () => {
  let current = "";

  sections.forEach((section) => {
    const top = window.scrollY;
    const offset = section.offsetTop - 120;
    const height = section.offsetHeight;

    if (top >= offset && top < offset + height) {
      current = section.id;
    }
  });

  navLinks.forEach((link) => {
    const active = link.getAttribute("href") === `#${current}`;
    link.classList.toggle("is-active", active);
  });
};

const setProgress = () => {
  if (!progressBar) return;
  const scrollTop = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const percent = height > 0 ? (scrollTop / height) * 100 : 0;
  progressBar.style.width = `${percent}%`;
};

const setupTyping = () => {
  if (!typedText) return;

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const tick = () => {
    const role = profile.roles[roleIndex];

    if (!deleting) {
      charIndex += 1;
      typedText.textContent = role.slice(0, charIndex);
      if (charIndex === role.length) {
        deleting = true;
        setTimeout(tick, 1100);
        return;
      }
    } else {
      charIndex -= 1;
      typedText.textContent = role.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % profile.roles.length;
      }
    }

    setTimeout(tick, deleting ? 55 : 90);
  };

  tick();
};

const setupNav = () => {
  if (!menuBtn || !mainNav) return;

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
};

const setupHighlightControls = () => {
  if (!prevHighlight || !nextHighlight) return;

  prevHighlight.addEventListener("click", () => {
    highlightIndex = (highlightIndex - 1 + achievements.length) % achievements.length;
    updateHighlight();
    startHighlightRotation();
  });

  nextHighlight.addEventListener("click", () => {
    highlightIndex = (highlightIndex + 1) % achievements.length;
    updateHighlight();
    startHighlightRotation();
  });
};

const setupForm = () => {
  if (!form || !formNote) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim() || "there";
    const emailRaw = String(data.get("email") || "").trim();
    const messageRaw = String(data.get("message") || "").trim();
    const subjectRaw = `Portfolio Inquiry from ${name}`;
    const bodyRaw = `${messageRaw}\n\nReply to: ${emailRaw}`;

    const subject = encodeURIComponent(subjectRaw);
    const body = encodeURIComponent(bodyRaw);
    const mailtoUrl = `mailto:${profile.contact.email}?subject=${subject}&body=${body}`;
    const fallbackUrl =
      `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.contact.email)}` +
      `&su=${subject}&body=${body}`;

    formNote.innerHTML =
      `Thanks ${safeHtml(name)}. If your mail app does not open, ` +
      `<a href="${fallbackUrl}" target="_blank" rel="noreferrer">click here to compose in browser</a>.`;

    const mailAnchor = document.createElement("a");
    mailAnchor.href = mailtoUrl;
    mailAnchor.style.display = "none";
    document.body.appendChild(mailAnchor);
    mailAnchor.click();
    mailAnchor.remove();

    form.reset();
  });
};

const setupBackToTop = () => {
  if (!topLinks.length) return;

  topLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      mainNav?.classList.remove("is-open");
      menuBtn?.setAttribute("aria-expanded", "false");
    });
  });
};

const bootstrap = () => {
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  renderContact();
  renderStats();
  renderExperience();
  renderEducation();
  renderAchievements();
  renderSkills();

  setActiveNav();
  setProgress();
  updateHighlight();
  startHighlightRotation();

  setupReveal();
  setupTyping();
  setupNav();
  setupHighlightControls();
  setupForm();
  setupBackToTop();

  window.addEventListener("scroll", () => {
    setActiveNav();
    setProgress();
  });
};

bootstrap();
