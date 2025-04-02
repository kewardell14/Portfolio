import homegallery from "./portfolio.mjs";


function displayhomegallery(homegallery) { //This sets up the gallery
    return `<figure class="homegallery">
	<a href="${homegallery.ahref}">
        <img src="${homegallery.image}" alt="${homegallery.name}"/>
    </a>
</figure>`;
}

function rendergallery(homegallery) { //Displays the gallery
    // get the element we will output the recipes into
    let output = document.querySelector("#gallery");
    // use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    let html = homegallery.map(i => displayhomegallery(i)).join("");
    // Set the HTML strings as the innerHTML of our output element.
    output.innerHTML = html;
}


const menuButton = document.getElementById("menu-button");
const menuItems = document.getElementById("menu-items");
menuButton.addEventListener("click", () => { // For Dropdown
    menuItems.classList.toggle('hide');
});



const themeSelector = document.querySelector("select") // replace with code to select dropdown element out of the HTML (Hint: document.querySelector)
function changeTheme() {
    const selectedTheme = themeSelector.value;

    if (selectedTheme == "dark") {
        document.body.classList.add("dark");
        document.querySelector("img").src = "byui-logo_white.png"; //Maybe make a black and white image for the website
    }
    else {
        document.body.classList.remove("dark");
        document.querySelector("img").src = "byui-logo_blue.webp";
    }
}
themeSelector.addEventListener('change', changeTheme);


rendergallery(homegallery)