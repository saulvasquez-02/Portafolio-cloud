const menuBtn = document.getElementById('menuBtn');
const mnav = document.getElementById('mnav');

menuBtn.addEventListener('click', () => {
  const open = mnav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});

mnav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  mnav.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
}));
