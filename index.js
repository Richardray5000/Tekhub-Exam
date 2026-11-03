const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector(".nav-bar");

hamburger.addEventListener("click", () => {
  const open = menu.classList.toggle("show");
  hamburger.innerHTML = open ? "&times;" : "&#8801;";
});
dom;
