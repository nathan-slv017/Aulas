function BarracaDeBanana(avenda){
    this.bananasDisponiveis 
    Object.defineProperties(this, {
        avenda:{
            set: function(value){
                if(typeof value !== 'number'){
                    throw TypeError ('Precisa ser um numero')
                }
                console.log(Math.floor(this.bananasDisponiveis = value/1.2) + ' Disponiveis')
                
            }
        }
    })
}
BarracaDeBanana.prototype.lucro = function (){
    let lucro = this.bananasDisponiveis * 2
    console.log('R$ '+lucro.toFixed(2))
    
}



const diaUm = new BarracaDeBanana();
diaUm.avenda = 200
diaUm.lucro();



function BarracaDePera(avenda){
    BarracaDeBanana.call(this, avenda);
}
BarracaDePera.prototype = Object.create(BarracaDeBanana.prototype);
const diaDois = new BarracaDePera()

diaDois.lucro();
diaDois.avenda = 300