const ham = document.querySelector('.fa-bars');
const navbar = document.getElementById('navbar');
const navlinks = document.querySelectorAll('#navbar a');
ham.addEventListener('click', () => {
    navbar.classList.toggle('active');
})
navlinks.forEach(navlink => {
    navlink.addEventListener('click', () => {
        navbar.classList.remove('active');
    })
});