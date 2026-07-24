/* ============================================================
   Client interactivity — View Transitions aware.
   Global (once): custom cursor, scroll progress.
   Per page (astro:page-load): lang, filters, services, reveals, nav.
   ============================================================ */
(function () {
  'use strict';
  if (window.__pgcBooted) return;
  window.__pgcBooted = true;

  /* ================= LANGUAGE ================= */
  function getLang() { try { return localStorage.getItem('lang') || 'en'; } catch (e) { return 'en'; } }
  function applyLang(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-en]').forEach(function (el) {
      var v = lang === 'es' ? el.getAttribute('data-es') : el.getAttribute('data-en');
      if (v !== null) el.textContent = v;
    });
    document.querySelectorAll('[data-ph-en]').forEach(function (el) {
      var p = lang === 'es' ? el.getAttribute('data-ph-es') : el.getAttribute('data-ph-en');
      if (p !== null) el.setAttribute('placeholder', p);
    });
    document.querySelectorAll('.lang-opt').forEach(function (o) {
      o.classList.toggle('is-active', o.getAttribute('data-lang') === lang);
    });
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }
  function initLang() {
    applyLang(getLang());
    var t = document.getElementById('langToggle');
    if (t) t.addEventListener('click', function () { applyLang(getLang() === 'en' ? 'es' : 'en'); });
  }

  /* ================= COUNT-UP ================= */
  function fmt(n, f) {
    if (f === 'compact') {
      if (n >= 1e6) return (Math.round(n / 1e5) / 10) + 'M';
      if (n >= 1e3) return (Math.round(n / 1e2) / 10) + 'K';
    }
    return String(Math.round(n));
  }
  function animateCount(el) {
    if (el.dataset.done) return; el.dataset.done = '1';
    var target = parseFloat(el.getAttribute('data-count')) || 0;
    var pre = el.getAttribute('data-prefix') || '', suf = el.getAttribute('data-suffix') || '';
    var f = el.getAttribute('data-format') || 'plain', dur = 1600, start = performance.now();
    (function step(now) {
      var p = Math.min((now - start) / dur, 1), e = 1 - Math.pow(1 - p, 3);
      el.textContent = pre + fmt(target * e, f) + suf;
      if (p < 1) requestAnimationFrame(step); else el.textContent = pre + fmt(target, f) + suf;
    })(start);
  }

  /* ================= FILTERS (results / blog) ================= */
  function initFilters() {
    document.querySelectorAll('.filters[data-target]').forEach(function (bar) {
      var grid = document.querySelector(bar.getAttribute('data-target'));
      if (!grid) return;
      bar.querySelectorAll('.chip').forEach(function (chip) {
        chip.addEventListener('click', function () {
          bar.querySelectorAll('.chip').forEach(function (c) { c.classList.remove('is-active'); });
          chip.classList.add('is-active');
          var f = chip.getAttribute('data-filter');
          grid.querySelectorAll('[data-channel]').forEach(function (item) {
            item.classList.toggle('is-hidden', !(f === 'all' || item.getAttribute('data-channel') === f));
          });
        });
      });
    });
  }

  /* ================= SERVICES: cards → panels ================= */
  function initServices() {
    var filters = document.getElementById('serviceFilters');
    var all = document.getElementById('serviceAll');
    var panels = document.getElementById('servicePanels');
    if (!filters || !all || !panels) return;
    function show(ch) {
      filters.querySelectorAll('.chip').forEach(function (c) {
        c.classList.toggle('is-active', c.getAttribute('data-channel') === ch);
      });
      if (ch === 'all') {
        all.style.display = '';
        panels.querySelectorAll('.svc-panel').forEach(function (p) { p.classList.remove('is-active'); });
      } else {
        all.style.display = 'none';
        panels.querySelectorAll('.svc-panel').forEach(function (p) {
          p.classList.toggle('is-active', p.getAttribute('data-panel') === ch);
        });
      }
    }
    filters.querySelectorAll('.chip').forEach(function (chip) {
      chip.addEventListener('click', function () { show(chip.getAttribute('data-channel')); });
    });
    all.querySelectorAll('[data-goto]').forEach(function (card) {
      card.addEventListener('click', function () {
        show(card.getAttribute('data-goto'));
        filters.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
    panels.querySelectorAll('[data-back]').forEach(function (b) {
      b.addEventListener('click', function () { show('all'); });
    });
  }

  /* ================= COST CALCULATOR ================= */
  var usd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
  function round100(v) { return Math.round(v / 100) * 100; }
  function round1000(v) { return Math.round(v / 1000) * 1000; }

  function initCalculator() {
    var root = document.querySelector('[data-calc-panel="cost"]');
    if (!root) return;
    var you = +root.getAttribute('data-you');
    var mult = +root.getAttribute('data-mult');
    var slider = root.querySelector('#calcSalary');
    if (!slider) return;
    var salaryOut = root.querySelector('#calcSalaryOut');
    var inhouseOut = root.querySelector('#calcInhouseYr');
    var youOut = root.querySelector('#calcYouYr');
    var saveOut = root.querySelector('#calcSave');
    function update() {
      var salary = +slider.value;
      var youYr = you * 12;
      var inhouseYr = salary * mult;
      if (salaryOut) salaryOut.textContent = usd.format(salary);
      if (inhouseOut) inhouseOut.textContent = usd.format(round100(inhouseYr)) + '/yr';
      if (youOut) youOut.textContent = usd.format(youYr) + '/yr';
      if (saveOut) saveOut.textContent = usd.format(round100(inhouseYr - youYr));
    }
    slider.addEventListener('input', update);
    update();
  }

  function initSeoCalculator() {
    var root = document.querySelector('[data-calc-panel="seo"]');
    if (!root) return;
    var visits = root.querySelector('#seoVisits');
    var cvr = root.querySelector('#seoCvr');
    var cpcEl = root.querySelector('#seoCpc');
    if (!visits || !cvr || !cpcEl) return;
    var visitsOut = root.querySelector('#seoVisitsOut');
    var cvrOut = root.querySelector('#seoCvrOut');
    var cpcOut = root.querySelector('#seoCpcOut');
    var leadsMoOut = root.querySelector('#seoLeadsMo');
    var paidTotalOut = root.querySelector('#seoPaidTotal');
    var paidMoOut = root.querySelector('#seoPaidMo');
    var yearsOut = root.querySelector('#seoYears');
    var leadsTotalOut = root.querySelector('#seoLeadsTotal');
    var timeBtns = root.querySelectorAll('.calc-time-btn');
    var num = new Intl.NumberFormat('en-US');
    var years = 3;
    function update() {
      var v = +visits.value, c = +cvr.value, cpc = +cpcEl.value;
      var months = years * 12;
      var leadsMo = Math.round(v * c / 100);
      var paidTotal = v * cpc * months;
      if (visitsOut) visitsOut.textContent = num.format(v);
      if (cvrOut) cvrOut.textContent = c + '%';
      if (cpcOut) cpcOut.textContent = '$' + cpc.toFixed(2);
      if (leadsMoOut) leadsMoOut.textContent = num.format(leadsMo);
      if (paidTotalOut) paidTotalOut.textContent = usd.format(round1000(paidTotal));
      if (paidMoOut) paidMoOut.textContent = usd.format(round100(v * cpc));
      if (yearsOut) yearsOut.textContent = years;
      if (leadsTotalOut) leadsTotalOut.textContent = num.format(leadsMo * months);
    }
    timeBtns.forEach(function (b) {
      b.addEventListener('click', function () {
        timeBtns.forEach(function (x) { x.classList.remove('is-active'); });
        b.classList.add('is-active');
        years = +b.getAttribute('data-yr');
        update();
      });
    });
    visits.addEventListener('input', update);
    cvr.addEventListener('input', update);
    cpcEl.addEventListener('input', update);
    update();
  }

  function initPaidCalculator() {
    var root = document.querySelector('[data-calc-panel="paid"]');
    if (!root) return;
    var budget = root.querySelector('#paidBudget');
    var cvr = root.querySelector('#paidCvr');
    var value = root.querySelector('#paidValue');
    if (!budget || !cvr || !value) return;
    var cpc = +root.getAttribute('data-cpc');
    var budgetOut = root.querySelector('#paidBudgetOut');
    var cvrOut = root.querySelector('#paidCvrOut');
    var valueOut = root.querySelector('#paidValueOut');
    var customersOut = root.querySelector('#paidCustomers');
    var roasOut = root.querySelector('#paidRoas');
    var revenueOut = root.querySelector('#paidRevenue');
    var num = new Intl.NumberFormat('en-US');
    function update() {
      var b = +budget.value, c = +cvr.value, v = +value.value;
      var clicks = b / cpc;
      var customers = clicks * c / 100;
      var revenue = customers * v;
      var roas = b > 0 ? revenue / b : 0;
      if (budgetOut) budgetOut.textContent = usd.format(b);
      if (cvrOut) cvrOut.textContent = c + '%';
      if (valueOut) valueOut.textContent = usd.format(v);
      if (customersOut) customersOut.textContent = num.format(Math.round(customers));
      if (revenueOut) revenueOut.textContent = usd.format(round100(revenue));
      if (roasOut) roasOut.textContent = roas.toFixed(1);
    }
    budget.addEventListener('input', update);
    cvr.addEventListener('input', update);
    value.addEventListener('input', update);
    update();
  }

  function initCalcSwitch() {
    var wrap = document.querySelector('.calc-wrap');
    if (!wrap) return;
    var tabs = wrap.querySelectorAll('.calc-tab');
    var panels = wrap.querySelectorAll('[data-calc-panel]');
    tabs.forEach(function (t) {
      t.addEventListener('click', function () {
        tabs.forEach(function (x) { x.classList.remove('is-active'); });
        t.classList.add('is-active');
        var k = t.getAttribute('data-calc');
        panels.forEach(function (p) { p.hidden = p.getAttribute('data-calc-panel') !== k; });
      });
    });
  }

  /* ================= REVEAL + counters + skills ================= */
  function initObservers() {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target;
        if (el.classList.contains('reveal')) el.classList.add('in');
        if (el.classList.contains('skill-bar')) el.classList.add('animate');
        if (el.hasAttribute('data-count')) animateCount(el);
        el.querySelectorAll && el.querySelectorAll('[data-count]').forEach(animateCount);
        io.unobserve(el);
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('.reveal, .skill-bar, [data-count]').forEach(function (el) { io.observe(el); });
  }

  /* ================= NAV active + burger ================= */
  function initNav() {
    var path = location.pathname.replace(/\/index\.html$/, '/').replace(/\/$/, '') || '/';
    document.querySelectorAll('.nav-link, .nav-drop-link').forEach(function (link) {
      var href = link.getAttribute('href').replace(/\/$/, '') || '/';
      link.classList.toggle('is-active', href === path || (href !== '/' && path.indexOf(href) === 0));
    });
    var burger = document.getElementById('navBurger'), links = document.getElementById('navLinks');
    if (burger && links) {
      burger.addEventListener('click', function () { links.classList.toggle('open'); });
      links.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { links.classList.remove('open'); }); });
    }
  }

  /* ================= CONTACT FORM (Web3Forms) ================= */
  function initContactForm() {
    var form = document.getElementById('contactForm');
    if (!form) return;
    var status = document.getElementById('cfStatus');
    var es = getLang() === 'es';
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      es = getLang() === 'es';
      if (status) { status.hidden = false; status.className = 'cf-status'; status.textContent = es ? 'Enviando…' : 'Sending…'; }
      fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
        .then(function (r) { return r.json(); })
        .then(function (res) {
          if (res.success) {
            form.reset();
            status.className = 'cf-status ok';
            status.textContent = es ? '¡Gracias! Te responderé muy pronto.' : "Thanks! I'll get back to you very soon.";
          } else {
            status.className = 'cf-status err';
            status.textContent = es ? 'Algo falló. Escríbeme directo por email.' : 'Something went wrong. Please email me directly.';
          }
        })
        .catch(function () {
          status.className = 'cf-status err';
          status.textContent = es ? 'Algo falló. Escríbeme directo por email.' : 'Something went wrong. Please email me directly.';
        });
    });
  }

  /* ================= GLOBAL ONCE: cursor + scroll bar ================= */
  function cursorEnabled() {
    return window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
           !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
  function ensureCursor() {
    if (!cursorEnabled()) return;
    if (!document.getElementById('cursorRing')) {
      var ring = document.createElement('div'); ring.id = 'cursorRing'; ring.className = 'cursor-ring';
      var dot = document.createElement('div'); dot.id = 'cursorDot'; dot.className = 'cursor-dot';
      document.body.appendChild(ring); document.body.appendChild(dot);
      window.__cursorRing = ring; window.__cursorDot = dot;
    }
    // Recreate visible at last known position so it never vanishes after a page swap.
    var d = window.__cursorDot, r = window.__cursorRing;
    if (d) { d.style.left = window.__cx + 'px'; d.style.top = window.__cy + 'px'; d.classList.remove('cursor-hidden'); }
    if (r) { r.style.left = window.__cx + 'px'; r.style.top = window.__cy + 'px'; r.classList.remove('cursor-hidden'); }
    document.documentElement.classList.add('cursor-on');
  }
  function initCursorOnce() {
    if (!cursorEnabled()) return;
    window.__cx = window.innerWidth / 2; window.__cy = window.innerHeight / 2;
    var rx = window.__cx, ry = window.__cy;
    var hoverSel = 'a, button, .svc-core, .chip, .s-card, .c-card, .p-card, .b-card, .lang-toggle, [role="button"]';

    document.addEventListener('mousemove', function (e) {
      window.__cx = e.clientX; window.__cy = e.clientY;
      var d = window.__cursorDot;
      if (d) { d.style.left = window.__cx + 'px'; d.style.top = window.__cy + 'px'; d.classList.remove('cursor-hidden'); }
      if (window.__cursorRing) window.__cursorRing.classList.remove('cursor-hidden');
    });
    document.addEventListener('mouseleave', function () {
      if (window.__cursorDot) window.__cursorDot.classList.add('cursor-hidden');
      if (window.__cursorRing) window.__cursorRing.classList.add('cursor-hidden');
    });
    document.addEventListener('mouseover', function (e) {
      if (e.target.closest && e.target.closest(hoverSel)) {
        if (window.__cursorRing) window.__cursorRing.classList.add('is-hover');
        if (window.__cursorDot) window.__cursorDot.classList.add('is-hover');
      }
    });
    document.addEventListener('mouseout', function (e) {
      if (e.target.closest && e.target.closest(hoverSel)) {
        if (window.__cursorRing) window.__cursorRing.classList.remove('is-hover');
        if (window.__cursorDot) window.__cursorDot.classList.remove('is-hover');
      }
    });
    (function loop() {
      rx += (window.__cx - rx) * 0.16; ry += (window.__cy - ry) * 0.16;
      var r = window.__cursorRing; if (r) { r.style.left = rx + 'px'; r.style.top = ry + 'px'; }
      requestAnimationFrame(loop);
    })();
  }
  function initScrollBarOnce() {
    window.addEventListener('scroll', function () {
      var bar = document.getElementById('scrollProgress'); if (!bar) return;
      var h = document.documentElement;
      bar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + '%';
    }, { passive: true });
  }

  /* ================= LIFECYCLE ================= */
  function onPageLoad() {
    initLang();
    initFilters();
    initServices();
    initCalculator();
    initSeoCalculator();
    initPaidCalculator();
    initCalcSwitch();
    initContactForm();
    initObservers();
    initNav();
    ensureCursor();
  }

  initCursorOnce();
  initScrollBarOnce();
  // ClientRouter fires astro:page-load on first load and every navigation.
  document.addEventListener('astro:page-load', onPageLoad);
})();
