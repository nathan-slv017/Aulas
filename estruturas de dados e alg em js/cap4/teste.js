class Queue {
    constructor(){
    this.count = 0;
    this.lowestCount = 0;
    this.items = {}
    }
    enqueue(element){
        this.items[this.count] = element
        this.count ++
    }
    dequeue(){
        if(this.isEmpty()){
            return undefined;
        }
        const remove = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount ++
        return remove
    }
    peek(){
        return this.items[this.lowestCount];
    }
    isEmpty(){
        return this.count - this.lowestCount === 0
    }
    size(){
        return this.count - this.lowestCount
    }

    clear(){
        this.count = 0;
        this.lowestCount = 0;
        this.items ={};
    }

    toString(){
        if(this.isEmpty()){
            return ''
        }
        let objString = `${this.items[this.lowestCount]}`
        for(let i = this.lowestCount + 1; i < this.count; i ++){
            objString = `${objString}, ${this.items[i]}`;
        }
        return objString;
    }
}

class Deque{
    constructor(){
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    addBack(element){
        this.items[this.count] = element
        this.count ++
    }
    addFront(element){
        if(this.isEmpty()){
            this.addBack(element);
        }
        for(let i = this.count; i > this.lowestCount; i --){
            this.items[i] = this.items[i - 1];
        }
        this.items[this.lowestCount] = element;
        this.count ++;
    }
    isEmpty(){
        return this.count - this.lowestCount === 0;
    }
    removeBack(){
        if(this.isEmpty()){
            return undefined;
        }
        const remove = this.items[this.count];
        delete this.items[this.count];
        this.count ++;
        return remove;
    }
    removeFront(){
        if(this.isEmpty()){
            return undefined;
        }
        const remove = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount ++
        return remove;
    }

    peekBack(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.count];
    }
    peekFront(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.lowestCount];
    }
    size() {
        return this.count - this.lowestCount;
    }
}

const deque = new Deque();
deque.addBack(20);
deque.addFront(10);
deque.addBack(30);
deque.addFront(40);
console.log(deque.items);


function palindromeChecker(aString){
    if(aString === undefined || aString === null ( aString != null && aString.lenght === 0 )){
        return false;
    }

    const deque = new Deque();
    let isequal = true
    let firstChart, lastChart;
    const lowerString = aString.toLowerCase().split(' ').join('')
    for(let i = 0; i < lowerString.lenght; i++){
        deque.addBack(lowerString[i]);
    }
    while (this.size() > 1 && isequal) {
        firstChart = deque.removeFront;
        lastChart = deque.removeBack;
        if(firstChart !== lastChart){
            isequal = false
        }

    }
    return isequal
}

