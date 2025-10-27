/* -------------------------- Modal -------------------------- */

const pratos = document.querySelectorAll(".botao");
const modal = document.getElementById("modal");
// const closeModal = document.querySelector(".close");
const modalPrato = document.getElementById("title");
const modalImagem = document.getElementById("image");
const modalContent = document.getElementById("content");
const modalValue = document.getElementById("value");
const modalLink = document.getElementById("link");

pratos.forEach((prato) => {
  prato.addEventListener("click", () => {
    let nome = prato.getAttribute("data-title");
    let imagem = prato.getAttribute("data-image");
    let conteudo = prato.getAttribute("data-description");
    let valor = prato.getAttribute("data-value");
    let link = prato.getAttribute("data-link");

    modalPrato.textContent = nome;
    modalImagem.src = imagem;
    modalContent.textContent = conteudo;
    modalValue.textContent = valor;

    if (link) {
      const botao = document.createElement("a");
      botao.textContent = "Saiba mais";
      botao.href = "/pratos-especiais/" + link + ".html";
      document.getElementById("link").appendChild(botao);
    }

    modal.style.display = "flex";
  });
});

function closeModal(){
  modal.style.display = "none";
  document.getElementById("link").innerHTML = "";
}

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

/* -------------------------- Quantidade -------------------------- */

document.getElementById('mais').addEventListener('click', function() {
    const input = document.getElementById('quantidade');
    input.value = parseInt(input.value) + 1;
});


document.getElementById('menos').addEventListener('click', function() {
    const input = document.getElementById('quantidade');
    input.value = parseInt(input.value) - 1;
});



/* -------------------------- Menu -------------------------- */

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

document.querySelectorAll("#menu a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 1024) {
      document.getElementById("menu").style.display = "none";
    }
  });
});

/* -------------------------- Busca -------------------------- */

function searchAnchor() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const anchors = document.querySelectorAll("[id], [data-anchor]");

  for (let anchor of anchors) {
    const text = (
      anchor.getAttribute("data-anchor") ||
      anchor.id ||
      ""
    ).toLowerCase();
    if (text.includes(input)) {
      anchor.scrollIntoView({ behavior: "smooth" });
      break;
    }
  }
  if (window.innerWidth <= 1024) {
    document.getElementById("menu").style.display = "none";
  }
}

/* -------------------------- Carrossel -------------------------- */

let slideAtual = 0;
const slides = document.querySelectorAll(".slide");
function mostrarSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function proximoSlide() {
  slideAtual = (slideAtual + 1) % slides.length;
  mostrarSlide(slideAtual);
}

setInterval(proximoSlide, 3000);
