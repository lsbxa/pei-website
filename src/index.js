import themeSwitcher from "./themeswitcher.js"

document.getElementById('themeSwitcher').addEventListener('click', themeSwitcher)
addEventListener(onclick, themeSwitcher)

document.getElementById('scrollToTop').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // faz o scroll suave
  });
});