let navbar = document.querySelector('.header .navbar');


document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.add('active');
}


document.querySelector('#nav-close').onclick = () => {
    navbar.classList.remove('active');
}

windows.onscroll = () => {
    navbar.classList.remove('active');
}