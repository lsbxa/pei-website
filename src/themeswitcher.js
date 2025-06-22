import { main, root, themeSwitcher } from "./variaveis.js";

export default function () {
  const icon = document.getElementById('demo');
  const icon2 = document.getElementById('demo2');
  const home = document.getElementById('home');
  const scroll = document.getElementById('scrollToTop')
  if (main.dataset.theme === "dark") {
    //pegando os dados da tag 'main'
    root.style.setProperty("--bg-color", "#f1f5f9"); //entrando no root do css e pegando a propriedade do style
    root.style.setProperty("--border-color", "#aaa"); //cor da borda, cor trocada
    root.style.setProperty("--font-color", "#070708");
    root.style.setProperty("--primary-color", "#4dff91");
    home.style.color = "#070708";
    scroll.style.color = "#070708";
    icon.setAttribute("src", "/TechSustain-main/assets/images/instagram4.png"),
    icon2.setAttribute("src", "/TechSustain-main/assets/images/github2.png"),
    main.dataset.theme = "light";
  } else {
    root.style.setProperty("--bg-color", "#070708"); //entrando no root do css e pegando a propriedade do style
    root.style.setProperty("--border-color", "#666"); //cor da borda, cor trocada
    root.style.setProperty("--font-color", "#f1f5f9");
    root.style.setProperty("--primary-color", "#4dff91");
    home.style.color = "#f1f5f9";
    scroll.style.color = "#f1f5f9";
    icon.setAttribute("src", "/TechSustain-main/assets/images/instagram3.png"),
    icon2.setAttribute("src", "/TechSustain-main/assets/images/github.png"),
    main.dataset.theme = "dark";
  }
}

document.getElementById('themeSwitcher').addEventListener('click', themeSwitcher)