const yesBtn = document.getElementById("yesBtn");

const noBtn = document.getElementById("noBtn");

const noWrapper = document.querySelector(".no-wrapper");

const message = document.getElementById("message");


// =========================
// КНОПКА YES
// =========================

yesBtn.addEventListener("click", function () {

    message.classList.add("show");

});


// =========================
// ЗАКРЫТЬ СООБЩЕНИЕ
// =========================

message.addEventListener("click", function () {

    message.classList.remove("show");

});


// =========================
// КНОПКА NO УБЕГАЕТ
// =========================

function moveNoButton() {

    const maxX =
        noWrapper.clientWidth -
        noBtn.offsetWidth;

    const maxY =
        noWrapper.clientHeight -
        noBtn.offsetHeight;


    const x =
        Math.random() *
        Math.max(maxX, 0);


    const y =
        Math.random() *
        Math.max(maxY, 0);


    noBtn.style.left =
        x + "px";

    noBtn.style.top =
        y + "px";
}


// Когда наводишь мышку

noBtn.addEventListener(
    "mouseenter",
    moveNoButton
);


// Когда нажимаешь

noBtn.addEventListener(
    "click",
    moveNoButton
);
