let prevScrollPos = window.innerHeight / 2;
const navbar = document.querySelector(".sideNavbar");
const breakpoint = document.querySelector('.banner').offsetHeight;
const arrow2 = document.getElementById('arrow');

function hideNav() {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos > breakpoint) {
        navbar.classList.add('active')
        arrow2.classList.add('active')

        if (prevScrollPos > currentScrollPos) {
            navbar.classList.add('active')
            // navbar.style.left = "0";
        } else {
            navbar.classList.remove('active')
            // navbar.style.left = "-80px";
        }
        prevScrollPos = currentScrollPos;
    } else {
        navbar.classList.remove('active')
        arrow2.classList.remove('active')
        // navbar.style.left = "-80px";
    }
}


window.addEventListener('scroll', hideNav);