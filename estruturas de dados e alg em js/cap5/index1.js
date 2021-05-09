class Queue{
    constructor(){
        this.count = 0
        this.lowestCount  = 0
        this.items = {};
    }
    isEmpty(){
        this.count === 0
    }
    enqueue(element){
        this.items[this.count] = element
        this.count ++
    }
    dequeue(){
        if(this.isEmpty()){
            return undefined
        }
        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount];
        this.lowestCount ++
        return result
    }
    peek(){
        if(this.isEmpty){
            return undefined
        }
        return this.items[this.lowestCount]
    }
    size(){
        if(this.isEmpty){
            return undefined
        }
        return this.count - this.lowestCount
    }
    clear(){
        this.count = 0;
        this.items = {};
        this.lowestCount = 0
    }
    toString(){
        if(this.isEmpty()){
            return ''
        }
        let objString = `${this.items[this.lowestCount]}`
        for( let i = 0; i < this.count + this.lowestCount; i++){
            objString = `${objString}, ${this.items[i]}`
        }
        return objString
    }
}