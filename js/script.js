"use strict";

let btnOpenMenu = document.querySelector(".btn-menu");
let linksNavigation = document.querySelectorAll(".navigation__link");

//handler to dropdown
linksNavigation.forEach((link) => {
    if(link.dataset.toggle){
        link.addEventListener("pointerdown", handlerLinksNavigation);
    }
});

function handlerBtnMenu(event) {
    showMenuMobile();
}

if(btnOpenMenu) {
  //add handler open menu mobile
  btnOpenMenu.addEventListener("pointerdown", handlerBtnMenu);
}

function showMenuMobile() {
    let menu = document.querySelector(".menu");
    let body = document.body;
    let btnCloseMenuInner = `<button type="button" class="btn btn-close-menu">
        <img src="./images/icon-close-menu.svg" alt="icon ilustration close menu" />
    </button>`;
    menu.insertAdjacentHTML("afterbegin", btnCloseMenuInner);
    //handler close menu mobile
    let btnCloseMenuElem = document.querySelector(".btn-close-menu");
    btnCloseMenuElem.addEventListener("pointerdown", closeMenuMobile);
    menu.classList.remove("menu_hidden");
    menu.classList.add("menu_show");
    body.classList.add("overlay");
}

function closeMenuMobile() {
    let menu = document.querySelector(".menu");
    document.querySelector(".btn-close-menu").remove();
    menu.classList.remove("menu_show");
    menu.classList.add("menu_hidden");
    document.body.classList.remove("overlay");
}

function handlerLinksNavigation(event) {
    toggleStateDropdownMenu(event.target.dataset.toggle, event.target);
}

function toggleStateDropdownMenu(nameDropdown, link) {
    let dropdown = document.querySelector(`.${nameDropdown}`);
    if(dropdown.dataset.state === "hidden" && link.dataset.open === "false") {
        dropdown.classList.remove("dropdown-close");
        dropdown.classList.add("dropdown-open");
        dropdown.dataset.state = "visibility";
        link.dataset.open = "true";
        toggleImgClickLink(link);
    }
    else if(dropdown.dataset.state === "visibility" && link.dataset.open === "true") {
        dropdown.classList.remove("dropdown-open");
        dropdown.classList.add("dropdown-close");
        dropdown.dataset.state = "hidden";
        link.dataset.open = "false";
        toggleImgClickLink(link);
    }
}

function toggleImgClickLink(element) {
    let img = element.firstElementChild;
    if(element.dataset.open === "false") { //arrow down
        img.src = "./images/icon-arrow-down.svg";
    }else if(element.dataset.open === "true") { //arrow up
        img.src = "./images/icon-arrow-up.svg";
    }
}