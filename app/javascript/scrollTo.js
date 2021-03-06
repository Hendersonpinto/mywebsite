const sideNavButtons = document.querySelectorAll('.sideNavbar__item')
const navButtons = document.querySelectorAll('.topNavbar__item')
const arrow = document.getElementById('arrow')
const sections = {
    'about': document.querySelector('.section--about'),
    'skillset': document.querySelector('.section--skillset'),
    'projects': document.querySelector('.section--projects')
}

function scrollTo() {

    window.scroll({
        top: sections[this.dataset.linkto].offsetTop - 60,
        left: 0,
        behavior: 'smooth'
    });
}

arrow.addEventListener('click', () => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
})
sideNavButtons.forEach(button => {
    button.addEventListener('click', scrollTo)
})
navButtons.forEach(button => {
    button.addEventListener('click', scrollTo)
})