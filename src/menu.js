export default function loadMenu() {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";

    const introDiv = document.createElement("div");
    introDiv.id = "intro-menu"
    contentDiv.appendChild(introDiv);

    const introDivh2 = document.createElement("h2");
    introDivh2.textContent = "A Galactic Feast Awaits You";
    introDiv.appendChild(introDivh2);

    const introDivText = document.createElement("p");
    introDivText.textContent = "Explore our menu - an interstellar blend of bold flavors, imaginative ingredients, and cosmic presentations. Whether you're dining under the stars or indulging in a Martian-inspired dessert, every dish is a journey."
    introDiv.appendChild(introDivText);

    // menu, menu-left, menu-right
    const menuDiv = document.createElement("div");
    menuDiv.id = "menu";
    contentDiv.appendChild(menuDiv);

    const menuLeft = document.createElement("div");
    menuLeft.id = "menu-left";
    menuDiv.appendChild(menuLeft);

    const menuRight = document.createElement("div");
    menuRight.id = "menu-right";
    menuDiv.appendChild(menuRight);

    // menu-left buttons
    const appetizerBtn = document.createElement("button");
    appetizerBtn.id = "appetizers";
    appetizerBtn.textContent = "Appetizers";

    const mainCoursesBtn = document.createElement("button");
    mainCoursesBtn.id = "mainCourses";
    mainCoursesBtn.textContent = "Main Courses";

    const dessertsBtn = document.createElement("button");
    dessertsBtn.id = "desserts";
    dessertsBtn.textContent = "Desserts";

    const drinksBtn = document.createElement("button");
    drinksBtn.id = "drinks";
    drinksBtn.textContent = "Drinks";

    menuLeft.append(appetizerBtn, mainCoursesBtn, dessertsBtn, drinksBtn);

    // data for food items
    const foodItems = {
        appetizers: [
            {
                name: "Astro Bites",
                description: "Crispy, bite-sized space snacks with a cosmic spice blend."
            },
            {
                name: "Nebula Nachos",
                description: "Crispy tortilla chips topped with our signature meteorite cheese blend."
            },
            {
                name: "Meteorite Puffs",
                description: "Light, airy, and exploding with savory galactic goodness."
            }
        ],
        mainCourses: [
            {
                name: "Solar Flare Steak",
                description: "A perfectly charred cut of premium beef, flamed with a whiskey-infused sauce."
            },
            {
                name: "Black Hole Burger",
                description: 'A plant-based, juicy patty with a "dark matter" infused aioli and cosmic lettuce.'
            },
            {
                name: "Galaxy Tacos",
                description: "Corn tortillas filled with your choice of asteroid beef, comet shrimp, or moon mushroom medley."
            }
        ],
        desserts: [
            {
                name: "Milky Way Cheesecake",
                description: "A creamy, multi-layered delight with a dusting of stardust (edible glitter)."
            },
            {
                name: "Meteor Sundae",
                description: "Vanilla ice cream served with fiery hot fudge and a sprinkle of cosmic cookie crumbs."
            },
            {
                name: "Starship Sorbet",
                description: "A refreshing sorbet made from galactic fruits (pomegranate, lychee, and passionfruit)."
            }
        ],
        drinks: [
            {
                name: "Lunar Lemonade",
                description: 'Tart, tangy, and served with a shot of "moonlight" vodka.'
            },
            {
                name: "Redshift Sangria",
                description: "A deep, bold red wine sangria infused with starfruit and comets of citrus."
            },
            {
                name: "Zero Gravity Cocktails",
                description: "Light and refreshing cocktails that defy gravity with their foam-topped creations."
            }
        ]
    }

    // eventlisteners to buttons
    const buttons = [appetizerBtn, mainCoursesBtn, dessertsBtn, drinksBtn];
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            // clear html in menu-right
            menuRight.innerHTML = "";

            // create div "food-items"
            const menuItemsDiv = document.createElement("div");
            menuItemsDiv.id = "menu-items";
            menuRight.append(menuItemsDiv);


            // loop through foodItems[button.id]
            foodItems[button.id].forEach(element => {
                let container = document.createElement("div");
                menuItemsDiv.appendChild(container);

                let header = document.createElement("h2");
                header.textContent = element.name;

                let description = document.createElement("p");
                description.textContent = element.description;

                container.append(header, description);
            });
        })
    })

    // click appetizer Button on page load
    appetizerBtn.click();
    appetizerBtn.focus();
}