// Open Login Modal
export function openLogin() {
  document.getElementById("login").style.display = "flex";
}

// Close Login Modal
export function closeLogin() {
  document.getElementById("login").style.display = "none";
}

// Close Modal when clicking outside
export function closeLoginOnOutsideClick() {
  window.addEventListener("click", function (event) {
    let modal = document.getElementById("login");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}
