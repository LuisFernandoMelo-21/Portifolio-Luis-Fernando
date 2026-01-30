const elementos = document.querySelectorAll('.animar');

function animarScroll() {
    const alturaTela = window.innerHeight * 0.85;

    elementos.forEach(el => {
        const topo = el.getBoundingClientRect().top;
        if (topo < alturaTela) {
            el.classList.add('ativo');
        }
    });
}

window.addEventListener('scroll', animarScroll);

animarScroll();

const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('ativo');
});

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

