class Stack {
    constructor(){
        this.items = [];
    }

    push(element){
        return this.items.push(element)
    }

    pop(){
        return this.items.pop()
    }

    peek(){
        return this.items[this.items.length - 1];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }

    clear(){
        return this.items = [];
    }
    
}




const stack = new Stack();

stack.push(4);
stack.push(2);


console.log(stack.isEmpty());
//stack.clear()
//console.log(stack.isEmpty())

console.log(stack.size())