const projects = document.querySelectorAll('.project__wrapper')


function checkSlide() {
    const bottomScreen = window.scrollY + window.innerHeight;
    projects.forEach((project) => {
        const halfProject = project.offsetParent.offsetTop + project.offsetTop + (project.offsetHeight / 4);
        const slides = project.querySelectorAll('.slide')
        console.dir(project)
        console.dir(project.children)
        console.dir(project.querySelectorAll('.slide'))
        console.log(`the half is ${halfProject}`);
        // console.log(`The top of the screen is at ${topScreen}`);
        // console.log(`The bottom of the screen is at ${bottomScreen}`);
        // console.log(`The top of the project is at ${project.offsetTop}`);
        // console.log(`The height of the project is ${project.offsetHeight}`);

        if (bottomScreen > halfProject) {
            // project.classList.add('active');
            // [...project.children].forEach(child => child.classList.add('active'))
            slides.forEach(child => child.classList.add('active'))
        }
    });
}



window.addEventListener('scroll', checkSlide);