// Open Register Modal
export function openRegister() {
  document.getElementById("register").style.display = "flex";
}

// Close Register Modal
export function closeRegister() {
  document.getElementById("register").style.display = "none";
}

// Close Modal when clicking outside
window.addEventListener("click", function (event) {
  let modal = document.getElementById("register");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
