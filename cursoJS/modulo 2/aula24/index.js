const numeros = [1,2,3,4,5,6];

for(let numero of numeros){

    if (numero === 2 || numero ===3 ){
        continue;
    }

    console.log(numero);
    if (numero === 7){
        console.log(numero);
        break;  
    }
    
}