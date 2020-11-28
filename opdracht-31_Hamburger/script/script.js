const navbar = document.querySelector(".navbar");
const ham = document.querySelector(".ham");

ham.addEventListener("mouseover", toggleHamburger);

// toggles hamburger menu in and out when clicking on the hamburger
function toggleHamburger() {
    navbar.classList.toggle("showNav")
    ham.classList.toggle("showClose")
};
//.toggle() as the name implies, add a class if it is not in the class list of an element and remove it if it already is.

//color clicking
const bodyBackground = document.querySelector(".background-color");

const redBackground = document.querySelector(".listitem-rood");
const blueBackground = document.querySelector(".listitem-blauw");
const yellowBackground = document.querySelector(".listitem-geel");
const purpleBackground = document.querySelector(".listitem-paars");
const reset = document.querySelector(".reset");

redBackground.addEventListener("click", backgroundcolorRed);
blueBackground.addEventListener("click", backgroundcolorBlue);
yellowBackground.addEventListener("click", backgroundcolorYellow);
purpleBackground.addEventListener("click", backgroundcolorPurple);
reset.addEventListener("click", backgroundcolorReset)

function backgroundcolorRed() {
    bodyBackground.classList.add("listitem-rood")
    bodyBackground.classList.remove("listitem-blauw")
    bodyBackground.classList.remove("listitem-geel")
    bodyBackground.classList.remove("listitem-paars")
    navbar.classList.remove("showNav")
    ham.classList.remove("showClose")
};

function backgroundcolorBlue() {
    bodyBackground.classList.add("listitem-blauw")
    bodyBackground.classList.remove("listitem-rood")
    bodyBackground.classList.remove("listitem-geel")
    navbar.classList.remove("showNav")
    ham.classList.remove("showClose")

};

function backgroundcolorYellow() {
    bodyBackground.classList.add("listitem-geel")
    bodyBackground.classList.remove("listitem-rood")
    bodyBackground.classList.remove("listitem-blauw")
    bodyBackground.classList.remove("listitem-paars")
    navbar.classList.remove("showNav")
    ham.classList.remove("showClose")

};

function backgroundcolorPurple() {
    bodyBackground.classList.add("listitem-paars")
    bodyBackground.classList.remove("listitem-geel")
    bodyBackground.classList.remove("listitem-rood")
    bodyBackground.classList.remove("listitem-blauw")
    navbar.classList.remove("showNav")
    ham.classList.remove("showClose")

};

function backgroundcolorReset() {
    bodyBackground.classList.add("reset")
    bodyBackground.classList.remove("listitem-paars")
    bodyBackground.classList.remove("listitem-geel")
    bodyBackground.classList.remove("listitem-rood")
    bodyBackground.classList.remove("listitem-blauw")
    navbar.classList.remove("showNav")
    ham.classList.remove("showClose")
};

