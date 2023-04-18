const women = document.querySelector('#women')
const men = document.querySelector('#men')
const bodyWomen = document.querySelector('#women-body')
const bodyFace = document.querySelector('#women-face')

const hamburgerBtn = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav__mobile')
const navMobileCloseBtn = document.querySelector('.nav__mobile__button')

hamburgerBtn.addEventListener('click', () => {
    navMobile.classList.toggle('nav__mobile--active')
})


navMobileCloseBtn.addEventListener('click', () => {
    navMobile.classList.toggle('nav__mobile--unactive')

})

women.addEventListener('click', () => {
	const list = women.nextElementSibling
	list.classList.toggle('nav__mobile__list--active')
	bodyWomen.nextElementSibling.classList.remove('nav__mobile__list--active')
	bodyFace.nextElementSibling.classList.remove('nav__mobile__list--active')
	men.nextElementSibling.classList.remove('nav__mobile__list--active')
})

bodyWomen.addEventListener('click', () => {
	const list = bodyWomen.nextElementSibling
	list.classList.toggle('nav__mobile__list--active')
	bodyFace.nextElementSibling.classList.remove('nav__mobile__list--active')
	men.nextElementSibling.classList.remove('nav__mobile__list--active')
})

bodyFace.addEventListener('click', () => {
	const list = bodyFace.nextElementSibling
	list.classList.toggle('nav__mobile__list--active')
	bodyWomen.nextElementSibling.classList.remove('nav__mobile__list--active')
	men.nextElementSibling.classList.remove('nav__mobile__list--active')
})

men.addEventListener('click', () => {
	const list = men.nextElementSibling
	list.classList.toggle('nav__mobile__list--active')
	bodyWomen.nextElementSibling.classList.remove('nav__mobile__list--active')
	bodyFace.nextElementSibling.classList.remove('nav__mobile__list--active')
	women.nextElementSibling.classList.remove('nav__mobile__list--active')
})

const navDesktopItemWomen = document.querySelector('.nav__desktop__item--women');
const navBoxWomen = document.querySelector('.nav__box--women');
let timeoutIdWomen;


navDesktopItemWomen.addEventListener('mouseover', () => {
  clearTimeout(timeoutIdWomen);
  navBoxWomen.style.display = 'flex';
});

navBoxWomen.addEventListener('mouseenter', () => {
  clearTimeout(timeoutIdWomen);
});

navBoxWomen.addEventListener('mouseleave', () => {
  hideNavBoxWomen();
});

navDesktopItemWomen.addEventListener('mouseout', () => {
  hideNavBoxWomen();
});

function hideNavBoxWomen() {
  timeoutIdWomen = setTimeout(() => {
    navBoxWomen.style.display = 'none';
  }, 500);
}



const navDesktopItemMen = document.querySelector('.nav__desktop__item--men');
const navBoxWoMen = document.querySelector('.nav__box--men');
let timeoutIdMen;

navDesktopItemMen.addEventListener('mouseover', () => {
  clearTimeout(timeoutIdMen);
  navBoxWoMen.style.display = 'flex';
});

navBoxWoMen.addEventListener('mouseenter', () => {
  clearTimeout(timeoutIdMen);
});

navBoxWoMen.addEventListener('mouseleave', () => {
	hideNavBoxMen();
});

navDesktopItemMen.addEventListener('mouseout', () => {
  hideNavBoxMen();
});

function hideNavBoxMen() {
	timeoutIdMen = setTimeout(() => {
    navBoxWoMen.style.display = 'none';
  }, 400);
}
