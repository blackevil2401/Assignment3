"use strict";

const checkmail = document.querySelector(".checkmail");

const info = document.querySelector(".info");

const button = document.querySelector(".btn");

const err = document.querySelector("#emailHelpId");

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

// check email

button.addEventListener("click", function () {
  let inputemail = document.querySelector("#email").value;

  if (validateEmail(inputemail)) {
    info.classList.remove("hidden");
    checkmail.classList.add("hidden");
  } else {
    err.style.color = "#ff0000";
    err.textContent = "Sai định dạng Email";
  }
});

// viewmore - viewless
const viewmore = document.querySelectorAll("#btnviewmore");

for (let i = 0; i < viewmore.length; i++) {
  viewmore[i].addEventListener("click", function () {
    if (viewmore[i].nextElementSibling.classList.contains("hidden")) {
      viewmore[i].nextElementSibling.classList.remove("hidden");
      viewmore[i].textContent = "▲ View Less";
    } else {
      viewmore[i].nextElementSibling.classList.add("hidden");
      viewmore[i].textContent = "▼ View More";
    }
  });
}
