const ham = document.querySelector('.fa-bars');
const navbar = document.getElementById('navbar');
const navlinks = document.querySelectorAll('#navbar a');
const sections = document.querySelectorAll('section');

sections.forEach(section => {
    section.addEventListener('click', () => {
        if (navbar.classList.contains('active')) {
            navbar.classList.remove('active');
        }
    })
})

ham.addEventListener('click', () => {
    navbar.classList.toggle('active');
})
navlinks.forEach(navlink => {
    navlink.addEventListener('click', () => {
        navbar.classList.remove('active');
    })
});