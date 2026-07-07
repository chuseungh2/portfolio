/* =========================================================
   main.js — cursor, generative hero mark, mobile nav
   ========================================================= */

(function () {
  'use strict';

  /* ---------- ink cursor (desktop only) ---------- */
  const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (supportsHover) {
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    document.body.appendChild(cursor);

    let mx = 0, my = 0;
    let lastTrailTime = 0;
    const TRAIL_INTERVAL = 28; // ms — throttle trail spawn

    document.addEventListener('mousemove', (e) => {
      mx = e.clientX;
      my = e.clientY;
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

    // hover state — grow on interactive elements
    const hoverables = 'a, button, .work-row, .play-card, .decision, .case-next a';
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

  /* ---------- generative hero mark ---------- */
  const heroMark = document.querySelector('.hero-mark');
  if (heroMark) renderHeroMark(heroMark);

  function renderHeroMark(host) {
    const W = 520, H = 120;
    // 4 wavy strokes, each with random phase / amplitude — every visit a little different
    const lines = [];
    const layerCount = 4;
    for (let i = 0; i < layerCount; i++) {
      const amp     = 14 + Math.random() * 24;
      const phase   = Math.random() * Math.PI * 2;
      const yMid    = 60 + (i - layerCount / 2) * 4;
      const opacity = 1 - i * 0.22;
      const points  = [];
      const steps   = 64;
      for (let s = 0; s <= steps; s++) {
        const t = s / steps;
        const x = 20 + t * (W - 40);
        const y = yMid + Math.sin(t * Math.PI * (2.5 + Math.random() * 0.6) + phase) * amp * (1 - Math.abs(t - 0.5));
        points.push(`${x.toFixed(1)},${y.toFixed(1)}`);
      }
      lines.push(`<polyline points="${points.join(' ')}" fill="none" stroke="#161616" stroke-width="1.1" stroke-linecap="round" opacity="${opacity.toFixed(2)}"/>`);
    }
    // one vermilion ink dot at a random "knot" point
    const dotX = 120 + Math.random() * (W - 240);
    const dotY = 60 + (Math.random() - 0.5) * 18;
    const dotR = 3 + Math.random() * 2;
    const dot = `<circle cx="${dotX.toFixed(1)}" cy="${dotY.toFixed(1)}" r="${dotR.toFixed(1)}" fill="#D14829"/>`;

    host.innerHTML = `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet" width="100%" height="100%">${lines.join('')}${dot}</svg>`;
  }

  /* ---------- mobile nav toggle ---------- */
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

  /* ---------- smooth anchor scroll ---------- */
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
