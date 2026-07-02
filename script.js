// ==============================
//  BAPWEB — interações
// ==============================
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Navbar scroll effect
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.getBoundingClientRect().top + scrollY - 72, behavior: 'smooth' });
  });
});

// Reveal on scroll
const revealEls = document.querySelectorAll('[data-reveal]');
if (revealEls.length) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${(i % 3) * 90}ms`;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' });
  revealEls.forEach(el => observer.observe(el));
}

// Subtle parallax on hero aurora (mouse + scroll) — desktop only, respects reduced-motion
const aurora = document.querySelector('.aurora');
if (aurora && !prefersReduced && window.matchMedia('(pointer: fine)').matches) {
  const blobs = aurora.querySelectorAll('.blob');
  let raf = null;
  const factors = [0.02, -0.028, 0.018];

  // uses the individual `translate` property so it composes with the keyframe `transform` drift
  const move = (mx, my) => {
    blobs.forEach((b, i) => {
      const f = factors[i] || 0.02;
      b.style.translate = `${mx * f}px ${my * f}px`;
    });
  };

  window.addEventListener('mousemove', e => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      const mx = e.clientX - window.innerWidth / 2;
      const my = e.clientY - window.innerHeight / 2;
      move(mx, my);
      raf = null;
    });
  }, { passive: true });
}
