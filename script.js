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
    opcao.classList.add("sobremesa-selecionada");
}

function habilitaBotao (opcao) {
    let prato = document.querySelector(".prato-selecionado");
    let bebida = document.querySelector(".bebida-selecionada");
    let sobremesa = document.querySelector(".sobremesa-selecionada");

    if (prato !== null && bebida !== null && sobremesa !== null) {
            barraFinalClicavel.classList.remove("escondido");
            barraFinalInclicavel.classList.add("escondido");
    }
}

function redirecionar(){
    const texto = encodeURIComponent(`Olá, gostaria de fazer o pedido:
    - Prato: ${identificaPratoSelecionado()}
    - Bebida: ${identificaBebidaSelecionada()}
    - Sobremesa: ${identificaSobremesaSelecionada()}
    Total: R$ ${valorTotal()}`);

    window.open(`https://wa.me/83987163158?text=` + texto);
}


const barraFinalClicavel = document.querySelector(".barra-final-clicavel");
const barraFinalInclicavel = document.querySelector(".barra-final");


function identificaPratoSelecionado(){
    let pratoSelecionado = document.querySelector(".prato-selecionado").querySelector(".conteudo-opcao").querySelector(".nome").innerHTML;
    return pratoSelecionado;
}

function identificaBebidaSelecionada(){
    let bebidaSelecionada = document.querySelector(".bebida-selecionada").querySelector(".conteudo-opcao").querySelector(".nome").innerHTML;
    return bebidaSelecionada;
}
function identificaSobremesaSelecionada() {
    let sobremesaSelecionada = document.querySelector(".sobremesa-selecionada").querySelector(".conteudo-opcao").querySelector(".nome").innerHTML;
    return sobremesaSelecionada;
}

function valorTotal() {
    let precoPrato = document.querySelector(".prato-selecionado").querySelector(".conteudo-opcao").querySelector(".preco").innerHTML;
    let precoBebida = document.querySelector(".bebida-selecionada").querySelector(".conteudo-opcao").querySelector(".preco").innerHTML;
    let precoSobrememsa = document.querySelector(".sobremesa-selecionada").querySelector(".conteudo-opcao").querySelector(".preco").innerHTML;
    let total = parseFloat(precoPrato.substring(3).replace(",", ".")) + parseFloat(precoBebida.substring(3).replace(",", ".")) + parseFloat(precoSobrememsa.substring(3).replace(",", "."));
    return total.toFixed(2);
}





