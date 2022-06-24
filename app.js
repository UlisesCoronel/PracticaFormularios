const form = document.getElementById("form");

const username = document.getElementById("username");
const emailUser = document.getElementById("emailUser");

const invalidName = document.getElementById("invalidName");
const invalidEmail = document.getElementById("invalidEmail");
const successful = document.getElementById("successful");

// configuracion de las expresiones regulares
const regUsername = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/; //solo letras con tildes
const regEmail =
  /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/; //formato email

form.addEventListener("submit", (e) => {
  // previene el comportamiento por defecto. Metodo GET
  e.preventDefault();

  const errores = [];

  // validacion de nombre
  if (!regUsername.test(username.value) || !username.value.trim()) {
    invalidName.style.display = "block";
    username.style.borderBottomColor = "var(--secondary)";
    username.style.color = "var(--secondary)";
    errores.push("eror en el nombre");
  } else {
    invalidName.style.display = "none";
    username.style.borderBottomColor = "var(--white)";
    username.style.color = "var(--white)";
  }

  //validacion de correo
  if (!regEmail.test(emailUser.value)) {
    invalidEmail.style.display = "block";
    emailUser.style.borderBottomColor = "var(--secondary)";
    emailUser.style.color = "var(--secondary)";
    errores.push("eror en el correo");
  } else {
    invalidEmail.style.display = "none";
    emailUser.style.borderBottomColor = "var(--white)";
    emailUser.style.color = "var(--white)";
  }

  if (errores.length !== 0) {
    successful.style.display = "none";
    return;
  }

  successful.style.display = "block";
  emailUser.value = "";
  username.value = "";
  emailUser.style.borderBottomColor = "var(--grey)";
  username.style.borderBottomColor = "var(--grey)";
});
