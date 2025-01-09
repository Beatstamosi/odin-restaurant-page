import heroImage from './img/stellar_spoon_hero.jpg';
import novaImage from './img/nova.jpg';
import lunaImage from './img/luna.jpg';
import vegaImage from './img/vega.jpg';


export default function loadAbout() {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";

    // about hero section
    const aboutHeroDiv = document.createElement("div");
    aboutHeroDiv.id = "about-hero";
    contentDiv.appendChild(aboutHeroDiv);

    // left hero
    const aboutHeroLeft = document.createElement("div");
    aboutHeroLeft.id = "about-hero-left";
    aboutHeroDiv.appendChild(aboutHeroLeft);

    const aboutHeroLeftHeader = document.createElement("h2");
    aboutHeroLeftHeader.innerHTML = "Our Mission is Simple:<br>To Feed Your Imagination";

    const aboutHeroLeftText = document.createElement("p");
    aboutHeroLeftText.textContent = "At The Stellar Spoon, we believe food should be an adventure. Our mission is to take you on a journey that combines innovative cuisine, artistic presentation, and a sprinkle of cosmic wonder. Every dish is designed not just to satiate your hunger, but to spark your curiosity and awaken your sense of discovery.";
    
    aboutHeroLeft.append(aboutHeroLeftHeader, aboutHeroLeftText);

    // right hero
    const aboutHeroRight = document.createElement("div");
    aboutHeroRight.id = "about-hero-right";
    aboutHeroDiv.appendChild(aboutHeroRight);

    const aboutHeroRightImg = document.createElement("img");
    aboutHeroRightImg.src = heroImage;
    aboutHeroRight.appendChild(aboutHeroRightImg);


    // story section
    const storyDiv = document.createElement("div");
    storyDiv.id = "story";
    contentDiv.appendChild(storyDiv);

    const storyHeader = document.createElement("h2");
    storyHeader.id = "story-header";
    storyHeader.textContent = "Our Story";

    const storyText = document.createElement("p");
    storyText.id = "story-text";
    storyText.textContent = "Born from a love of the unknown, The Stellar Spoon was founded by a group of chefs and space enthusiasts who wanted to create a dining experience unlike any other. Inspired by space exploration, we designed our restaurant as a place where guests could feel like astronauts aboard a high-tech spaceship, cruising through flavors and experiences from every corner of the universe.";

    storyDiv.append(storyHeader, storyText);

    // vision section
    const visionDiv = document.createElement("div");
    visionDiv.id = "vision";
    contentDiv.appendChild(visionDiv);

    const visionHeader = document.createElement("h2");
    visionHeader.id = "vision-header";
    visionHeader.textContent = "The Vision";

    const visionText = document.createElement("p");
    visionText.id = "vision-text";
    visionText.textContent = "We want to build a community of curious minds who are passionate about exploring new tastes and new ideas. The Stellar Spoon is more than just a restaurant; it’s a portal to new dimensions of flavor. With a commitment to sustainability, creativity, and cosmic inspiration, we hope to ignite your imagination and leave you craving more.";

    visionDiv.append(visionHeader, visionText);

    // team section
    const teamSection = document.createElement("div");
    teamSection.id = "team-section";
    contentDiv.appendChild(teamSection);

    const teamSectionHeader = document.createElement("h2");
    teamSectionHeader.textContent = "Meet the Team";
    teamSection.appendChild(teamSectionHeader);

    const teamContainer = document.createElement("div");
    teamContainer.id = "team";
    teamSection.appendChild(teamContainer);

    // create data storage for team mates
    const teamMembers = [
        {
            img: novaImage,
            name: "Captain Nova",
            role: "Executive Chef",
            bio: "With over 15 years of culinary experience, Captain Nova blends the artistry of food with the curiosity of space. Always experimenting with new techniques, they bring a sense of wonder to every plate"
        },
        {
            img: lunaImage,
            name: "Commander Luna",
            role: "Head Mixologist",
            bio: "Luna has a deep knowledge of the stars and the art of mixology. They create cocktails that are just as beautiful as the constellations"
        },
        {
            img: vegaImage,
            name: "Mission Specialist Vega",
            role: "Pastry Chef",
            bio: "Vega's desserts are out of this world! Their precision in creating flavors and textures makes every sweet treat feel like a cosmic discovery"
        }
    ]

    // loop through
    teamMembers.forEach(member => {
        let container = document.createElement("div");
        container.classList.add("team-member");
        teamContainer.appendChild(container);

        let portrait = document.createElement("img");
        portrait.src = member.img;

        let header = document.createElement("h2");
        header.textContent = member.name;

        let role = document.createElement("span");
        role.textContent = member.role;

        let bio = document.createElement("p");
        bio.textContent = member.bio;

        container.append(portrait, header, role, bio);
    });
}
