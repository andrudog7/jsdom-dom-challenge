const counter = document.getElementById('counter')
let currentNumber = {number: {digit: parseInt(counter.innerText), likes: 0}}

let intervalID = window.setInterval(increaseCounter, 1000);

const minus = document.getElementById('minus')
const plus = document.getElementById('plus')

const heart = document.getElementById('heart')
const pause = document.getElementById('pause')

function increaseCounter() {
    counter.innerText = currentNumber.number.digit += 1;
}

function decreaseCounter() {
    counter.innerText = currentNumber.number.digit -= 1
}
const div = document.querySelector('div');
const ul = document.createElement("ul");
div.prepend(ul);

function displayCountLikes(counter) {
    currentNumber.number.likes += 1;
    likeDisplayMessage()
}

function likeDisplayMessage() {
    let likeLine = document.getElementById(`${currentNumber.number.digit}`)
    if (likeLine === null) {
        let likedTimes = 1
        const li = document.createElement("li");
        li.setAttribute("id", `${currentNumber.number.digit}`);
        li.appendChild(document.createTextNode(`The number ${currentNumber.number.digit} has been liked ${likedTimes} time`))
        ul.appendChild(li);
        likedTimes += 1
    }
    else {
        likeLine.innerText = `The number ${currentNumber.number.digit} has been liked ${likedTimes} times`
        likedTimes += 1
    }
}

function pauseCounter() {
    if (pause.innerText === "pause") {
    intervalID = clearInterval(intervalID)
    pause.innerText = "Resume" }
    else {
        intervalID = window.setInterval(increaseCounter, 1000);
        pause.innerText = "pause"
    }
}

minus.addEventListener("click", decreaseCounter)
plus.addEventListener("click", increaseCounter)
heart.addEventListener("click", displayCountLikes)
pause.addEventListener("click", pauseCounter)