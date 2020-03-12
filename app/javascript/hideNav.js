let prevScrollPos = window.innerHeight / 2;
const navbar = document.querySelector(".navbar");

function hideNav() {
    console.log(prevScrollPos)
    const currentScrollPos = window.pageYOffset;
    console.log(prevScrollPos)
    console.log(currentScrollPos)
    if (prevScrollPos > currentScrollPos) {
        console.log('i am here')
        navbar.style.top = "0";
    } else {
        console.log('iam here now')
        navbar.style.top = "-50px";
    }
    prevScrollPos = currentScrollPos;
}


window.addEventListener('scroll', hideNav);