// toggle menu

document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.querySelector('.navbar .mobile-menu-toggle');
  const mobileMenu = document.querySelector('.navbar .mobile-menu-items');

  toggleButton.addEventListener('click', function () {
   mobileMenu.classList.toggle('active')
  });
});

// change navbar on scroll

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  
   if(window.scrollY > 0) {
      navbar.classList.add('scroll')
   } else {
    navbar.classList.remove('scroll')
   }
});