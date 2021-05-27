function defaultEquals(a, b){
    return a === b;
}

class Node {
    constructor(element, next){
        this.element = element;
        this.next = next;
    }
}

class LinkedList {
    constructor(equalsFn = defaultEquals){
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }

    push(element){
        const node = new Node(element);
        let current
        if(this.head == null){
            this.head = node;
        } else {
            current = this.head;
            while(current.next != null){
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    }
    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index === 0) {
                this.head = current.next;
            } else {
                const previous = this.getElementAt(index);
                current = previous.next;
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }

    getElementAt(index){
        if(index >=0 && index <= this.count){
            let node = this.head;
            for(let i = 1; i < index && node != null; i++){
                node = node.next;
            }
            return node;
        }
        return undefined;
    }

    insert(element, index){
        if(index >= 0 && index <= this.count){
            const node = new Node(element);
            if(index === 0 ){
                const current = this.head;
                node.next = current;
                this.head = node;
            }else {
                const previous = this.getElementAt(index);
                const current = previous.next;
                node.next = current;
                previous.next = node;
            }
            this.count ++;
            return true;
        }
        return false;
    }

    indexOf(element){
        let current = this.head;
        for( i = 0; i < this.count && current != null; i++){
            if(this.equalsFn(element, current.element)){
                return i;
            }
            current = current.next;
        }
        return -1;
    }
    remove(element){
        const index = indexOf(element);
        return this.removeAt(index);   
    }
    size(){
        return this.count;
    }

    isEmpty(){
        return this.size() === 0;
    }

    getHead(){
        return this.head;
    }

    toString(){
        if(this.head == null){
            return '';
        }
        let objString = `${this.head.element}`
        let current = this.head.next;
        for(let j = 1; j <this.size() && current != null; j++ ){
            objString = `${objString}, ${current.element}`
            current = current.next;
        }
        return objString;
    }
}

const lista = new LinkedList();
lista.push(10);
lista.push(20);
console.log(lista.toString());
console.log(lista);

class DoublyNode extends Node{
    constructor(element, next, prev){
        super(element,next);
        this.prev = prev;
    }
}

class DoublyLinkedList extends LinkedList{
    constructor(equalsFn = defaultEquals){
        super(equalsFn);
        this.tail = undefined;
    }
    insert(element, index){
        if(index >= 0 && index <= this.count){
            const node = new DoublyNode(element);
            let current = this.head;
            if(index === 0){
                if(this.head == null){
                    this.head = node;
                    this.tail = node;
                } else{
                    node.next = current;
                    current.prev = node;
                    this.head = node;
                }
            } else if(index === this.count){
                current = this.tail;
                current.next = node;
                node.prev = current;
                this.tail = node;
            } else{
                const previous = this.getElementAt(index);
                current = previous.next;
                node.next = current;
                previous.next = node;
                current.prev = node;
                node.prev = previous;
            }
            this.count ++;
            return true;
        }
        return false
    }
    removeAt(index){
        if(index >= 0 && index <= this.count){
            let current = this.head;
            if(index === 0){
                this.head = current.next;
                if(this.count === 1){
                    this.tail = undefined;
                } else{
                    this.head.prev = undefined;
                }
            } else if( index === this.count - 1){
                current = this.tail;
                this.tail = current.prev;
                this.tail.next.next = undefined; 
            } else{
                current = this.getElementAt(index);
                const previous = current.prev;
                previous.next = current.next;
                current.next.prev = previous;
            }
            this.count --;
            return current.element;
        }
        return undefined;
    }
}