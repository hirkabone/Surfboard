const openingBtn = document.querySelector(".hamburger");
const menu = document.querySelector(".fullscreen-menu");
const closingBtn = document.querySelector(".fullscreen-menu__close");

openingBtn.addEventListener('click', function() {
    menu.classList.add("active");
    document.body.style.overflow = 'hidden';
});

closingBtn.addEventListener('click', function() {
    menu.classList.remove("active");
    document.body.style.overflow = 'visible';
});
