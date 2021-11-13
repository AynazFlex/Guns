"use strict"

menu.onclick = () => {
  document.body.querySelector('.menu-bar').style.display = "";
  document.body.querySelector('.main').style.display = "none";
}

closeMenu.onclick = () => {
  document.body.querySelector('.menu-bar').style.display = "none";
  document.body.querySelector('.main').style.display = "";
}