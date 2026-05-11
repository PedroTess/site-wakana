/* ── Navbar scroll ── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('on', window.scrollY > 50);
}, { passive: true });

/* ── Mobile menu ── */
const hbg = document.getElementById('hbg');
const mob = document.getElementById('mob-menu');
hbg.addEventListener('click', () => {
  hbg.classList.toggle('on');
  mob.classList.toggle('on');
  document.body.style.overflow = mob.classList.contains('on') ? 'hidden' : '';
});
function cMenu() {
  hbg.classList.remove('on');
  mob.classList.remove('on');
  document.body.style.overflow = '';
}

/* ── Hero BG ken-burns ── */
window.addEventListener('load', () => document.getElementById('hbg2').classList.add('rdy'));

/* ── Smooth scroll helper ── */
function scrollTo2(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 72;
  window.scrollTo({ top, behavior: 'smooth' });
}
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    if (!id) return;
    e.preventDefault();
    scrollTo2(id);
  });
});

/* ── Intersection Observer animations ── */
const obs = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) en.target.classList.add('vis'); });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('.ai').forEach(el => obs.observe(el));

/* ── Lightbox ── */
function openLb(src) {
  document.getElementById('lb-img').src = src;
  document.getElementById('lb').classList.add('on');
  document.body.style.overflow = 'hidden';
}
function closeLb() {
  document.getElementById('lb').classList.remove('on');
  document.body.style.overflow = '';
}
document.getElementById('lb-img').addEventListener('click', e => e.stopPropagation());
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLb(); });

/* ── Form feedback ── */
document.getElementById('ctform').addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  const orig = btn.innerHTML;
  btn.innerHTML = '✓ Mensagem enviada!';
  btn.style.background = '#25D366';
  btn.style.borderColor = '#25D366';
  setTimeout(() => {
    btn.innerHTML = orig;
    btn.style.background = '';
    btn.style.borderColor = '';
  }, 3000);
});
