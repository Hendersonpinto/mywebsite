let prevScrollPos = window.innerHeight / 2;
const navbar = document.querySelector(".sideNavbar");
const breakpoint = document.querySelector('.banner').offsetHeight;

function hideNav() {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos > breakpoint) {
        navbar.style.left = "0px";
        if (prevScrollPos > currentScrollPos) {
            navbar.style.left = "0";
        } else {
            navbar.style.left = "-80px";
        }
        prevScrollPos = currentScrollPos;
    } else {
        navbar.style.left = "-80px";
    }
}


window.addEventListener('scroll', hideNav);