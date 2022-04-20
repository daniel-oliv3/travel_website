/* Menu toggle*/
let navbar = document.querySelector('.header .navbar');


document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.add('active');
}


document.querySelector('#nav-close').onclick = () => {
    navbar.classList.remove('active');
}

/* Search form */
let searchForm = document.querySelector('.search-form');


document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.add('active');
}


document.querySelector('#close-search').onclick = () => {
    searchForm.classList.remove('active');
}

windows.onscroll = () => {
    navbar.classList.remove('active');
};



/* Swiper */
var swiper = new Swiper(".home-slide", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
























