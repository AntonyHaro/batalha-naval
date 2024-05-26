const input = document.querySelector("input");
const button = document.querySelector("button");
const form = document.querySelector("form");

const validarInput = ({ target }) => {
    if (target.value.trim().length >= 3) {
        button.removeAttribute("disabled");
    } else {
        button.setAttribute("disabled", "");
    }
};

const login = (event) => {
    event.preventDefault();
    localStorage.setItem("jogador", input.value);
    window.location = "game.html";
};

input.addEventListener("input", validarInput);
form.addEventListener("submit", login);
