// metodos de instancias e estaticos
function test(){
    console.log(this)
}

class ControleRemoto{
    // Método de instância
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }
    almentaVolume(){
        this.volume += 2;
    }
    
    diminuirVolume(){
        this.volume -= 2;
    }

    // Método estatico, para todos ás constantes
    static trocaPilha() { 
            console.log('Okay, vou trocar.')
    }

    static soma(y, x) {
        return y + x
        // o this no método estatico e referente à class "ControleRemoto"
    }
}
const c1 = new ControleRemoto('LG');
c1.almentaVolume();
c1.almentaVolume();
c1.almentaVolume();
c1.almentaVolume();
ControleRemoto.trocaPilha(); // como se fosse Math.random()
console.log(ControleRemoto.soma(20, 30));

console.log(c1);
test()// kk deu bósta
