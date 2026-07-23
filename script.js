const glow = document.querySelector('.cursor-glow');
if (window.matchMedia('(pointer:fine)').matches) {
  glow.style.display = 'block';
  window.addEventListener('pointermove', (event) => {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
  });
}

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.desktop-nav');
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('nav-open', !isOpen);
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('nav-open');
  });
});
