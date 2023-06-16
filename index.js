const ham = document.querySelector('.fa-bars');
const navbar = document.getElementById('navbar');
ham.addEventListener('click', () => {
    navbar.classList.toggle('active');
})
