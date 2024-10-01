// Pegando os botões, o modal e o fade por id
const botaoAbrir = document.querySelector("#Abrir-Modal");
const botaoFechar = document.querySelector("#Fechar-Modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

// Isso faz com que se uma dessa variáveis tiver a classe "esconder" 
// ela é removida, se não tiver ela é adicionada, assim o modal aparece e desaparece
const toggleModal = () => {
  modal.classList.toggle("esconder");
  fade.classList.toggle("esconder");
};

// Todos os elementos dentro do array ganham o nome de "el" e tudo que tiver
// o nome de "el" vai fazer alguma coisa quando for clikado, nesse caso fazer sumir ou aparecer o modal
[botaoAbrir, botaoFechar, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});