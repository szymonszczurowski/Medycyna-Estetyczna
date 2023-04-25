const nav = document.querySelector('.nav')
const navLink = document.querySelectorAll('.nav__desktop__item-link')
const viewportHeight = window.innerHeight;

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;;
    if (scrollPosition >= viewportHeight) {
      nav.classList.add('nav--white')

      navLink.forEach(el => el.classList.add('nav__desktop__item-link--black'))
    } else {
        nav.classList.remove('nav--white')
        navLink.forEach(el => el.classList.remove('nav__desktop__item-link--black'))    }
  });

  