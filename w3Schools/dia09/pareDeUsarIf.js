class Spotify{
    constructor(type){
        this.type = type
        this.preco;
    }

    plano(){
        if(this.type == "single"){
            this.preco  = 16.9
        } else if(this.type == "dou"){
            this.preco  = 21.9
        } else if(this.type == "family"){
            this.preco = 26.9
        }
    }
}

const meuPlano = new Spotify("family");
meuPlano.plano();
console.log(meuPlano.preco);

class Single{
    static preco(){
        return 16.9
    }
}

class Dou {
    static preco() {
        return 21.9
    }
}

class Family {
    static preco(){
        return 26.9
    }
}