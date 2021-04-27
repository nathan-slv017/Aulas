
let meuCpf = '504.731.128-76';



function verificaCpf(){
    let paraConta = cpfParaConta(meuCpf);
    let priCentena = primeiraCentena(paraConta);
    let priDigito = primerioDigito(priCentena);

    let segCentena = segundaCentena(paraConta, priDigito);
    let segDigito = segundoDigito(segCentena);
    
    let finalEspeculado = []
    finalEspeculado.push(priDigito);
    finalEspeculado.push(segDigito);
    

    let finalDoCpf = cpf100Number(meuCpf);

    
    if(finalEspeculado === finalDoCpf){
    return true
}else false



}
function cpfNumber(meuCpf){
    let cpfCru = meuCpf.replace(/\D+/g, '');
    let cpfNumber = Number(cpfCru);
    
}
function cpfParaConta(meuCpf){
    let cpfCru = meuCpf.replace(/\D+/g, '');
    let cpfCruArray = Array.from(cpfCru);
    cpfCruArray.pop()
    cpfCruArray.pop()
    
    let cpfCruArrayNumbers = cpfCruArray.map(Number)
    return cpfCruArrayNumbers
}

function primeiraCentena(arryaCpf){
   let array = arryaCpf
   let primeiraSoma = array.map((value, indice) =>{
    return value * (10 - indice);
   }).reduce((ac, value) =>{
    return ac + value
   }, 0)
   return primeiraSoma;
}

function primerioDigito(priCEN){
    
    let digito =  11 - (priCEN % 11);
    if(digito == 9){
        return 9
    }else{
        return digito;
    }
}
function segundaCentena(arryaCpf,priDigito){
    arryaCpf.push(priDigito)
    let array = arryaCpf
   let primeiraSoma = array.map((value, indice) =>{
    return value * (11 - indice);
   }).reduce((ac, value) =>{
    return ac + value
   }, 0)
   
   return primeiraSoma;
}
function segundoDigito(segCEN){
    
    let digito =  11 - (segCEN % 11);

    if(digito == 9){
        return 9
    }else{
        return digito;
    }
}
function cpf100Number(meuCpf){
    let cpfCru = meuCpf.replace(/\D+/g, '');
    let cpfCruArray = Array.from(cpfCru);
    
    
    let cpfCruArrayNumbers = cpfCruArray.map(Number);
    cpfCruArrayNumbers.shift();
    cpfCruArrayNumbers.shift();
    cpfCruArrayNumbers.shift();
    cpfCruArrayNumbers.shift();
    cpfCruArrayNumbers.shift();
    cpfCruArrayNumbers.shift();
    cpfCruArrayNumbers.shift();
    cpfCruArrayNumbers.shift();
    cpfCruArrayNumbers.shift();
    

    
    return cpfCruArrayNumbers
}

console.log(verificaCpf());
