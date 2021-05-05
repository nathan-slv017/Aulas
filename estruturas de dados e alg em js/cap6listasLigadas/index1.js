class Node {
    constructor(element, next) {
        this.element = element;
        this.next = next;
    }
}

class DoublyNode extends Node {
    constructor(element, next, prev){
        super(element, next);
        this.prev = prev;
    }
}

function defaultEquals(a, b){
    return a === b;
}

class LinkedList{
    constructor(equalsFn = defaultEquals){
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }
    push(element){
        const node = new Node(element);
        let current;
        if(this.head == null){
            this.head = node
        } else {
            current = this.head;
            while (current.next != null){
                current = current.next
            }
            current.next = node;
        }
        this.count ++;
    }
   removeAt(index){
        if(index >= 0 && index < this.count){
            let current = this.head
            if(index === 0){
                this.head = current.next
            } else {
                const previous = this.getElementAt(index - 1);
                current = previous.next
                previous.next = current.next;
            }
            this.count -- ;
            return current.element
        }
        return undefined;
    } 
    getElementAt(index){
        if(index >= 0 && index <= this.count){
            let node = this.head;
            for( let i = 0; i<index && node != null; i++){
                node = node.next;
            }
            return node;
        }
        return undefined;
    }
    insert(element, index){
        if(index >= 0 && index <= this.count){
            const node = new Node(element);
            if (index === 0 ){
                const current = this.head
                this.head = node
            } else {
                const previous = this.getElementAt(index - 1)
                const current  = previous.next
                node.next - current;
                previous.next = node;
            }
            this.count ++ 
            return true 
        }
        return false
    }
    
}

const list = new LinkedList();
list.push(15);
list.push(20);
list.push(29);
list.removeAt(0)
console.log(list);