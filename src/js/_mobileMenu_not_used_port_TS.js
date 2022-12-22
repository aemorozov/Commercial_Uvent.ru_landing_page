mobileMenu();

function mobileMenu() {
  const mobileMenu = document.querySelector(".mobile-menu");
  const burger = document.querySelector(".burger-button");
  const closeButton = document.querySelector(".close-button");

  if (mobileMenu && burger && closeButton && window.innerWidth < 745) {
    burger.addEventListener("click", () => {
      mobileMenu.style.left = "0";
    });
    closeButton.addEventListener("click", () => {
      mobileMenu.style.left = "-100%";
    });
  }
}
