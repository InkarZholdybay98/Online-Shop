let basket123 = JSON.parse(localStorage.getItem("data")) || [];

let calculation1 = () => {
  let cartIcon = document.querySelector(".fa-shopping-bag");
  // console.log(cartIcon);
  cartIcon.innerHTML = basket123.map((x) => x.item).reduce((x, y) => x + y, 0);
};
calculation1();
