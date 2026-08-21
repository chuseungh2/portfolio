/* =========================================================
   main.js — scroll reveal, scroll-spy, nav inversion, lightbox,
   media loading, cursor + hero mark, warmth dial, parallax.

   One IIFE, zero dependencies. Each init* guards its own
   preconditions and no-ops if its markup isn't present, so this
   file works unmodified on the case-study pages too (Phase 6).
   ========================================================= */

(function () {
  'use strict';

  var reduced  = window.matchMedia('(prefers-reduced-motion: reduce)');
  var canHover = window.matchMedia('(hover: hover) and (pointer: fine)');
  var hasIO    = 'IntersectionObserver' in window;

  /* ---------- 1. scroll reveal ---------- */
  function initReveal() {
    var items = document.querySelectorAll('[data-reveal]');
    if (!items.length) return;

    var showAll = function () {
      items.forEach(function (el) { el.classList.add('is-in'); });
    };
    if (!hasIO || reduced.matches) { showAll(); return; }

    // stagger: direct [data-reveal] children of a group get an
    // index-based delay, capped so a long list doesn't feel broken
    document.querySelectorAll('[data-reveal-group]').forEach(function (group) {
      var step = Number(group.dataset.revealStep) || 80;
      var cap = Number(group.dataset.revealCap) || 5;
      var children = group.querySelectorAll(':scope > [data-reveal]');
      children.forEach(function (el, i) {
        el.style.setProperty('--reveal-delay', Math.min(i, cap) * step + 'ms');
      });
    });

    // threshold: 0 (not e.g. 0.15) deliberately — some browser engines'
    // first IntersectionObserver callback after observe() reports a stale
    // ratio of 0 before a layout pass catches up, which a non-zero
    // threshold never crosses and a fresh element then never reveals.
    // The -10% rootMargin below already delays the fire until an element
    // is meaningfully inside the viewport, so threshold:0 loses nothing.
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0 });

    items.forEach(function (el) { io.observe(el); });

    // if reduced-motion is turned on mid-session, stop hiding things
    reduced.addEventListener('change', function (e) {
      if (e.matches) { io.disconnect(); showAll(); }
    });

    // safety net: content must never be stuck invisible. If anything is
    // still unrevealed after 3s (a stalled observer, an odd embedding
    // context, a browser quirk this wasn't tested against), show it.
    setTimeout(function () {
      var stuck = document.querySelectorAll('[data-reveal]:not(.is-in)');
      stuck.forEach(function (el) { el.classList.add('is-in'); });
    }, 3000);
  }

  /* ---------- 2. scroll-spy ---------- */
  function initScrollSpy() {
    var here = document.querySelector('.nav-here');
    var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-links a[href^="#"]'));
    var sections = Array.prototype.slice.call(document.querySelectorAll('[data-nav-label]'));
    if (!hasIO || !sections.length) return;

    var ratios = new Map();
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        ratios.set(e.target, e.isIntersecting ? e.intersectionRatio : 0);
      });
      var best = null, bestRatio = 0;
      ratios.forEach(function (r, el) {
        if (r > bestRatio) { bestRatio = r; best = el; }
      });
      if (!best) return;
      if (here) here.textContent = best.dataset.navLabel || '';
      var id = best.id;
      navLinks.forEach(function (a) {
        var on = id && a.getAttribute('href') === '#' + id;
        a.classList.toggle('is-current', !!on);
        if (on) a.setAttribute('aria-current', 'true');
        else a.removeAttribute('aria-current');
      });
    }, { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] });

    sections.forEach(function (s) { io.observe(s); });
  }

  /* ---------- 3. nav inversion over dark bands ---------- */
  function initNavContrast() {
    var nav = document.querySelector('.nav');
    var bands = Array.prototype.slice.call(document.querySelectorAll('[data-band="dark"]'));
    if (!nav || !bands.length || !hasIO) return;

    var io, over = new Set();
    var build = function () {
      if (io) io.disconnect();
      over.clear();
      var navH = nav.offsetHeight;
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) over.add(e.target);
          else over.delete(e.target);
        });
        nav.classList.toggle('nav--invert', over.size > 0);
      }, { rootMargin: '0px 0px -' + Math.max(0, window.innerHeight - navH) + 'px 0px', threshold: 0 });
      bands.forEach(function (b) { io.observe(b); });
    };
    build();

    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(build, 150);
    });
  }

  /* ---------- 4. nav scroll-progress hairline ---------- */
  function initNavProgress() {
    var bar = document.querySelector('.nav-progress');
    if (!bar) return;
    var ticking = false;
    var update = function () {
      var doc = document.documentElement;
      var max = doc.scrollHeight - doc.clientHeight;
      var pct = max > 0 ? Math.min(1, doc.scrollTop / max) : 0;
      bar.style.transform = 'scaleX(' + pct.toFixed(4) + ')';
      ticking = false;
    };
    document.addEventListener('scroll', function () {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }

  /* ---------- 5. mobile nav menu ---------- */
  function initNavMenu() {
    var toggle = document.querySelector('.nav-toggle');
    var links = document.querySelector('.nav-links');
    var main = document.querySelector('main');
    if (!toggle || !links) return;

    var setOpen = function (open) {
      links.classList.toggle('is-open', open);
      toggle.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
      if (main) {
        if (open) main.setAttribute('inert', '');
        else main.removeAttribute('inert');
      }
      if (open) {
        var first = links.querySelector('a');
        if (first) first.focus();
      }
    };

    toggle.addEventListener('click', function () {
      setOpen(!links.classList.contains('is-open'));
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { setOpen(false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && links.classList.contains('is-open')) {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  /* ---------- 6. lightbox (native <dialog>) ---------- */
  function initLightbox() {
    var triggers = Array.prototype.slice.call(document.querySelectorAll('[data-lightbox]'));
    if (!triggers.length || typeof HTMLDialogElement === 'undefined') return;

    var dialog, imgEl, captionEl, prevBtn, nextBtn, closeBtn;
    var group = [], index = 0, opener = null;

    var build = function () {
      dialog = document.createElement('dialog');
      dialog.className = 'lightbox';
      dialog.setAttribute('data-band', 'dark');
      dialog.innerHTML =
        '<div class="lightbox-frame">' +
          '<button type="button" class="lightbox-close" aria-label="Close">&#10005;</button>' +
          '<button type="button" class="lightbox-prev" aria-label="Previous image">&larr;</button>' +
          '<img alt="">' +
          '<button type="button" class="lightbox-next" aria-label="Next image">&rarr;</button>' +
          '<p class="lightbox-caption"></p>' +
        '</div>';
      document.body.appendChild(dialog);
      imgEl = dialog.querySelector('img');
      captionEl = dialog.querySelector('.lightbox-caption');
      prevBtn = dialog.querySelector('.lightbox-prev');
      nextBtn = dialog.querySelector('.lightbox-next');
      closeBtn = dialog.querySelector('.lightbox-close');

      closeBtn.addEventListener('click', function () { dialog.close(); });
      prevBtn.addEventListener('click', function () { show(index - 1); });
      nextBtn.addEventListener('click', function () { show(index + 1); });
      dialog.addEventListener('click', function (e) {
        if (e.target === dialog) dialog.close();
      });
      dialog.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') show(index - 1);
        if (e.key === 'ArrowRight') show(index + 1);
      });
      dialog.addEventListener('close', function () {
        if (opener) opener.focus();
      });
    };

    var show = function (i) {
      index = (i + group.length) % group.length;
      var el = group[index];
      imgEl.src = el.dataset.full || el.currentSrc || el.src;
      imgEl.alt = el.alt || '';
      var figure = el.closest('figure');
      var figcaption = figure ? figure.querySelector('figcaption') : null;
      captionEl.textContent = figcaption ? figcaption.textContent : (el.alt || '');
      var multi = group.length > 1;
      prevBtn.hidden = !multi;
      nextBtn.hidden = !multi;
    };

    triggers.forEach(function (el) {
      el.style.cursor = 'zoom-in';
      el.addEventListener('click', function (e) {
        e.preventDefault();
        var key = el.dataset.lightbox;
        group = triggers.filter(function (t) { return t.dataset.lightbox === key; });
        index = group.indexOf(el);
        opener = el;
        if (!dialog) build();
        show(index);
        dialog.showModal();
      });
    });
  }

  /* ---------- 7. media: lazy-load fade-in + broken-image fallback ---------- */
  function initMedia() {
    document.querySelectorAll('img[loading]').forEach(function (img) {
      if (img.complete) return;
      img.classList.add('is-loading');
      img.addEventListener('load', function () {
        img.classList.remove('is-loading');
      }, { once: true });
      img.addEventListener('error', function () {
        img.classList.remove('is-loading');
        var figure = img.closest('figure');
        if (figure) figure.classList.add('has-error');
      }, { once: true });
    });
  }

  /* ---------- 8. generative hero mark ---------- */
  function initHeroMark() {
    var host = document.querySelector('.hero-mark');
    if (!host) return;

    var W = 520, H = 120;
    // stable within a day (changes on revisit tomorrow, not every reload)
    var seed = Math.floor(Date.now() / 86400000) || 1;
    var s = seed;
    var rand = function () {
      s = (s * 1103515245 + 12345) & 0x7fffffff;
      return s / 0x7fffffff;
    };

    var layerCount = 4;
    var lines = [];
    for (var i = 0; i < layerCount; i++) {
      var amp = 14 + rand() * 24;
      var phase = rand() * Math.PI * 2;
      var yMid = 60 + (i - layerCount / 2) * 4;
      var opacity = 1 - i * 0.22;
      var freq = 2.5 + rand() * 0.6;
      var points = [];
      var steps = 64;
      for (var st = 0; st <= steps; st++) {
        var t = st / steps;
        var x = 20 + t * (W - 40);
        var y = yMid + Math.sin(t * Math.PI * freq + phase) * amp * (1 - Math.abs(t - 0.5));
        points.push(x.toFixed(1) + ',' + y.toFixed(1));
      }
      // currentColor + var(--accent) instead of hardcoded hex, so the
      // mark recolors for free inside a dark band via .hero-mark { color }
      lines.push('<polyline points="' + points.join(' ') + '" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" opacity="' + opacity.toFixed(2) + '"/>');
    }
    var dotX = 120 + rand() * (W - 240);
    var dotY = 60 + (rand() - 0.5) * 18;
    var dotR = 3 + rand() * 2;
    var dot = '<circle cx="' + dotX.toFixed(1) + '" cy="' + dotY.toFixed(1) + '" r="' + dotR.toFixed(1) + '" fill="var(--accent)"/>';

    host.innerHTML = '<svg viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="xMidYMid meet" width="100%" height="100%">' + lines.join('') + dot + '</svg>';
  }

  /* ---------- 9. ink cursor (desktop only) ---------- */
  function initCursor() {
    if (!canHover.matches || reduced.matches) return;

    var cursor = document.createElement('div');
    cursor.className = 'cursor';
    document.body.appendChild(cursor);

    var POOL_SIZE = 8;
    var pool = [];
    for (var p = 0; p < POOL_SIZE; p++) {
      var t = document.createElement('div');
      t.className = 'cursor-trail';
      t.style.opacity = '0';
      document.body.appendChild(t);
      pool.push(t);
    }
    var poolIndex = 0;
    var lastTrailTime = 0;
    var TRAIL_INTERVAL = 28;

    document.addEventListener('mousemove', function (e) {
      var x = e.clientX, y = e.clientY;
      cursor.style.transform = 'translate(' + x + 'px, ' + y + 'px) translate(-50%, -50%)';

      var now = performance.now();
      if (now - lastTrailTime > TRAIL_INTERVAL && Math.random() > 0.4) {
        lastTrailTime = now;
        spawnTrail(x, y);
      }
    });

    function spawnTrail(x, y) {
      var el = pool[poolIndex];
      poolIndex = (poolIndex + 1) % POOL_SIZE;
      var size = 3 + Math.random() * 4;
      el.style.transition = 'none';
      el.style.width = size + 'px';
      el.style.height = size + 'px';
      el.style.left = (x + (Math.random() - 0.5) * 6) + 'px';
      el.style.top = (y + (Math.random() - 0.5) * 6) + 'px';
      el.style.transform = 'translate(-50%, -50%) scale(1)';
      el.style.opacity = '.3';
      // eslint-disable-next-line no-unused-expressions
      el.offsetHeight; // force reflow so the transition below actually animates
      requestAnimationFrame(function () {
        el.style.transition = 'opacity 1.3s ease-out, transform 1.3s ease-out';
        el.style.opacity = '0';
        el.style.transform = 'translate(-50%, -50%) scale(0.4)';
      });
    }

    var hoverables = 'a, button, .play-card, [data-lightbox], input[type="range"]';
    document.addEventListener('pointerover', function (e) {
      if (e.target.closest && e.target.closest(hoverables)) {
        cursor.style.width = '28px';
        cursor.style.height = '28px';
        cursor.style.opacity = '.35';
      }
    });
    document.addEventListener('pointerout', function (e) {
      if (e.target.closest && e.target.closest(hoverables)) {
        cursor.style.width = '8px';
        cursor.style.height = '8px';
        cursor.style.opacity = '1';
      }
    });
  }

  /* keyboard users must never be stuck with an invisible pointer */
  function initKeyboardGuard() {
    window.addEventListener('keydown', function (e) {
      if (e.key === 'Tab') document.documentElement.classList.add('is-keyboard');
    });
    window.addEventListener('mousedown', function () {
      document.documentElement.classList.remove('is-keyboard');
    });
  }

  /* ---------- 10. warmth dial — the signature interactive element ----------
     Makes the About section's own thesis ("warm enough to use, credible
     enough to trust") operable: drag toward warm and the mock reply below
     gets softer; drag toward clinical and it gets terser. The aria-live
     text only rewrites when the tone actually crosses a threshold, so
     dragging doesn't flood a screen reader with every intermediate value. */
  function initWarmthDial() {
    var root = document.querySelector('[data-warmth-dial]');
    if (!root) return;
    var range = root.querySelector('[data-warmth-range]');
    var reply = root.querySelector('.warmth-reply');
    var text = root.querySelector('[data-warmth-text]');
    if (!range || !reply || !text) return;

    var STATES = [
      { max: 33, tone: 'clinical', copy: 'Query received. Returning 3 results.', dots: 0 },
      { max: 66, tone: 'balanced', copy: 'Got it — here’s what I found. Three options.', dots: 2 },
      { max: 100, tone: 'warm', copy: 'Ah, that one’s tricky. Let me look — okay, three ideas.', dots: 3 }
    ];
    var stateFor = function (v) {
      for (var i = 0; i < STATES.length; i++) if (v <= STATES[i].max) return STATES[i];
      return STATES[STATES.length - 1];
    };
    var dotsMarkup = function (n) {
      var out = '<span class="warmth-dots" aria-hidden="true">';
      for (var i = 0; i < 3; i++) out += '<span class="' + (i < n ? 'is-active' : '') + '"></span>';
      return out + '</span>';
    };

    var last = null;
    var apply = function (value) {
      var state = stateFor(Number(value));
      reply.dataset.tone = state.tone;
      if (state !== last) {
        text.innerHTML = state.copy + dotsMarkup(state.dots);
        last = state;
      }
    };

    apply(range.value);
    range.addEventListener('input', function () { apply(range.value); });
  }

  /* ---------- 11. subtle parallax on the work-index portrait pair ---------- */
  function initParallax() {
    if (reduced.matches) return;
    var els = Array.prototype.slice.call(document.querySelectorAll('[data-parallax]'));
    if (!els.length) return;

    var ticking = false;
    var update = function () {
      var vh = window.innerHeight;
      els.forEach(function (el) {
        var r = el.getBoundingClientRect();
        var progress = (r.top + r.height / 2 - vh / 2) / vh;
        var y = Math.max(-18, Math.min(18, progress * -18));
        el.style.setProperty('--parallax-y', y.toFixed(1) + 'px');
      });
      ticking = false;
    };
    document.addEventListener('scroll', function () {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }

  /* ---------- 12. anchor scroll — focuses the target so keyboard users
     land where sighted users land, which scrollIntoView alone doesn't do ---------- */
  function initAnchors() {
    document.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a || a.getAttribute('href').length < 2) return;
      var target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: reduced.matches ? 'auto' : 'smooth', block: 'start' });
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
      if (history.pushState) history.pushState(null, '', a.getAttribute('href'));
    });
  }

  /* ---------- boot ---------- */
  function boot() {
    initReveal();
    initScrollSpy();
    initNavContrast();
    initNavProgress();
    initNavMenu();
    initLightbox();
    initMedia();
    initHeroMark();
    initCursor();
    initKeyboardGuard();
    initWarmthDial();
    initParallax();
    initAnchors();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
