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

  
  const aboutUsTextFirst = document.querySelector(".about-us__box-text--first")
  const aboutUsTextSecond = document.querySelector(".about-us__box-text--second")
  const aboutUsBtnFirst = document.querySelector(".about-us__box-btn--first")
  const aboutUsBtnSecond = document.querySelector(".about-us__box-btn--second")

const aboutUsChangeTextFirst = () => {
  aboutUsTextFirst.textContent =
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident possimus optio, ut tempore suscipit nesciunt aut voluptatum similique velit recusandae vero dolorem nostrum ducimus. Quisquam vel minima consectetur deserunt repudiandae nulla eius harum voluptatum iure, aut saepe fugit, porro explicabo?'

              aboutUsTextSecond.textContent =
                  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime deserunt at dignissimos animi porro nemo rerum hic ratione ullam laudantium cumque est, recusandae id, saepe assumenda perferendis nobis eos molestias libero eaque placeat quod obcaecati!'

              aboutUsBtnFirst.classList.add("about-us__box-btn--focus"),
              aboutUsBtnSecond.classList.remove("about-us__box-btn--focus");
}

const aboutUsChangeTextSecond = () => {
  aboutUsTextFirst.textContent =
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime deserunt at dignissimos animi porro nemo rerum hic ratione ullam laudantium cumque est, recusandae id, saepe assumenda perferendis nobis eos molestias libero eaque placeat quod obcaecati!'

              aboutUsTextSecond.textContent =
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident possimus optio, ut tempore suscipit nesciunt aut voluptatum similique velit recusandae vero dolorem nostrum ducimus. Quisquam vel minima consectetur deserunt repudiandae nulla eius harum voluptatum iure, aut saepe fugit, porro explicabo?'
                  
              aboutUsBtnSecond.classList.add("about-us__box-btn--focus"),
              aboutUsBtnFirst.classList.remove("about-us__box-btn--focus");
}


aboutUsBtnFirst.addEventListener('click', aboutUsChangeTextFirst)
aboutUsBtnSecond.addEventListener('click', aboutUsChangeTextSecond)