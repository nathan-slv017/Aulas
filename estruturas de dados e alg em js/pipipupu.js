class Queue{
    constructor(){
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    enqueue(element){
        this.items[this.count] = element;
        this.count ++;
    }
    dequeue(){
        if(this.isEmpyt()){
            return undefined;
        }
        const resultado = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount ++;
        return resultado;
    }
    isEmpyt(){
        return this.size() === 0;
    }
    peek(){
        if(this.isEmpyt()){
            return undefined;
        }
        return this.items[this.lowestCount];
    }
    size(){
        return this.count - this.isEmpyt;
    }

    clear(){
        this.items = {};
        this.lowestCount = 0;
        this.count = 0;
    }
    toString(){
        if(this.isEmpyt()){
            return ''
        }
        let objString = `${this.items[this.lowestCount]}`
        for(let i = this.lowestCount + 1; i < this.count; i++){
            objString = `${objString}, ${this.items[i]}`
        }
    }
}

class Deque{
    constructor(){
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    addFront(element){
        if(this.isEmpyt()){
            this.addBack(element);
        } else if (this.lowestCount > 0) {
            this.lowestCount --;
            this.items[this.lowestCount] = element;
        } else {
            for(let i = this.count; i > 0; i--){
                this.items[i] = this.items[i - 1]
            }
            this.count ++;
            this.lowestCount = 0;
            this.items[0] = element;
        }
    }
    addBack(element){
        this.items[this.count] = element;
        this.count ++;
    }

    removeFront(){
        if(this.isEmpyt()){
            return undefined;
        }
        if(this.size() === 1){
           return  this.removeBack();
        } else if(this.lowestCount > 0){
            delete this.items[this.lowestCount];
            this.lowestCount --;
        } else{
            for(let i = this.count - 1; i < this.lowestCount; i++){
                this.items[i] = this.items[i + 1];
            }
            this.count --;
            delete this.items[this.lowestCount];
            this.lowestCount ++;
            return;
        }

    }

    removeBack(){
        this.count --;
        this.items[this.count];
    }

    isEmpyt(){
        return this.size() === 0;
    }

    size(){
        this.count - this.lowestCount;
    }
}