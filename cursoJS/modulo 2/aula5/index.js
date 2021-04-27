/* 
entre 0 - 11 - Bom dia 
entre 12 -17 - Boa tarde 
entre 18 - 23 - boa noite
*/

const hora = 19;

    if(hora >= 0 && hora <= 11){
        console.log('Bom dia');
    }else if(hora >= 12 && hora <= 17){
        console.log('Boa tarde');
    }else if(hora >=18 && hora <= 23){
        console.log('Boa noite');
    }else{
        console.log('Olá');
    }