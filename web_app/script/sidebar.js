const sidebar = document.querySelector(".sidebar");
const sidebarToggler = document.querySelector(".sidebar-toggler");
const menuToggler = document.querySelector(".menu-toggler");

const collapsedSidebarHeight = "56px";
const fullSidebarHeight = "calc(100vh - 32px)";

// Toggle sidebar's collapsed state
sidebarToggler.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
});

// Update sidebar height and menu toggle text
const toggleMenu = (isMenuActivate) => {
    sidebar.style.height = isMenuActivate ? `${sidebar.scrollHeight}px` : collapsedSidebarHeight ;
    menuToggler.querySelector("span").innerText = isMenuActivate ? "close" : "menu "
}

// Toggle menu-active class and adjust height
menuToggler.addEventListener("click", () => {
    toggleMenu(sidebar.classList.toggle("menu-activate"));
});

// Adjust sidebar height on windows resize
window.addEventListener("resize", () => {
    if (window.innerWidth >= 960) {
        sidebar.style.height = fullSidebarHeight;
    } else {
        sidebar.classList.remove("collapsed");
        sidebar.style.height = "auto";
        toggleMenu(sidebar.classList.contains("menu-activate"));
    }
});