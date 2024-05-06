function addToCart(name, price) {
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  let found = false;
  cartItems.forEach(item => {
      if (item.name === name) {
          item.quantity++;
          found = true;
      }
  });

  if (!found) {
      cartItems.push({ name: name, price: price, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cartItems));

  // Show pop-up message

}

function addToCart(name, price) {
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  let found = false;
  cartItems.forEach(item => {
      if (item.name === name) {
          item.quantity++;
          found = true;
      }
  });

  if (!found) {
      cartItems.push({ name: name, price: price, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cartItems));

  // Show pop-up message
  showPopup(name); // Call function to show popup
}

function showPopup(productName) {
  // Create a div for the popup
  let popup = document.createElement('div');
  popup.classList.add('popup');
  popup.textContent = productName + ' added to cart'; // Set the content of the popup

  // Append the popup to the body
  document.body.appendChild(popup);

  // Remove the popup after 2 seconds
  setTimeout(function() {
    popup.remove();
  }, 2000);
}


//redirecting


function redirectToKurti1() {
  window.location.href = "product/kurti/kurti_1.html"; // Redirect to the Categories page
}
function redirectToKurti2() {
  window.location.href = "product/kurti/kurti_2.html"; // Redirect to the Categories page
}
function redirectToKurti3() {
  window.location.href = "product/kurti/kurti_3.html"; // Redirect to the Categories page
}
function redirectToKurti4() {
  window.location.href = "product/kurti/kurti_4.html"; // Redirect to the Categories page
}


