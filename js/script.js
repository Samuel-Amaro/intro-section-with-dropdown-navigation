"use strict";

let btnOpenMenu = document.querySelector(".btn-menu");

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

//TODO: adicionar eventos de click para mostrar e ocultar dropfowm menu baseado no <a> elemento clicado so adicionar evento para aquele, que possui o atributo data-toggle com a classe do dropdown relacionado
