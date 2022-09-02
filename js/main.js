const navBtn = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav');
const body = document.body;

navBtn.addEventListener('click', function (event) {
    event.stopPropagation();
    toggleMobileNav();
})

window.addEventListener('click', () => {
    if (body.classList.contains('no-scroll')) {
        toggleMobileNav();
    }
})

mobileNav.addEventListener('click', (event) => {
    event.stopPropagation();
})

function toggleMobileNav() {
    body.classList.toggle('no-scroll')
    navBtn.classList.toggle('nav-button-close');
    mobileNav.classList.toggle('mobile-nav-active');
}