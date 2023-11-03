// cart.forEach((cartItem) => {
//   const productId = cartItem.productId;
//   let matchingProduct;

//   products.forEach((product) => {
//     if (productId === product.id) {
//       matchingProduct = product;
//     }
//   });

//   console.log(matchingProduct);

//   cartSummaryHTML += `<tr>
//   <td>
//     <a href="#"><i class="fas fa-window-close"></i></a>
//   </td>
//   <td><img src=${matchingProduct.img} alt="" /></td>
//   <td>${matchingProduct.name}</td>
//   <td>$${priceCents / 100}</td>
//   <td>${cartItem.quantity}</td>
//   <td>118.19$</td>
//   </tr>

//   `;
// });

// console.log(cartSummaryHTML);

// document.querySelector(".js-tbody").innerHTML = cartSummaryHTML;
