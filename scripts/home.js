/**
 * !vars
 */

const bar1 = document.getElementById("bar");
const nav1 = document.getElementById("navbar");
const close1 = document.getElementById("close");
let shop = document.querySelector(".pro-container");
let proContainer = document.querySelector(".pro-container");
let basket = JSON.parse(localStorage.getItem("data")) || [];

if (bar1) {
  bar1.addEventListener("click", () => {
    nav1.classList.add("active");
  });
}

if (close1) {
  close1.addEventListener("click", () => {
    nav1.classList.remove("active");
  });
}

let productsHTML = "";

/**
 * ! display products
 */

homeDataProducts.forEach((product) => {
  let search = basket.find((x) => x.id === product.id) || [];
  productsHTML += `
  <div class="pro" id=${product.id}-5>
          <img src=${product.img} alt="" />
          <div class="des">
            <span>${product.brand}</span>
            <h5>${product.name}</h5>
            <div class="star">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <div class='priceBtns'>
            <h4>$${product.priceCents}</h4>
            <div class="buttons">
              <i   class="fa fa-minus" onclick='decrement(${product.id})' ></i>
              <div class="quantity" id=${product.id}>${
    search.item === undefined ? 0 : search.item
  }</div>
              <i  class="fa fa-plus" onclick='increment(${product.id})'></i>
            </div></div>
            
          </div>
          
        </div>
        
  `;
});
document.querySelector(".pro-container").innerHTML = productsHTML;

/**
 * !update
 */

function updateCart() {
  let cartQunatity = 0;

  cart.forEach((item) => {
    cartQunatity += item.quantity;
  });

  document.getElementById("cartQunatity").innerHTML = cartQunatity;
}

/**
 * !increment
 */

let increment = (productId) => {
  let selectedItem = productId;
  let search = basket.find((x) => x.id === selectedItem);

  if (search === undefined) {
    basket.push({
      id: selectedItem,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  update(selectedItem);

  localStorage.setItem("data", JSON.stringify(basket));
};

/**
 * !decrement
 */

let decrement = (productId) => {
  let selectedItem = productId;
  let search = basket.find((x) => x.id === selectedItem);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem);
  basket = basket.filter((x) => x.item !== 0);

  localStorage.setItem("data", JSON.stringify(basket));
};

/**
 * !update again calculation
 */

let update = (id) => {
  let search = basket.find((x) => x.id === id);

  document.getElementById(id).innerHTML = search.item;

  calculation1();
};

/**
 * !calculation
 */

let calculation1 = () => {
  let cartIcon = document.querySelector(".fa-shopping-bag");
  // console.log(cartIcon);
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
calculation1();
