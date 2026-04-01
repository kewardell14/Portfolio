const btn = document.getElementById("menu-btn");
const menu = document.getElementById("side-menu");
const overlay = document.getElementById("menu-overlay");

btn.addEventListener("click", () => {
    menu.classList.toggle("open");
    overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
    menu.classList.remove("open");
    overlay.classList.remove("active");
});


document.querySelectorAll(".category-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const parent = btn.parentElement;
        parent.classList.toggle("open");
    });
});