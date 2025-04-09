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



document.getElementById('theme-select').addEventListener('change', function() {
  var selectedOption = this.options[this.selectedIndex];
  var iconSrc = selectedOption.getAttribute('data-icon');
  var selectedOptionText = selectedOption.textContent;

  var selectedOptionDiv = document.querySelector('.custom-select .selected-option');
  selectedOptionDiv.innerHTML = `<img src="${iconSrc}" alt="${selectedOptionText}"> ${selectedOptionText}`;
});

window.addEventListener('load', function() {
  var select = document.getElementById('theme-select');
  var initialSelectedOption = select.options[select.selectedIndex];
  var iconSrc = initialSelectedOption.getAttribute('data-icon');
  var selectedOptionText = initialSelectedOption.textContent;

  var selectedOptionDiv = document.createElement('div');
  selectedOptionDiv.classList.add('selected-option');
  selectedOptionDiv.innerHTML = `<img src="${iconSrc}" alt="${selectedOptionText}"> ${selectedOptionText}`;

  var customSelectDiv = document.querySelector('.custom-select');
  customSelectDiv.insertBefore(selectedOptionDiv, customSelectDiv.firstChild);
});