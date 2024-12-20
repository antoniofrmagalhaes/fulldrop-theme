document.addEventListener("DOMContentLoaded", function () {
  var wrapper = document.querySelector(".announcement-bar__wrapper");
  var content = document.querySelector(".announcement-bar__content");

  if (!wrapper || !content) return;

  // Ler a duração da rolagem do atributo data-scroll-duration
  var scrollDuration = parseFloat(wrapper.getAttribute("data-scroll-duration"));
  if (isNaN(scrollDuration) || scrollDuration <= 0) {
    scrollDuration = 45; // Valor de fallback caso a config não seja definida ou inválida
  }

  var wrapperWidth = wrapper.offsetWidth;
  var contentWidth = content.scrollWidth;

  // Duplicar o conteúdo para permitir rolagem contínua
  while (contentWidth < wrapperWidth * 2) {
    content.innerHTML += content.innerHTML;
    contentWidth = content.scrollWidth;
  }

  // Aplicar animação com a duração configurável
  content.style.animation = "scroll " + scrollDuration + "s linear infinite";
});
