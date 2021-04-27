let HoraAtual = Date.now();
let horaExata = new Date(HoraAtual);

function diaDeHoje(hora) {
    let diaS = function () {
        switch (hora.getDay()) {
            case 0:
                return 'Domingo'
            case 1:
                return 'Segunda-feira'
            case 2:
                return 'Terça-feira'
            case 3:
                return 'Quarta-feira'
            case 4:
                return 'Quinta-feira'
            case 5:
                return 'Sexta-feira'
            case 6:
                return 'Sábado'
        }
    }
    let mes = function () {
        switch (hora.getMonth() + 1) {
            case 1:
                return 'Janeiro'
            case 2:
                return 'Fevereiro'
            case 3:
                return 'Março'
            case 4:
                return 'Abril'
            case 5:
                return 'Maio'
            case 6:
                return 'Junho'
            case 7:
                return 'Julho'
            case 8:
                return 'Agosto'
            case 9:
                return 'Setembro'
            case 10:
                return 'Outubro'
            case 11:
                return 'Novembro'
            case 12:
                return 'Dezembro'
        }
    }
    let dia = hora.getDate();
    let naHora = hora.getHours();
    let min = hora.getMinutes();

    function zeroAEsquerda(num) {
        return num >= 10 ? num : `0${num}`
    }
    let h1 = document.querySelector('.local h1');
    h1.innerHTML = `${diaS()}, ${dia} de ${mes()}, às ${naHora}:${min}`

    console.log(`${diaS()}, ${dia} de ${mes()}, ${naHora}:${zeroAEsquerda(min)} `);

}



diaDeHoje(horaExata);


// poderia ter feito
/*
const h1 = document.querySelector('.container h1');
const data = new Date();
const opcoes = {
    datastyle:'full'
    timeStyle:'short'
};

h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes);
*/