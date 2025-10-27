// ------------------------- Flaso Login -------------------------
function entrar() {
  const usuario = "admin";
  const senha = "admin";

  const user = document.getElementById("usuario").value;
  const pass = document.getElementById("senha").value;
  const message = document.getElementById("mensagem");

  if (user === usuario && pass === senha) {
    window.location.href = "receitas.html";
  } else {
    message.innerHTML = "Usuário ou senha inválidos! Consulte o README";
    message.style.color = "red";
    message.style.backgroundColor = "#FF000030";
    message.style.padding = "0.4rem 1rem";
    message.style.borderRadius = "1rem";
    message.style.textAlign = "center";
    message.style.maxWidth = "75%";

    setTimeout(function () {
      message.textContent = "";
      message.style.cssText = "";
    }, 23000);
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    entrar();
  }
});
