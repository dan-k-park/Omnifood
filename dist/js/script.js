// const yearEl = document.querySelector('.year');
// yearEl.textContent = new Date().getFullYear();

const mobileNavBtn = document.querySelector('.mobile-nav');
const headerEl = document.querySelector('.header');

mobileNavBtn.addEventListener('click', () => {
  headerEl.classList.toggle('mobile-nav-open');
});

// Smooth scrolling
const allLinks = document.querySelectorAll('a:link');
allLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');
    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }

    // Close mobile nav
    if (link.classList.contains('main-nav-link')) {
      headerEl.classList.toggle('nav-open');
    }
  });
});

// // Sticky Nav
// const heroSectionEl = document.querySelector('.section-hero');

// const observer = new IntersectionObserver(
//   (entries) => {
//     const ent = entries[0];
//     if (!ent.isIntersecting) {
//       document.body.classList.add('sticky');
//     } else {
//       document.body.classList.remove('sticky');
//     }
//   },
//   {
//     root: null,
//     threshold: 0,
//     rootMargin: '-80px',
//   }
// );
// observer.observe(heroSectionEl);

// ///////////////////////////////////////////////////////////
// // Fixing flexbox gap property missing in some Safari versions
// function checkFlexGap() {
//   var flex = document.createElement('div');
//   flex.style.display = 'flex';
//   flex.style.flexDirection = 'column';
//   flex.style.rowGap = '1px';

//   flex.appendChild(document.createElement('div'));
//   flex.appendChild(document.createElement('div'));

//   document.body.appendChild(flex);
//   var isSupported = flex.scrollHeight === 1;
//   flex.parentNode.removeChild(flex);
//   console.log(isSupported);

//   if (!isSupported) document.body.classList.add('no-flexbox-gap');
// }
// checkFlexGap();
