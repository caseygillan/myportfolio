const home = document.querySelector('.home');
const portfolio = document.querySelector('.portfolio');
const contact = document.querySelector('.contact');
const body = document.querySelector('body');

const homeLink = document.querySelector('.home-link');
const portfolioLink = document.querySelector('.portfolio-link');
const contactLink = document.querySelector('.contact-link');

homeLink.addEventListener('click', function () {
  home.style.display = 'inline-block';
  portfolio.style.display = 'none';
  contact.style.display = 'none';
  body.style.backgroundColor = '#ffc300';
});

portfolioLink.addEventListener('click', function () {
  home.style.display = 'none';
  portfolio.style.display = 'inline-block';
  contact.style.display = 'none';
  body.style.backgroundColor = 'rgb(0, 205, 205)';
});

contactLink.addEventListener('click', function () {
  home.style.display = 'none';
  portfolio.style.display = 'none';
  contact.style.display = 'inline-block';
  body.style.backgroundColor = 'rgb(186, 220, 0)';
});