document.querySelectorAll(".bloco").forEach(bloco => {
    bloco.addEventListener("click", abrirFecharBloco);
});

function abrirFecharBloco(evento) {
    if (!evento.target.classList.contains("tituloBloco")) return;

    bloco = evento.path.find(elemento => elemento.classList.contains("bloco"));
    bloco.classList.toggle("-fechado");
}