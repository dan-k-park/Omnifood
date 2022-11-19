// const yearEl = document.querySelector('.year');
// yearEl.textContent = new Date().getFullYear();

const mobileNavBtn = document.querySelector('.mobile-nav');
const header = document.querySelector('.header');
const links = document.querySelectorAll('a:link');

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    if (link.classList.contains('nav__link')) {
      header.classList.toggle('mobile-nav-open');
    }
  });
});

mobileNavBtn.addEventListener('click', () => {
  header.classList.toggle('mobile-nav-open');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 900) {
    header.classList.remove('mobile-nav-open');
  }
});

// Sticky nav

const scrollRoot = document.querySelector('.hero');
const headerLinks = [...document.querySelectorAll('.nav__link')];

const options = {
  root: header,
  rootMargin: `${header.offsetHeight * -1}px`,
  threshold: 0.5,
};

const onIntersect = (entries) => {
  entries.forEach((entries) => {
    console.log(entries);
  });
};

const observer = new IntersectionObserver(onIntersect, options);

observer.observe(scrollRoot);
