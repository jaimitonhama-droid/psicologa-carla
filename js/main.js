// ===========================
//  CARLA REIS — Psicóloga
//  JavaScript Principal
// ===========================

document.addEventListener('DOMContentLoaded', () => {

  // --- Navbar scroll ---
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  // --- Hamburger menu ---
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  const overlay   = document.getElementById('overlay');

  function closeMenu() {
    if (hamburger) hamburger.classList.remove('open');
    if (navLinks)  navLinks.classList.remove('open');
    if (overlay)   overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      if (overlay) overlay.classList.toggle('active', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
  }

  if (overlay) overlay.addEventListener('click', closeMenu);
  document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', closeMenu));

  // --- Link activo automático ---
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

});
