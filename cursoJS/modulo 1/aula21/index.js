let numero = parseInt(prompt('Digite um numero: '));
let resposta = document.getElementById("d1");
let raiz = Math.sqrt(numero);
let interio = parseInt(numero);
let arrci = Math.floor(10.3);
let arrpa = Math.ceil(10.3);
resposta.innerHTML  += `<h1>O seu numero é ${numero}</h1> <br> A raiz quadrada é ${raiz} <br>
O numero inteiro é ${interio} <br> O numero arredondado para cima é ${arrci} <br> Arredondado para 
baixo ${arrpa} <br> o numero com 2 casas decimais é ${numero.toFixed(2)}`

