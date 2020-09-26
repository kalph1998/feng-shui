const toggle = document.querySelector(".toggle-button");
const nav = document.querySelector(".hero-nav-navi");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
