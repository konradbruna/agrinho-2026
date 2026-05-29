/* =========================================
   ACCORDION
========================================= */

const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {

  header.addEventListener("click", () => {

    const content = header.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight =
        content.scrollHeight + "px";
    }

  });

});

/* =========================================
   ACESSIBILIDADE - FONTE
========================================= */

let currentFontSize = 100;

const increaseBtn =
  document.getElementById("increase-font");

const decreaseBtn =
  document.getElementById("decrease-font");

increaseBtn.addEventListener("click", () => {

  currentFontSize += 10;

  document.body.style.fontSize =
    currentFontSize + "%";

});

decreaseBtn.addEventListener("click", () => {

  currentFontSize -= 10;

  document.body.style.fontSize =
    currentFontSize + "%";

});

/* =========================================
   DARK MODE
========================================= */

const themeButton =
  document.getElementById("toggle-theme");

themeButton.addEventListener("click", () => {

  document.body.classList.toggle("light-mode");

});

/* =========================================
   LEITURA POR VOZ
========================================= */

const readButton =
  document.getElementById("read-page");

const stopButton =
  document.getElementById("stop-reading");

let speech;

/* Ler conteúdo principal */

readButton.addEventListener("click", () => {

  window.speechSynthesis.cancel();

  const mainContent =
    document.getElementById("main-content");

  const textToRead =
    mainContent.innerText;

  speech =
    new SpeechSynthesisUtterance(textToRead);

  speech.lang = "pt-BR";

  speech.rate = 1;

  window.speechSynthesis.speak(speech);

});

/* Parar leitura */

stopButton.addEventListener("click", () => {

  window.speechSynthesis.cancel();

});

/* =========================================
   FORMULÁRIO
========================================= */

const form =
  document.querySelector("form");

form.addEventListener("submit", (event) => {

  event.preventDefault();

  alert(
    "Inscrição enviada com sucesso!"
  );

  form.reset();

});

/* =========================================
   COMENTÁRIOS
========================================= */

const commentButton =
  document.querySelector(".comment-box button");

commentButton.addEventListener("click", () => {

  const textarea =
    document.querySelector(".comment-box textarea");

  if (textarea.value.trim() === "") {

    alert("Digite um comentário.");

    return;
  }

  alert("Comentário enviado!");

  textarea.value = "";

});