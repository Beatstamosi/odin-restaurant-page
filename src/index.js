import "./styles.css";
import loadHome from "./home";
import loadMenu from "./menu";

const navButtonHome = document.querySelector("#home-button");
navButtonHome.addEventListener("click", loadHome);

const navButtonMenu = document.querySelector("#menu-button");
navButtonMenu.addEventListener("click", loadMenu);

// loadHome();

