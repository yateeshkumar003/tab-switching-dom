let aboutButton = document.getElementById("aboutButton");
let timeToVisitButton = document.getElementById("timeToVisitButton");
let attractionsButton = document.getElementById("attractionsButton");

let aboutTab = document.getElementById("aboutTab");
let timeToVisitTab = document.getElementById("timeToVisitTab");
let attractionsTab = document.getElementById("attractionsTab");


function aboutButtonOn() {
    aboutTab.classList.remove("d-none");
    aboutTab.classList.add("d-block");

    timeToVisitTab.classList.add("d-none");
    timeToVisitTab.classList.remove("d-block");

    attractionsTab.classList.add("d-none");
    attractionsTab.classList.remove("d-block");
}

function timeToVisitButtonOn() {
    aboutTab.classList.add("d-none");
    aboutTab.classList.remove("d-block");

    timeToVisitTab.classList.remove("d-none");
    timeToVisitTab.classList.add("d-block");

    attractionsTab.classList.add("d-none");
    attractionsTab.classList.remove("d-block");

}

function attractionsButtonOn() {
    aboutTab.classList.add("d-none");
    aboutTab.classList.remove("d-block");

    timeToVisitTab.classList.add("d-none");
    timeToVisitTab.classList.remove("d-block");

    attractionsTab.classList.remove("d-none");
    attractionsTab.classList.add("d-block");

}