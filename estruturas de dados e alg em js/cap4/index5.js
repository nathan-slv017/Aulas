class Stack {
    constructor(){
        this.items = []    
    }
    push(element) {
        this.items += element
    }
    isEmpty(){
        this.items === 0
    }
    pop(){
        if(this.isEmpty){
            return undefined
        }
        this.items[this.items.length - 1]
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

function decimalToBinary(decNumber){
    const remStack = new Stack()

    let number = decNumber;
    let rem;
    let binaryString = ''

    while (number > 0) {
        rem =  Math.floor(number % 2)
        remStack.push(rem);
        number = Math.floor(number /2);
    }
    while (!remStack.isEmpty()) {
        binaryString += remStack.pop()
    }
    return binaryString;
}

console.log(decimalToBinary(234))