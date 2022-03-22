// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;
  product.querySelector('.subtotal span').textContent=quantity*price;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelectorAll('.product');
  console.log(singleProduct);
  // end of test
  let total=0;
  // ITERATION 2
  singleProduct.forEach(product => {
    updateSubtotal(product);
    total=total+(+product.querySelector('.subtotal span').textContent);
  });
  //... your code goes here

  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').textContent=total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  let newTarget=target.parentElement.parentElement;
  newTarget.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  let newNameProduct = document.querySelector('.create-product td:nth-child(1) input').value;
  let newPriceProduct = document.querySelector('.create-product td:nth-child(2) input').value;
  
  let newProduct=`<tr class="product">
  <td class="name"><span>${newNameProduct}</span>
  </td><td class="price">$<span>${newPriceProduct}</span></td>
  <td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" />
  </td><td class="subtotal">$<span>0</span></td>
  <td class="action"> <button class="btn btn-remove">Remove</button></td></tr>`;

  let elementTr = document.createElement("tr");
  elementTr.classList.add("product");
  elementTr.innerHTML = newProduct;

  document.querySelector("tbody").appendChild(elementTr);
  elementTr.querySelector('.btn-remove').addEventListener("click",removeProduct);
  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  let btnsRemove=document.querySelectorAll('.btn-remove');
  btnsRemove.forEach(btnRemove => {
    btnRemove.addEventListener("click",removeProduct);
  });

  document.querySelector('#create').addEventListener('click', createProduct);
});
