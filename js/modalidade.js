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
mob.querySelectorAll('a').forEach(a => a.addEventListener('click', cMenu));

/* ── Animate-in observer ── */
const obs = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) en.target.classList.add('vis'); });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.ai').forEach(el => obs.observe(el));
