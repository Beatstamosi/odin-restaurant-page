import "./styles.css";
import loadHome from "./home";
import loadMenu from "./menu";
import loadAbout from "./about";

const navButtonHome = document.querySelector("#home-button");
navButtonHome.addEventListener("click", loadHome);

const navButtonMenu = document.querySelector("#menu-button");
navButtonMenu.addEventListener("click", loadMenu);

const navButtonAbout = document.querySelector("#about-button");
navButtonAbout.addEventListener("click", loadAbout);

loadHome();

