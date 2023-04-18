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
handleNavHover(navDesktopItemWomen, navBoxWomen);

const navDesktopItemMen = document.querySelector('.nav__desktop__item--men');
const navBoxMen = document.querySelector('.nav__box--men');
handleNavHover(navDesktopItemMen, navBoxMen);

function handleNavHover(navItem, navBox) {
	let timeoutId;
  
	navItem.addEventListener('mouseover', () => {
	  clearTimeout(timeoutId);
	  navBox.style.display = 'flex';
	});
  
	navBox.addEventListener('mouseenter', () => {
	  clearTimeout(timeoutId);
	});
  
	navBox.addEventListener('mouseleave', () => {
	  hideNavBox();
	});
  
	navItem.addEventListener('mouseout', () => {
	  hideNavBox();
	});
  
	function hideNavBox() {
	  timeoutId = setTimeout(() => {
		navBox.style.display = 'none';
	  }, 500);
	}
  }