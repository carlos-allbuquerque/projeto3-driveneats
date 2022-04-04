function escolherPrato(opcao){
    console.log(opcao);
    const selecionado = document.querySelector(".prato-selecionado");
    if (selecionado !== null) {
        selecionado.classList.remove("prato-selecionado");
    }
    opcao.classList.add("prato-selecionado");
}

function escolherBebida(opcao) {
    console.log(opcao);
    const selecionado = document.querySelector(".bebida-selecionada");
    if (selecionado !== null) {
        selecionado.classList.remove("bebida-selecionada");
    }
    opcao.classList.add("bebida-selecionada");
}

function escolherSobremesa(opcao) {
    console.log(opcao);
    const selecionado = document.querySelector(".sobremesa-selecionada");
    if (selecionado !== null) {
        selecionado.classList.remove("sobremesa-selecionada");
    }
    opcao.classList.toggle("sobremesa-selecionada");
}

