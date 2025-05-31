// for search product
const navigation = document.querySelector("nav"),
  searchBar = document.querySelector(".search-bar"),
  searchProduct = document.querySelector(".search-product");
searchBar.addEventListener("click", () => {
  searchProduct.classList.toggle("show");
});
searchProduct.addEventListener("click", (e) => {
  if (e.target.classList.contains("search-product")) {
    searchProduct.classList.remove("show");
  }
});

// for change color mode of the page
const body = document.querySelector("body"),
  nav = document.querySelector("nav"),
  modeToggle = document.querySelector(".dark-light");
const sun = document.querySelector(".sun"),
  moon = document.querySelector(".moon");

// for change color mode of the page
modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  modeToggle.classList.toggle("active");
  if (body.classList.contains("dark")) {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }
});
if (localStorage.getItem("mode") === "dark") {
  body.classList.add("dark");
  modeToggle.classList.add("active");
} else {
  body.classList.remove("dark");
  modeToggle.classList.remove("active");
}

// for show and hide menu on mobile
const menuBar = document.querySelector(".icon-toggler"),
  menuShow = document.querySelector(".menu-show"),
  menuClose = document.querySelector(".close-menu");

// for show menu on mobile
menuBar.addEventListener("click", () => {
  menuShow.classList.toggle("open");
});
menuClose.addEventListener("click", () => {
  menuShow.classList.remove("open");
});
//
