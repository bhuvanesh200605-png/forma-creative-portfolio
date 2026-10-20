const projects = {
  sunroom: {n:'01', title:'Sunroom<br><em>Market.</em>', intro:'A bright identity concept for a neighborhood market built around good produce and good energy.', discipline:'Brand identity · Art direction', deliverables:'Visual identity · Packaging · Campaign assets', challenge:'Create a distinctive, optimistic identity that feels fresh on packaging, posters, and social media without becoming visually noisy.', approach:'A warm, produce-inspired palette, confident type, and playful circular forms create a flexible system that can scale from a poster to a small digital tile.', word:'GOOD<br>THINGS<br>GROW.', bullets:['Define a memorable visual hook','Build a compact, reusable color and type system','Keep key messages readable at different sizes','Adapt the design across campaign touchpoints']},
  pulse: {n:'02', title:'Pulse<br><em>Wellness.</em>', intro:'A digital product concept that makes daily wellbeing feel clear, encouraging, and easy to understand.', discipline:'Product UI · UX direction', deliverables:'Dashboard concept · Visual system · UI components', challenge:'Explore how a wellness dashboard can surface progress without overwhelming users with metrics or competing visual elements.', approach:'A restrained interface, readable type scale, and a small set of data visualizations prioritize scanning and calm feedback.', word:'YOUR DAY,<br>IN RHYTHM.', bullets:['Prioritize the most useful information','Use consistent spacing and typography','Pair data with clear labels','Keep contrast and mobile readability in mind']},
  'after-hours': {n:'03', title:'After<br><em>Hours.</em>', intro:'A high-energy campaign concept for a fictional music festival, designed to feel expressive across posters and social assets.', discipline:'Campaign art direction · Motion concept', deliverables:'Poster direction · Social tiles · Motion storyboard idea', challenge:'Create a recognizable campaign visual that can carry a strong mood and remain legible across different formats.', approach:'Oversized typography, layered circular forms, and a punchy palette create a system suited to fast-moving digital placements.', word:'AFTER<br>HOURS', bullets:['Lead with a memorable typographic gesture','Build a visual system that crops well','Keep event information easy to scan','Plan motion around rhythm and transitions']},
  atelier: {n:'04', title:'Atelier<br><em>Objects.</em>', intro:'A calm e-commerce concept for thoughtful everyday objects, balancing editorial storytelling with product clarity.', discipline:'Digital storefront · UX direction', deliverables:'Landing page concept · Product storytelling · UI direction', challenge:'Design a storefront that feels considered and editorial while making the product and shopping path easy to understand.', approach:'Neutral tones, generous whitespace, clear hierarchy, and a focused product composition help the content breathe.', word:'LESS,<br>BUT BETTER.', bullets:['Make product imagery the focal point','Keep navigation and calls to action clear','Use whitespace to create hierarchy','Maintain consistency across product pages']}
};
const params = new URLSearchParams(window.location.search);
const key = params.get('project') || 'sunroom';
const p = projects[key] || projects.sunroom;
document.title = p.title.replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim() + ' — FORMA Case Study';
document.querySelector('#caseEyebrow').textContent = `CASE STUDY / ${p.n}`;
document.querySelector('#caseTitle').innerHTML = p.title;
document.querySelector('#caseIntro').textContent = p.intro;
document.querySelector('#caseDiscipline').textContent = p.discipline;
document.querySelector('#caseDeliverables').textContent = p.deliverables;
document.querySelector('#caseChallenge').textContent = p.challenge;
document.querySelector('#caseApproach').textContent = p.approach;
document.querySelector('#caseArtWord').innerHTML = p.word;
document.querySelector('#caseArt').dataset.project = key;
const list = document.querySelector('#caseBullets');
list.replaceChildren(...p.bullets.map(item => { const li=document.createElement('li'); li.textContent=item; return li; }));
const menuToggle = document.querySelector('#menuToggle');
const navLinks = document.querySelector('#navLinks');
menuToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? '×' : '☰';
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open'); menuToggle.setAttribute('aria-expanded','false'); menuToggle.textContent='☰';
}));
const themeToggle = document.querySelector('#themeToggle');
function applyTheme(theme) {
  document.body.dataset.theme = theme;
  const dark = theme === 'dark';
  themeToggle.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
  themeToggle.innerHTML = dark ? '☀ <span>Light</span>' : '◐ <span>Theme</span>';
}
applyTheme('light');
themeToggle.addEventListener('click', () => applyTheme(document.body.dataset.theme === 'dark' ? 'light' : 'dark'));
