

function comprar(){
    let tipo = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);

    if(tipo == 'pista'){
        comprarPista(quantidade);
    } else if(tipo == 'superior'){
        comprarSuperior(quantidade);
    } else if(tipo == 'inferior'){
        comprarInferior(quantidade);
    }  
    
}

function comprarPista(quantidade){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (quantidade > qtdPista){
        alert ('quantidade indiponível para compra');
    } else {
        qtdPista = qtdPista - quantidade
        document.getElementById('qtd-pista').textContent = qtdPista 
        alert ('Compra efetuada com sucesso')
    }
}

function comprarInferior(quantidade){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent)
    if (quantidade > qtdInferior){
        alert ('quantidade indiponível para compra');
    } else {
        qtdInferior = qtdInferior - quantidade
        document.getElementById('qtd-inferior').textContent = qtdInferior; 
        alert ('Compra efetuada com sucesso')
    }
}function comprarSuperior(quantidade){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (quantidade > qtdSuperior){
        alert ('quantidade indiponível para compra');
    } else {
        qtdSuperior = qtdSuperior - quantidade
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert ('Compra efetuada com sucesso')
    }
}


    // let superior = 
    // 

//fazer o botao funcionar
//recuperar os valores da pagina
// subtrair o total de ingressos