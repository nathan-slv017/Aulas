const nome = prompt("digite o seu nome completo");
document.body.innerHTML += `o seu nome é ${nome}<br>`;
document.body.innerHTML += `o seu nome tem ${nome[1]} letras <br>`;
document.body.innerHTML += `A segunda letra do seu nome é ${String(nome.length[1])} <br>`
document.body.innerHTML += `Seu nome em letras maiusculas é ${nome.toUpperCase()} <br>`
document.body.innerHTML += `Seu nome com letras minusculas é ${nome.toLowerCase()} <br>`
document.body.innerHTML += `Qual o primeiro indice da letra a no seu nome? ${nome.indexOf('a')}`