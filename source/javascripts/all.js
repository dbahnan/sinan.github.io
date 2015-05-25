//= require_tree .


//Slidy Top Nav
var menu = document.querySelector(".main-nav"),
    toggle = document.querySelector(".nav-toggle"),
    body = document.getElementsByTagName('body')[0];

function toggleToggle() {
  toggle.classList.toggle("menu-open");
};

function toggleMenu() {
  menu.classList.toggle("active");
  body.classList.toggle("is-active-menu");
};

toggle.addEventListener("click", toggleToggle, false);
toggle.addEventListener("click", toggleMenu, false);

document.onkeydown = check_key;

function check_key(e) {
    e = e || window.event;
    if(e.keyCode == '27') {      
      toggleToggle();
      toggleMenu();
    }
}
