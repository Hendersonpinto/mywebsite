const navButtons = document.querySelectorAll('.navbar__link')

const sections = {
    'about': document.querySelector('.section--about'),
    'skillset': document.querySelector('.section--skillset'),
    'projects': document.querySelector('.section--projects')
}

function scrollTo() {

    console.log(this.dataset.linkto)
    window.scroll({
        top: sections[this.dataset.linkto].offsetTop - 60,
        left: 0,
        behavior: 'smooth'
    });
}

navButtons.forEach(button => {
    button.addEventListener('click', scrollTo)
})