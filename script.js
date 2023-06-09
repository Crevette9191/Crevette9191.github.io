const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 360) {
        nav.style.top = 0;
    } else {
        nav.style.top = "-50px";
    }
});

const balise = document.querySelector(".click-event");
const answer = document.getElementById("response");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");

btn1.addEventListener("click", () => {
    answer.style.visibility = "visible";
    balise.style.background = "green";
});

btn2.addEventListener("click", () => {
    answer.style.visibility = "visible";
    balise.style.background = "red";
});

btn3.addEventListener("click", () => {
    answer.style.visibility = "visible";
    balise.style.background = "red";
});

btn4.addEventListener("click", () => {
    answer.style.visibility = "visible";
    balise.style.background = "red";
});

const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
    mousemove.style.visibility = "visible";
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
    mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
    mousemove.style.border = "2px solid teal";
});

// balise.addEventListener("mouseenter", () => {
//     balise.style.background = "rgba(0,0,0,0.6)";
// });

// balise.addEventListener("mouseout", () => {
//     balise.style.background = "pink";
// });

// answer.addEventListener("mouseover", () => {
//     answer.style.transform = "rotate(2deg)";
// });

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = (key) => {
    const audio = new Audio();
    audio.src = key + ".mp3";
    audio.play();
};

document.addEventListener("keypress", (e) => {
    key.textContent = e.key;

    if (e.key === "b") {
        keypressContainer.style.background = "blue";
    } else if (e.key === "m") {
        keypressContainer.style.background = "brown";
    } else {
        keypressContainer.style.background = "black";
    }
    if (e.key === "z") ring(e.key);
});
