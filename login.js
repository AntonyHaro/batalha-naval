const input = document.querySelector(".login-input");
const button = document.querySelector(".login-button");
const form = document.querySelector(".login-form");

const validarInput = ({ target }) => {
    if (target.value.trim().length >= 3) {
        button.removeAttribute("disabled");
    } else {
        button.setAttribute("disabled", "");
    }
};

const login = (event) => {
    event.preventDefault(); //bloqueia a pagina de recarregar e continua
    localStorage.setItem("jogador", input.value); //coloca no armazenamento local a chave jogador com o valor do input
    window.location = "game.html";
};

input.addEventListener("input", validarInput);
form.addEventListener("submit", login);
