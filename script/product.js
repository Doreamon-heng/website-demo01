const tabsButton = document.querySelectorAll(".tabs_buttons button");
const product = document.querySelectorAll(".products .card");

const handleProductClick = (e) => {
  const target = e.target.dataset.target;
  product.forEach((item) => {
    item.classList.remove("active");
    if (item.classList.contains(target)) {
      item.classList.add("active");
    }
  });
  tabsButton.forEach((button) => {
    button.classList.remove("active");
    if (button === e.target) {
      button.classList.add("active");
    }
  });
  product.forEach((card) => {
    card.classList.add("hide");

    if (
      card.dataset.name === e.target.dataset.name ||
      e.target.dataset.name === "all"
    ) {
      card.classList.remove("hide");
    }
  });
};

tabsButton.forEach((button) =>
  button.addEventListener("click", handleProductClick)
);
