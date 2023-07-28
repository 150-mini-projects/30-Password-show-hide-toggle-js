var passField = document.querySelector("input");
var btn = document.querySelector("span i");

btn.onclick = function () {
  if (passField.type === "password") {
    passField.type = "text";
    btn.classList.add("hide-btn");
  } else {
    passField.type = "password";
    btn.classList.remove("hide-btn");
  }
};
