document.addEventListener("DOMContentLoaded", function () {
  var wrapper = document.querySelector(".announcement-bar__wrapper");
  var content = document.querySelector(".announcement-bar__content");

  if (!wrapper || !content) return;

  // Medir a largura do container visível
  var wrapperWidth = wrapper.offsetWidth;

  // Medir a largura do conteúdo
  var contentWidth = content.scrollWidth;

  // Duplicar o conteúdo até que ele seja pelo menos o dobro da largura do container
  while (contentWidth < wrapperWidth * 2) {
    content.innerHTML += content.innerHTML;
    contentWidth = content.scrollWidth;
  }

  // Aplicar animação para rolagem contínua
  content.style.animation = "scroll 45s linear infinite";
});
