function adicionar(num){
    let numero = document.getElementById('num1').innerHTML;
    document.getElementById('num1').innerHTML  = numero + num
}

function limpar(){
    document.getElementById('num1').innerHTML = "00";
}

function corrigir(){
    let resultado = document.getElementById('num1').innerHTML;
    document.getElementById('num1').innerHTML = resultado.substring(0 , resultado.length -1);
}

function confirmar(){
    let resposta = document.getElementById('num1').textContent;

    let divisao = document.getElementById("candidato");

    console.log(resposta)

    let img = document.createElement("img");
    img.innerHTML = "";
    if(resposta == "69"){
        img.src= "./69.jpeg";
        img.style.width= "150px"
        divisao.appendChild(img);


        let nome = document.getElementById("nome");
        let partido = document.getElementById("partido");

        nome.innerHTML = "BRUNO MAMADOR"
        partido.innerHTML = "MAMADORES NACIONAIS"

    }else if( resposta == "13"){
        img.src= "./13.jpeg";
        img.style.width= "150px"
        divisao.appendChild(img);


        let nome = document.getElementById("nome");
        let partido = document.getElementById("partido");

        nome.innerHTML = "MARCELO MARTELO"
        partido.innerHTML = "PARTIDOR DE CORAÇÕES"

    }else if( resposta == "13"){
        img.src= "./13.jpeg";
        img.style.width= "150px"
        divisao.appendChild(img);


        let nome = document.getElementById("nome");
        let partido = document.getElementById("partido");

        nome.innerHTML = "MARCELO MARTELO"
        partido.innerHTML = "PARTIDOR DE CORAÇÕES"

    }else if( resposta == "48"){
        img.src= "./48.jpeg";
        img.style.width= "150px"
        divisao.appendChild(img);


        let nome = document.getElementById("nome");
        let partido = document.getElementById("partido");

        nome.innerHTML = "ENDREW MACONHEIRO"
        partido.innerHTML = "SLA MANO SÓ APERTA O VERDE LOGO KKKK"

    }else if( resposta == "23"){
        img.src= "./23.jpeg";
        img.style.width= "150px"
        divisao.appendChild(img);


        let nome = document.getElementById("nome");
        let partido = document.getElementById("partido");

        nome.innerHTML = "MARCOS PAULO"
        partido.innerHTML = "FODASE "

    }else if( resposta == "31"){
        img.src= "./31.jpeg";
        img.style.width= "150px"
        divisao.appendChild(img);


        let nome = document.getElementById("nome");
        let partido = document.getElementById("partido");

        nome.innerHTML = "IBMR "
        partido.innerHTML = " ( QUER DESCONTO MANO ? KKK )"

    }

}