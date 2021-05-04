class DispositoEletronico { // class não tem ()
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    get ligar() {
        if (this.ligado) {
            console.log(this.nome + ' já está ligado');
            return
        }

        this.ligado = true;
    }

    get desligar() {
        if (!this.ligado) {
            console.log(this.nome + ' já está desligado');
            return
        }

        this.ligado = false;
    }
}

const d1 = new DispositoEletronico('Smartphone');
d1.ligar
d1.ligar
d1.desligar
console.log(d1);

// agora herança

class Smartphone extends DispositoEletronico {
    constructor(nome, cor, modelo) {
        super(nome); // para chamar o constructor da class disp..
        this.cor = cor;
        this.modelo = modelo;
    }
}

const s1 = new  Smartphone('iphone', 'preto', 'iphone 10');
console.log(s1);

// outra herança

class Tablet extends DispositoEletronico {
    constructor(nome, temWifi){
        super(nome);
        this.temWifi = temWifi;
    }

    ligar(){
        console.log('Olha, você alterou o método ligar.'); // como eu escrevi outro método ligar aki, não busca o método ligar da classe pai
    }

    falaOi(){
        console.log('Fala Oi')
    }
}

const t1 = new Tablet('motorola', true);
t1.ligar();

// a herança é hierarquica, vem de cima para baixo, o constructor filho não vai fazer parte dos constructors do pai
