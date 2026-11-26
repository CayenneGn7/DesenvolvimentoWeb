
const formulario = document.getElementById("formContato");
const aviso = document.getElementById("aviso-formulario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nomeContato").value.trim();
    const email = document.getElementById("emailContato").value.trim();
    const mensagem = document.getElementById("mensagemContato").value.trim();
    aviso.textContent = "";
    aviso.className = "alert d-none";

    if (nome.length < 3) {
        aviso.textContent = "O nome deve ter pelo menos 3 caracteres.";
        aviso.classList.add("alert-danger");
        aviso.classList.remove("d-none");
        return;
    }
    if (!email || !formulario.elements.email.validity.valid) {
        aviso.textContent = "Digite um endereço de e-mail válido.";
        aviso.classList.add("alert-danger");
        aviso.classList.remove("d-none");
        return;
    }
    if (mensagem.length < 10) {
        aviso.textContent = "A mensagem deve ter pelo menos 10 caracteres.";
        aviso.classList.add("alert-danger");
        aviso.classList.remove("d-none");
        return;
    }
    formulario.submit();

});

const botaoTema = document.getElementById("alternarTema");
const raiz = document.documentElement;

const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "escuro") {
    raiz.setAttribute("data-tema", "escuro");
    botaoTema.textContent = "☀︎︎";
    botaoTema.setAttribute("aria-label", "Ativar modo claro");
    botaoTema.setAttribute("aria-pressed", "true");
}

botaoTema.addEventListener("click", function () {
    const escuroAtivo = raiz.getAttribute("data-tema") === "escuro";

    if (escuroAtivo) {
        raiz.removeAttribute("data-tema");
        localStorage.setItem("tema", "claro");

        botaoTema.textContent = "☾";
        botaoTema.setAttribute("aria-label", "Ativar modo escuro");
        botaoTema.setAttribute("aria-pressed", "false");
    } else {
        raiz.setAttribute("data-tema", "escuro");
        localStorage.setItem("tema", "escuro");

        botaoTema.textContent = "☀︎︎";
        botaoTema.setAttribute("aria-label", "Ativar modo claro");
        botaoTema.setAttribute("aria-pressed", "true");
    }
});
