// Form
const form = document.querySelector("form");

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

if (form) {
  form.addEventListener("invalid", cancelPopup, true);
}
