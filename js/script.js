"use strict";

var mainNav = document.querySelector(".main-nav");
var mainNavToggler = mainNav.querySelector(".main-nav-toggler");
mainNavToggler.addEventListener("click", function () {
  var isOpen = mainNav.dataset.open;
  mainNav.setAttribute("data-open", isOpen === "false" ? "true" : "false");
});