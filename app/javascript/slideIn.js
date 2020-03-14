const projects = document.querySelectorAll('.project__wrapper')


function checkSlide() {
    const bottomScreen = window.scrollY + window.innerHeight;
    projects.forEach((project) => {
        const halfProject = project.offsetParent.offsetTop + project.offsetTop + (project.offsetHeight / 4);
        const slides = project.querySelectorAll('.slide')

        if (bottomScreen > halfProject) {
            // [...project.children].forEach(child => child.classList.add('active'))
            slides.forEach(child => child.style.opacity = 1)
            slides.forEach(child => child.classList.add('active'))
        }
    });
}



window.addEventListener('scroll', checkSlide);