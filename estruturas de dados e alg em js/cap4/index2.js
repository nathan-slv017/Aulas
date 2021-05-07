class Stack {
    constructor() {
        this.count = 0;
        this.items = {};
    }
    // methods

    push(element) {
        this.items[this.count] = element
        this.count++;
    }

    size() {
        return this.count
    }

    isEmpty() {
        return this.count === 0;
    }

    pop() {
        if (this.isEmpty()) {
            return undefined
        }
        this.count--;
        const resultado = this.items[this.count];
        delete this.items[this.count];
        return resultado
    }

    peek() {
        if (this.isEmpty()) { return undefined; }
        return this.items[this.count - 1]
    }

    clear() {
        this.count = 0;
        this.items = [];
    }

    clearAll() {
        while (!this.isEmpty()) {
            this.pop()
        }

    }

    toString() {
        if(this.isEmpty()){
            return ''
        }
        let objString = `${this.items[0]}`
        for(let i = 0; i < this.items; i ++){
            objString = `${objString}, ${this.items[0]}`
        }
    }

}

const stack = new Stack();
stack.push(10);
stack.push(12);
/*console.log(stack.pop());
console.log(stack);
console.log(stack.peek());
*/

console.log(Object.getOwnPropertyNames(stack));
console.log(Object.keys(stack));
console.log(stack.items)
