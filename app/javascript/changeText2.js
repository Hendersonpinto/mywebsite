let messages = ["Web developer", "UX/UI Designer", "Team player", "Fullstack developer"];
const text = document.querySelector('#banner__animated-text');

function changeText(element) {
    let newMessage = messages.shift();
    messages.push(newMessage);
    element.innerHTML = newMessage
}

function disappear(element) {
    element.style.opacity = 0;
    setTimeout(() => {
        changeText(element)
        element.style.opacity = 1;
    }, 2000)
}

disappear(text)
setInterval(() => {
    disappear(text)
}, 5000)