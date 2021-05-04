class Stack {
    constructor() {
        this._count = 0;
        this._items = {}
    }
}


const _item = Symbol('stackItems');
class Stack2 {
    constructor(){
        this[_item] = [];
    }
    push(element) {
        this[_item] += element
    }
}

const stack = new Stack2()
stack.push(2);
stack.push(4);
let objectSymbols = Object.getOwnPropertySymbols(stack);

console.log(stack);
console.log(objectSymbols)
console.log(objectSymbols.length);

console.log(objectSymbols[0]);