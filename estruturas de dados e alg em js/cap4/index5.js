class Stack {
    constructor(){
        this.items = {}
        this.count = 0
    }
    push(element) {
        this.items[this.count] = element
        this.count ++
    }
    isEmpty(){
        this.items === 0
    }
    pop(){
        if(this.isEmpty()){
            return undefined
        }
        this.count --
        delete this.items[this.count]
    }
    toString(){
        if(this.isEmpty()){
            return '';
        }

        let objString = `${this.items[0]}`
        for(let i = 1; j< this.count; i ++){
            objString = `${objString}, ${this.items[i]}`
        }
        return objString;
    }
}



const stack = new Stack();
stack.push(10);
stack.push(10);
stack.push(20);
stack.pop();
console.log(stack);

function decimalToBinary(decNumber){
    const remStack = new Stack();
    let number = decNumber;
    let rem;
    let binaryString = ''

    while (number > 0) {
        rem = Math.floor(number %2)
        remStack.push(rem);
        number = Math.floor(number / 2);
    }
    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }
    return binaryString;
}
console.log(decimalToBinary(200));