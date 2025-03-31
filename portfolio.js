import homegallery from "./portfolio.mjs";



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