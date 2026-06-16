const toggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav__link');

toggle.addEventListener('click', () => {
  navMenu.classList.toggle('show-menu');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
});

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 120;
    const sectionId = current.getAttribute('id');
    const navLink = document.querySelector(`.nav__menu a[href*=${sectionId}]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink?.classList.add('active-link');
    } else {
      navLink?.classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);

const sr = ScrollReveal({
  origin: 'top',
  distance: '40px',
  duration: 1500,
  delay: 200,
});

sr.reveal('.hero__data, .about__content, .skill-card, .timeline__item, .contact__card, .contact__form', {
  interval: 100,
});
sr.reveal('.hero__image, .about__card', { delay: 300 });

function sendMessage() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return;
  }

  alert(`Message sent!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
  document.getElementById('contactForm').reset();
}

