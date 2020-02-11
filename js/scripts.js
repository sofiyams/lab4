const menuToggle = document.getElementById('menu-toggle');
const menuNav = document.getElementById('menu-nav');

const toggleMenu = () => {
  console.log("hello there");
  menuNav.classList.toggle('menu-toggle');
}

menuToggle.addEventListener('click', toggleMenu);
