const menuToggle = document.querySelector('#menuToggle');
const navLinks = document.querySelector('#navLinks');
menuToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? '×' : '☰';
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = '☰';
}));

const filterButtons = document.querySelectorAll('.filter');
const projectCards = document.querySelectorAll('.project-card');
filterButtons.forEach(button => button.addEventListener('click', () => {
  filterButtons.forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  const filter = button.dataset.filter;
  projectCards.forEach(card => {
    card.hidden = filter !== 'all' && card.dataset.category !== filter;
  });
}));

const form = document.querySelector('#contactForm');
const status = document.querySelector('#formStatus');
form.addEventListener('submit', event => {
  event.preventDefault();
  status.className = 'form-status';
  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const interest = form.elements.interest.value;
  const message = form.elements.message.value.trim();
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (name.length < 2) {
    status.textContent = 'Please enter a name with at least 2 characters.';
    status.classList.add('error'); form.elements.name.focus(); return;
  }
  if (!emailOk) {
    status.textContent = 'Please enter a valid email address.';
    status.classList.add('error'); form.elements.email.focus(); return;
  }
  if (!interest) {
    status.textContent = 'Choose the kind of project you have in mind.';
    status.classList.add('error'); form.elements.interest.focus(); return;
  }
  if (message.length < 10) {
    status.textContent = 'Add a little more detail (at least 10 characters).';
    status.classList.add('error'); form.elements.message.focus(); return;
  }
  status.textContent = `Thanks, ${name}! All fields passed validation. This portfolio demo does not send or store your details.`;
  status.classList.add('success');
});

const themeToggle = document.querySelector('#themeToggle');
function applyTheme(theme) {
  document.body.dataset.theme = theme;
  const dark = theme === 'dark';
  themeToggle.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
  themeToggle.innerHTML = dark ? '☀ <span>Light</span>' : '◐ <span>Theme</span>';
}
applyTheme('light');
themeToggle.addEventListener('click', () => {
  const next = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(next);
});
