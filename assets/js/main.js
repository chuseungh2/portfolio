/* =========================================================
   main.js — ink cursor, generative marks, living details
   (interactions live on landing / nav / transitions only)
   ========================================================= */

(function () {
  'use strict';

  const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* =========================================================
     generative ink marks — one signature per page/case
     ========================================================= */
  const MARK_PRESETS = {
    // layers · amplitude range · wave frequency range
    'home':     { layers: 4, amp: [14, 38], freq: [2.5, 3.1] },
    'asah':     { layers: 3, amp: [10, 24], freq: [3.4, 4.2] }, // tight, systematic
    'health-u': { layers: 3, amp: [20, 34], freq: [1.5, 2.1] }, // calm, long waves
    'scrim':    { layers: 5, amp: [12, 30], freq: [2.8, 3.8] }  // energetic, layered
  };

  function buildMarkSVG(presetKey) {
    const W = 520, H = 120;
    const p = MARK_PRESETS[presetKey] || MARK_PRESETS.home;
    const parts = [];

    for (let i = 0; i < p.layers; i++) {
      const amp     = p.amp[0] + Math.random() * (p.amp[1] - p.amp[0]);
      const freq    = p.freq[0] + Math.random() * (p.freq[1] - p.freq[0]);
      const phase   = Math.random() * Math.PI * 2;
      const yMid    = 60 + (i - p.layers / 2) * 4;
      const opacity = 1 - i * (0.7 / p.layers);
      const points  = [];
      const steps   = 64;
      for (let s = 0; s <= steps; s++) {
        const t = s / steps;
        const x = 20 + t * (W - 40);
        const y = yMid + Math.sin(t * Math.PI * freq + phase) * amp * (1 - Math.abs(t - 0.5));
        points.push(`${x.toFixed(1)},${y.toFixed(1)}`);
      }
      parts.push(`<polyline points="${points.join(' ')}" fill="none" stroke="#161616" stroke-width="1.1" stroke-linecap="round" opacity="${opacity.toFixed(2)}"/>`);
    }

    // one vermilion ink dot at a random "knot" point
    const dotX = 120 + Math.random() * (W - 240);
    const dotY = 60 + (Math.random() - 0.5) * 18;
    const dotR = 3 + Math.random() * 2;
    parts.push(`<circle cx="${dotX.toFixed(1)}" cy="${dotY.toFixed(1)}" r="${dotR.toFixed(1)}" fill="#D14829"/>`);

    return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet" width="100%" height="100%">${parts.join('')}</svg>`;
  }

  function renderMark(host, presetKey, animate, speed) {
    host.innerHTML = buildMarkSVG(presetKey);
    if (!animate || prefersReducedMotion) return;

    const svg = host.querySelector('svg');
    const k = speed || 1; // <1 = faster
    svg.querySelectorAll('polyline').forEach((ln, i) => {
      const len = ln.getTotalLength();
      ln.style.strokeDasharray = len;
      ln.style.strokeDashoffset = len;
      ln.getBoundingClientRect(); // flush styles before transitioning
      ln.style.transition = `stroke-dashoffset ${Math.round((850 + i * 120) * k)}ms cubic-bezier(.5, 0, .3, 1) ${Math.round(i * 130 * k)}ms`;
      ln.style.strokeDashoffset = '0';
    });
    const dot = svg.querySelector('circle');
    if (dot) {
      dot.style.opacity = '0';
      dot.getBoundingClientRect();
      dot.style.transition = `opacity .35s ease ${Math.round(950 * k)}ms`;
      dot.style.opacity = '1';
    }
  }

  // hero mark (home) + case marks — drawn on load, redrawn on click
  document.querySelectorAll('.hero-mark, .case-mark').forEach(host => {
    const key = host.dataset.mark || 'home';
    renderMark(host, key, true);
    host.addEventListener('click', () => renderMark(host, key, true));
  });

  /* =========================================================
     ink cursor + trail + click splatter (desktop only)
     ========================================================= */
  if (supportsHover) {
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    cursor.style.opacity = '0'; // hidden until first mousemove
    document.body.appendChild(cursor);

    let mx = 0, my = 0, cursorShown = false;
    let lastTrailTime = 0;
    const TRAIL_INTERVAL = 28; // ms — throttle trail spawn

    document.addEventListener('mousemove', (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (!cursorShown) { cursorShown = true; cursor.style.opacity = '1'; }
      cursor.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;

      const now = performance.now();
      if (!prefersReducedMotion && now - lastTrailTime > TRAIL_INTERVAL && Math.random() > 0.4) {
        lastTrailTime = now;
        spawnTrail(mx, my);
      }
    });

    function spawnTrail(x, y) {
      const t = document.createElement('div');
      t.className = 'cursor-trail';
      const size = 3 + Math.random() * 4;
      t.style.width = size + 'px';
      t.style.height = size + 'px';
      t.style.left = (x + (Math.random() - 0.5) * 6) + 'px';
      t.style.top  = (y + (Math.random() - 0.5) * 6) + 'px';
      t.style.transform = 'translate(-50%, -50%)';
      document.body.appendChild(t);

      requestAnimationFrame(() => {
        t.style.transition = 'opacity 1.3s ease-out, transform 1.3s ease-out';
        t.style.opacity = '0';
        t.style.transform = 'translate(-50%, -50%) scale(0.4)';
      });
      setTimeout(() => t.remove(), 1400);
    }

    // click splatter — a few ink droplets from the click point
    if (!prefersReducedMotion) {
      document.addEventListener('click', (e) => {
        const count = 5 + Math.floor(Math.random() * 3);
        for (let i = 0; i < count; i++) {
          const d = document.createElement('div');
          d.className = 'ink-splat';
          const size = 2 + Math.random() * 4;
          d.style.width = size + 'px';
          d.style.height = size + 'px';
          d.style.left = e.clientX + 'px';
          d.style.top  = e.clientY + 'px';
          d.style.transform = 'translate(-50%, -50%)';
          document.body.appendChild(d);

          const angle = Math.random() * Math.PI * 2;
          const dist  = 12 + Math.random() * 26;
          const dx = Math.cos(angle) * dist;
          const dy = Math.sin(angle) * dist - 6; // slight upward bias
          requestAnimationFrame(() => {
            d.style.transition = 'transform .55s cubic-bezier(.2, .6, .3, 1), opacity .55s ease-out';
            d.style.transform = `translate(-50%, -50%) translate(${dx.toFixed(0)}px, ${dy.toFixed(0)}px) scale(.25)`;
            d.style.opacity = '0';
          });
          setTimeout(() => d.remove(), 650);
        }
      });
    }

    // hover state — grow on interactive elements
    const hoverables = 'a, button, .work-row, .play-card, .decision, .case-next a, .hero-mark, .case-mark';
    document.querySelectorAll(hoverables).forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.width  = '28px';
        cursor.style.height = '28px';
        cursor.style.opacity = '.35';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.width  = '8px';
        cursor.style.height = '8px';
        cursor.style.opacity = '1';
      });
    });
  }

  /* =========================================================
     work-row hover preview — each case's ink signature
     follows the cursor over its row (desktop only)
     ========================================================= */
  if (supportsHover) {
    const preview = document.createElement('div');
    preview.className = 'work-preview';
    document.body.appendChild(preview);

    let px = 0, py = 0, tx = 0, ty = 0, raf = null, visible = false;

    function follow() {
      px += (tx - px) * 0.18;
      py += (ty - py) * 0.18;
      preview.style.left = px + 'px';
      preview.style.top  = py + 'px';
      if (visible || Math.abs(tx - px) > 0.5 || Math.abs(ty - py) > 0.5) {
        raf = requestAnimationFrame(follow);
      } else {
        raf = null;
      }
    }

    document.querySelectorAll('a.work-row').forEach(row => {
      const m = row.getAttribute('href').match(/(asah|health-u|scrim)/);
      if (!m) return;
      const key = m[1];

      row.addEventListener('mouseenter', (e) => {
        renderMark(preview, key, true, 0.45);
        px = tx = e.clientX; py = ty = e.clientY;
        preview.classList.add('is-visible');
        visible = true;
        if (!raf) raf = requestAnimationFrame(follow);
      });
      row.addEventListener('mousemove', (e) => {
        tx = e.clientX; ty = e.clientY;
      });
      row.addEventListener('mouseleave', () => {
        preview.classList.remove('is-visible');
        visible = false;
      });
    });
  }

  /* =========================================================
     page transition — ink wipe between internal pages
     ========================================================= */
  if (!prefersReducedMotion) {
    const wipe = document.createElement('div');
    wipe.className = 'page-wipe';
    document.body.appendChild(wipe);

    // arriving via a wiped navigation: reveal the page
    if (sessionStorage.getItem('ink-wipe') === '1') {
      sessionStorage.removeItem('ink-wipe');
      wipe.classList.add('is-out');
      requestAnimationFrame(() => requestAnimationFrame(() => {
        wipe.classList.add('is-leaving');
      }));
      setTimeout(() => wipe.classList.remove('is-out', 'is-leaving'), 550);
    }

    document.addEventListener('click', (e) => {
      const a = e.target.closest('a[href]');
      if (!a || e.defaultPrevented) return;
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (a.target === '_blank' || a.hasAttribute('download')) return;

      let url;
      try { url = new URL(a.href, location.href); } catch (err) { return; }
      if (url.origin !== location.origin) return;
      if (url.pathname === location.pathname) return; // in-page anchors
      if (/\.pdf$/i.test(url.pathname)) return;

      e.preventDefault();
      sessionStorage.setItem('ink-wipe', '1');
      wipe.classList.add('is-in');
      setTimeout(() => { location.href = url.href; }, 360);
    });

    // back/forward cache: never leave the overlay stuck
    window.addEventListener('pageshow', (e) => {
      if (e.persisted) wipe.classList.remove('is-in', 'is-out', 'is-leaving');
    });
  }

  /* =========================================================
     reading progress rule (case pages, all devices)
     ========================================================= */
  if (document.querySelector('.case-hero')) {
    const bar = document.createElement('div');
    bar.className = 'read-progress';
    document.body.appendChild(bar);

    let ticking = false;
    function updateProgress() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      bar.style.transform = `scaleX(${p.toFixed(4)})`;
      ticking = false;
    }
    window.addEventListener('scroll', () => {
      if (!ticking) { ticking = true; requestAnimationFrame(updateProgress); }
    }, { passive: true });
    updateProgress();
  }

  /* =========================================================
     section heads — ink fade-in on scroll
     ========================================================= */
  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    document.body.classList.add('js-reveal');
    const targets = document.querySelectorAll('.sec-head, .case-section-head');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-inview');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.35, rootMargin: '0px 0px -5% 0px' });
    targets.forEach(t => io.observe(t));
  }

  /* =========================================================
     mobile nav toggle
     ========================================================= */
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks  = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('is-open');
      navToggle.classList.toggle('is-open', open);
      navToggle.setAttribute('aria-expanded', String(open));
    });
    // close on anchor click
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('is-open');
        navToggle.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* =========================================================
     smooth anchor scroll
     ========================================================= */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
    });
  });

})();
