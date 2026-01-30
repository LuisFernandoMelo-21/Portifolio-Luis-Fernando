const form = document.getElementById('formcontato');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const mensagem = document.getElementById('mensagem');
const feedback = document.getElementById('feedback');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (nome.value === '' || email.value === '' || mensagem.value === '') {
        feedback.textContent = 'Por favor, preencha todos os campos.';
        feedback.style.color = 'red';
        return;
    } 

    feedback.textContent = 'Mensagem enviada com sucesso!';
    feedback.style.color = 'green';

    form.reset();
});

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

const menubtn = document.getElementById('menu-btn');
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
