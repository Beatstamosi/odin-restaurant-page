import loadMenu from "./menu";

export default function loadHome () {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";

    const homeBanner = document.createElement("div");
    homeBanner.id = "home-banner";
    contentDiv.appendChild(homeBanner);

    const welcomeText = document.createElement("p");
    welcomeText.id = "welcome";
    welcomeText.textContent = "Welcome to the";
    homeBanner.appendChild(welcomeText);

    const homeName = document.createElement("h1");
    homeName.textContent = "STELLAR SPOON";
    homeBanner.appendChild(homeName);

    const subHeader = document.createElement("p");
    subHeader.id = "subheader-home";
    subHeader.textContent = "Embark on a Flavor Journey Beyond the Stars";
    homeBanner.appendChild(subHeader);

    const exploreMenuButton = document.createElement("button");
    exploreMenuButton.id = "explore-menu";
    exploreMenuButton.textContent = ">>> Explore the Menu <<<";
    homeBanner.appendChild(exploreMenuButton);

    exploreMenuButton.addEventListener("click", loadMenu);
}
