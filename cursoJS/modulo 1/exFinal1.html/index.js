let nome = document.getElementById("nome");
let sobrenome = document.getElementById("sobrenome");
let peso = document.getElementById("peso");
let altura = document.getElementById("altura");
let resultado = document.getElementById("resultado");

function enviar() {
    console.log(nome.value);
    console.log(sobrenome.value);
    console.log(peso.value);
    console.log(altura.value);

    let cadastro = []
    

    cadastro.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value
    })
    console.log(cadastro)
    resultado.innerHTML += `<br> ${nome.value}  ${sobrenome.value}, peso ${peso.value}, altura${altura.value}`;

}

