const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput();
});

function checkInput() {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();
  const password2Val = password2.value.trim();

  if (usernameVal === "") {
    setError(username, "Username cannot be blank");
  } else {
    setSuccess(username);
  }

  if (emailVal === "") {
    setError(email, "Email cannot be blank");
  } else if (!isEmail(emailVal)) {
    setError(email, "Not a valid Email");
  } else {
    setSuccess(email);
  }

  if (passwordVal === "") {
    setError(password, "Password cannot be blank");
  } else {
    setSuccess(password);
  }

  if (password2Val === "") {
    setError(password2, "Password cannot be blank");
  } else if (passwordVal !== password2Val) {
    setError(password2, "Password does not match");
  } else {
    setSuccess(password2);
  }
}
function setError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccess(input) {
  const formControl = input.parentElement;

  formControl.className = "form-control success";
}

const isEmail = (email) => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};
