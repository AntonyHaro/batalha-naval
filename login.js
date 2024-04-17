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
    event.preventDefault(); 
    localStorage.setItem("jogador", input.value); 
    window.location = "game.html";
};

input.addEventListener("input", validarInput);
form.addEventListener("submit", login);

function tocarMusica() {
    let audio = new Audio("efeitosSonoros/musicaBatalha.mp3");
    audio.volume = "0.5";
    audio.play();
}

tocarMusica();
