// Classe Queue

class Queue{
    constructor(){
        this.count = 0;
        this.lowestCount =0;
        this.items = {};
    }
    isEmpyt(){
        return this.count - this.lowestCount === 0 ? true : false

    }
    enqueue(element){
        this.items[this.count] = element;
        this.count ++
    }
    dequeue(){
        if(this.isEmpyt()){
            return undefined
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount ++
        return result;
    }
    peek(){
        if(this.isEmpyt()){
            return undefined;
        }
        return this.items[this.lowestCount];
    }
    size(){
        return this.count - this.lowestCount;
    }
    clear(){
        this.count = 0;
        this.lowestCount = 0;
        this.items = {}
    }
    toString(){
        if(this.isEmpyt()){
            return ''
        }

        let objString = `${this.items[this.lowestCount]}`;
        for( let i = this.lowestCount + 1; i < this.count; i++){
            objString = `${objString}, ${this.items[i]}`
        }
        return objString;
    }
}

const queue = new Queue();

queue.enqueue('john');
queue.enqueue('pepe');
queue.enqueue('Camila');

console.log(queue.toString());
console.log(queue.size());

queue.dequeue();
queue.dequeue();

console.log(queue.toString());
console.log(queue)