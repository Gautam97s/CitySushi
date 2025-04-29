// Initialize only once
let isInitialized = false;

export function updateTotal() {
  if (isInitialized) return;
  isInitialized = true;

  // Open Cart Panel
  document.getElementById("cart__link").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("cart").classList.add("show");
    document.getElementById("cart__overlay").classList.add("show");
  });

  // Close Cart Panel
  document.getElementById("cart__close").addEventListener("click", function () {
    document.getElementById("cart").classList.remove("show");
    document.getElementById("cart__overlay").classList.remove("show");
  });

  // Close when clicking outside
  document
    .getElementById("cart__overlay")
    .addEventListener("click", function () {
      document.getElementById("cart").classList.remove("show");
      document.getElementById("cart__overlay").classList.remove("show");
    });

  // Increase Quantity
  document.querySelectorAll(".increase__btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const input = this.previousElementSibling;
      let value = parseInt(input.value);
      input.value = value + 1;
      calculateTotal();
    });
  });

  // Decrease Quantity
  document.querySelectorAll(".decrease__btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const input = this.nextElementSibling;
      let value = parseInt(input.value);
      if (value > 1) {
        input.value = value - 1;
        calculateTotal();
      }
    });
  });

  // Calculate Total Price
  function calculateTotal() {
    let total = 0;
    document.querySelectorAll(".cart__item").forEach((item) => {
      const price = parseFloat(
        item.querySelector(".item__price").innerText.replace("$", "")
      );
      const quantity = parseInt(item.querySelector(".item__quantity").value);
      total += price * quantity;
    });
    document.getElementById("cart__total").innerText = `$${total.toFixed(2)}`;
  }

  console.log("Cart initialized!");
}
