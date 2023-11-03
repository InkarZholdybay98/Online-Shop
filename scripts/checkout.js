/**
 * !get htmls
 */

const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
let shoppingCart = document.querySelector(".js-tbody");
let total = document.querySelector(".subtotalQuantity");

/**
 * !toggle
 */

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

/**
 * !variables
 */

let basket123 = JSON.parse(localStorage.getItem("data")) || [];

/**
 * !calculation
 */

let calculation1 = () => {
  let cartIcon = document.getElementById("cartQunatityForCart");
  cartIcon.innerHTML = basket123.map((x) => x.item).reduce((x, y) => x + y, 0);
};
calculation1();

/**
 * !display products
 */

let generateItems = () => {
  if (basket123.length !== 0) {
    return (shoppingCart.innerHTML = basket123
      .map((x) => {
        let { id, item } = x;
        let search = products1.find((y) => y.id === id) || [];
        return `
      <tr class='cart-item'>
        
        <td>
        <a  class='js-deleteLink'><i onclick="removeItem(${id})" class="fas fa-window-close" ></i></a>
        </td>
        <td><img src=${search.img} alt="" /></td>
        <td>${search.name}</td>
        <td>$${search.priceCents}</td>
        <td>
          <div class="buttons">
                <i   class="fa fa-minus" onclick='decrement(${search.id})' ></i>
                <div class="quantity" id=${search.id}>${item}</div>
                <i  class="fa fa-plus" onclick='increment(${search.id})'></i>
          </div>
        </td>
        <td>${item * search.priceCents}$</td>

      </tr>
       `;
      })
      .join(""));
  } else {
    shoppingCart.innerHTML = ``;
    total.innerHTML = 0 + "$";
  }
};

generateItems();

/**
 * !increment
 */

let increment = (productId) => {
  let selectedItem = productId;
  let search = basket123.find((x) => x.id === selectedItem);

  if (search === undefined) {
    basket123.push({
      id: selectedItem,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  update(selectedItem);
  generateItems();
  localStorage.setItem("data", JSON.stringify(basket123));
};

/**
 * !decrement
 */

let decrement = (productId) => {
  let selectedItem = productId;
  let search = basket123.find((x) => x.id === selectedItem);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem);
  basket123 = basket123.filter((x) => x.item !== 0);
  generateItems();
  localStorage.setItem("data", JSON.stringify(basket123));
};

/**
 * !update
 */

let update = (id) => {
  let search = basket123.find((x) => x.id === id);

  document.getElementById(id).innerHTML = search.item;

  calculation1();
  totalAmount();
};

/**
 *
 * !remove
 */

let removeItem = (id) => {
  let selectedItem = id;
  basket123 = basket123.filter((x) => x.id != selectedItem);
  generateItems();
  totalAmount();
  calculation1();
  localStorage.setItem("data", JSON.stringify(basket123));
};

/**
 *
 * !total amount
 */

let totalAmount = () => {
  if (basket123.length !== 0) {
    let amount = basket123
      .map((x) => {
        let { id, item } = x;
        let search = products1.find((y) => y.id === id) || [];

        return item * search.priceCents;
      })
      .reduce((x, y) => x + y, 0);

    total.innerHTML = amount + "$";
  } else return;
};

totalAmount();

/**
 * !clear all
 */

let clearCart = () => {
  basket123 = [];
  basket = [];
  generateItems();
  calculation1();
  localStorage.setItem("data", JSON.stringify(basket123));
};
