class ValidaCPF {
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            writable:false,
            enumerable:false,
            configurable:false,
            value:cpfEnviado.replace(/\D+/g , '')
        });
    }

    éSequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo
    }

    geraNovoCpf(){
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos); // para chamar o objeto statico, chame ele começando pelo Objeto pai ao invez de 'this'
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
        this.novoCPF = cpfSemDigitos + digito1 + digito2;
    }

    static geraDigito(cpfSemDigitos){ // por não ter this, pode se tornar um método estatico
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for(let numero of cpfSemDigitos){
            total += reverso * Number(numero);
            reverso --;
        }
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0'
    }

    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.éSequencia()) return false;
        this.geraNovoCpf()
        console.log(this.novoCPF)

        return this.novoCPF === this.cpfLimpo
    }
}
const validaCPF = new ValidaCPF('504.731.128.76');

if(validaCPF.valida()){
    console.log('CPF verdadeiro')
}else{
    console.log('CPF erronio')
}