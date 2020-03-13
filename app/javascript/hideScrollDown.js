let prevScrollPos = window.innerHeight / 2;
const navbar = document.querySelector(".navbar");
const breakpoint = document.querySelector('.banner').offsetHeight;

function hideNav() {
    const currentScrollPos = window.pageYOffset;
    console.log(breakpoint)
    console.log(prevScrollPos)
    console.log(currentScrollPos)
    if (currentScrollPos > breakpoint + 100) {
        navbar.classList.add('active')
        if (prevScrollPos > currentScrollPos) {
            console.log('i am here')
            navbar.style.top = "0";
        } else {
            console.log('iam here now')
            navbar.style.top = "-50px";
        }
        prevScrollPos = currentScrollPos;
    } else {
        navbar.classList.remove('active')
    }
}


window.addEventListener('scroll', hideNav);