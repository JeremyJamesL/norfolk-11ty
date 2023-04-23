const mobMenuToggle = document.querySelector('.mobileMenuToggle');
const mobileMenu = document.querySelector('.mobileMenu');
const exitNav = document.querySelector('.exit');


// Event listeners
mobMenuToggle.addEventListener('click', () => {
    if(mobileMenu.classList.contains('mobileMenuClose')) {
        mobileMenu.classList.remove('mobileMenuClose');
        mobileMenu.classList.add('mobileMenuOpen');
        return
    } 
    mobileMenu.classList.add('mobileMenuOpen');
})

exitNav.addEventListener('click', () => {
    mobileMenu.classList.remove('mobileMenuOpen');
    mobileMenu.classList.add('mobileMenuClose');
})
