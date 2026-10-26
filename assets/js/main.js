(function () {
  const C = window.CONTENT, CASES = window.CASES, L = window.LINKS;
  const get = (obj, path) => path.split(".").reduce((o, k) => (o == null ? o : o[k]), obj);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const $ = (sel) => document.querySelector(sel);
  const arrow = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function initialLang() {
    const q = new URLSearchParams(location.search).get("lang");
    if (q && C[q]) return q;
    const saved = localStorage.getItem("lang");
    if (saved && C[saved]) return saved;
    return (navigator.language || "es").toLowerCase().startsWith("es") ? "es" : "en";
  }

  let lang = initialLang();

  function applyStatic(t) {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const v = get(t, el.dataset.i18n);
      if (v != null) el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const v = get(t, el.dataset.i18nHtml);
      if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll("[data-lang-btn]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.langBtn === lang)));
    document.querySelectorAll("[data-href]").forEach((a) => { a.href = L[a.dataset.href]; });
    document.querySelectorAll("[data-mailto]").forEach((a) => { a.href = "mailto:" + L.email; });
    document.querySelectorAll("[data-email]").forEach((a) => { a.textContent = L.email; });
    const y = $("#year"); if (y) y.textContent = new Date().getFullYear();
  }

  function caseCard(c, t, i) {
    const d = c[lang];
    return `
      <a class="case-card reveal" href="case.html?id=${c.id}&lang=${lang}">
        <div class="case-visual" data-variant="${c.visual}">${window.VISUALS[c.visual]}</div>
        <div class="case-body">
          <div class="case-top"><span class="case-num">0${i + 1}</span><span class="tags">${c.tags.map((x) => `<span class="tag">${esc(x)}</span>`).join("")}</span></div>
          <h3>${esc(d.title)}</h3>
          <p>${esc(d.summary)}</p>
          <span class="link-arrow">${esc(t.work.readCase)} ${arrow}</span>
        </div>
      </a>`;
  }

  function renderHome(t) {
    document.title = t.meta.title;
    $('meta[name="description"]').setAttribute("content", t.meta.description);

    $("#stats").innerHTML = t.stats.map((s) => `<div class="stat reveal"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join("");
    $("#cases").innerHTML = CASES.map((c, i) => caseCard(c, t, i)).join("");
    $("#process-steps").innerHTML = t.process.steps.map((s, i) => `
      <li class="step reveal"><span class="step-num">${String(i + 1).padStart(2, "0")}</span><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></li>`).join("");
    $("#timeline").innerHTML = t.experience.items.map((x) => `
      <article class="job reveal">
        <div class="job-head"><div><h3>${esc(x.role)}</h3><span class="company">${esc(x.company)}</span></div><span class="period">${esc(x.period)}</span></div>
        <ul>${x.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
      </article>`).join("");
    $("#skills").innerHTML = t.skills.groups.map((g) => `
      <div class="skill-group reveal"><h3>${esc(g.title)}</h3><div class="chips">${g.items.map((i) => `<span class="chip">${esc(i)}</span>`).join("")}</div></div>`).join("");
    $("#about-text").innerHTML = t.about.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("");
    $("#education").innerHTML = t.about.education.map((e) => `<li><strong>${esc(e.title)}</strong><span>${esc(e.place)}</span><small>${esc(e.period)}</small></li>`).join("");
    $("#languages").innerHTML = t.about.languages.map((l) => `<li>${esc(l)}</li>`).join("");
  }

  function renderCase(t) {
    const id = new URLSearchParams(location.search).get("id");
    const idx = CASES.findIndex((c) => c.id === id);
    const root = $("#case-root");
    if (idx < 0) { root.innerHTML = `<p class="container">${esc(t.caseUi.notFound)}</p>`; return; }
    const c = CASES[idx], d = c[lang], u = t.caseUi, next = CASES[(idx + 1) % CASES.length];
    document.title = `${d.title} — Sofía Colque Saavedra`;
    $('meta[name="description"]').setAttribute("content", d.summary);
    const list = (arr) => `<ul class="check">${arr.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`;
    root.innerHTML = `
      <header class="case-hero container">
        <a class="back" href="index.html?lang=${lang}#work">← ${esc(u.back)}</a>
        <div class="tags">${c.tags.map((x) => `<span class="tag">${esc(x)}</span>`).join("")}</div>
        <h1>${esc(d.title)}</h1>
        <p class="lead">${esc(d.summary)}</p>
        <dl class="case-meta">
          <div><dt>${esc(u.role)}</dt><dd>${esc(d.meta.role)}</dd></div>
          <div><dt>${esc(u.company)}</dt><dd>${esc(d.meta.company)}</dd></div>
          <div><dt>${esc(u.period)}</dt><dd>${esc(d.meta.period)}</dd></div>
          <div><dt>${esc(u.focus)}</dt><dd>${esc(d.meta.focus)}</dd></div>
        </dl>
      </header>
      <div class="container"><div class="case-visual case-visual-lg" data-variant="${c.visual}">${window.VISUALS[c.visual]}</div></div>
      <div class="container case-content">
        <section><h2>${esc(u.context)}</h2><p>${esc(d.context)}</p></section>
        <section><h2>${esc(u.challenge)}</h2>${list(d.challenge)}</section>
        <section><h2>${esc(u.myRole)}</h2>${list(d.role)}</section>
        <section><h2>${esc(u.process)}</h2><ol class="mini-steps">${d.process.map((s, i) => `<li><span>${String(i + 1).padStart(2, "0")}</span><strong>${esc(s.title)}</strong><p>${esc(s.text)}</p></li>`).join("")}</ol></section>
        <section><h2>${esc(u.outcomes)}</h2><div class="outcomes">${d.outcomes.map((o) => `<div><strong>${esc(o.value)}</strong><span>${esc(o.label)}</span></div>`).join("")}</div></section>
        <section><h2>${esc(u.learnings)}</h2><p>${esc(d.learnings)}</p></section>
        ${d.nda ? `<p class="nda">${esc(u.nda)}</p>` : ""}
      </div>
      <div class="container">
        <a class="next-case" href="case.html?id=${next.id}&lang=${lang}">
          <small>${esc(u.next)}</small><strong>${esc(next[lang].title)}</strong>${arrow}
        </a>
      </div>`;
  }

  function observeReveal() {
    const els = document.querySelectorAll(".reveal:not(.is-visible)");
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("is-visible")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach((e) => io.observe(e));
  }

  function render() {
    const t = C[lang];
    applyStatic(t);
    if (document.body.dataset.page === "case") renderCase(t); else renderHome(t);
    observeReveal();
  }

  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-lang-btn]");
    if (b) {
      lang = b.dataset.langBtn;
      localStorage.setItem("lang", lang);
      const url = new URL(location.href); url.searchParams.set("lang", lang); history.replaceState(null, "", url);
      render();
    }
    const m = e.target.closest("[data-menu-toggle]");
    if (m) document.body.classList.toggle("menu-open");
    if (e.target.closest(".nav-links a")) document.body.classList.remove("menu-open");
  });

  const header = $(".site-header");
  window.addEventListener("scroll", () => header && header.classList.toggle("scrolled", window.scrollY > 8), { passive: true });

  render();
})();
