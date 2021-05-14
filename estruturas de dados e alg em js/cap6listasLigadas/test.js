function defaultEquals(a, b) {
    return a === b;
}

class Node {
    constructor(element) {
        this.element = element;
        this.next = undefined;
    }
}

class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }
    push(element) {
        const node = new Node(element);
        let current;
        if (this.head == null) {
            this.head = node
        } else {
            current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
        this.count++
    }
    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index === 0) {
                this.head = current.next;
            } else {
                let previous = this.getElementAt(index - 1)
                current = previous.next;
                previous.next = current.next
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }

    getElementAt(index) {
        if (index >= 0 && index < this.count) {
            let node = this.head;
            for (let i = 0; i < index && node != null; i++) {
                node = node.next
            }
            return node
        }
        return undefined;
    }
    insert(element, index) {
        if (index >= 0 && index < this.count) {
            let node = new Node(element)

            if (index === 0) {
                let current = this.head
                node.next = current;
                this.head = node;
            } else {
                const previous = this.getElementAt(index - 1);
                const current = previous.next;
                node.next = current;
                previous.next = node;
            }
            this.count++;
            return
        }
        return undefined;
    }
    indexOf(element) {
        let current = this.head;
        for (let i = 0; i < this.count && current != null; i++) {
            if (this.equalsFn(element, current.element)) {
                return i;
            }
            current = current.next;
        }
        return undefined;
    }
    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }
    size() {
        return this.count;
    }
    isEmpty() {
        return this.size() === 0;
    }
    getHead() {
        return this.head;
    }
    toString() {
        if (this.getHead() == null) {
            return '';
        }
        let objString = `${this.head.element}`;
        let current = this.head.next;
        for (let i = 1; i < this.size() && current != null; i++) {
            objString = `${objString}, ${current.element}`
        }
        return objString;
    }
}



const list = new LinkedList();
list.push(20);
list.push(21);
list.push(20);
list.removeAt(0)
console.log(list.head);

class DoublyNode extends Node {
    constructor(element, prev, next) {
        super(element, next);
        this.prev = prev;
    }
}
class DoublyLinkrdList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn);
        this.tail = undefined;
    }
    insert(element, index) {
        if (index >= 0 && index < this.count) {
            const node = DoublyLinkrdList(element);
            let current = this.head;
            if (index === 0) {
                if (this.head == null) {
                    this.head = node;
                    this.tail = node;
                } else {
                    node.next = current;
                    current.prev = node;
                    this.head = node;
                }
            } else if(index == this.count){
                current = this.tail;
                current.next = node;
                node.prev = current;
                this.tail = node;
            } else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                node.prev = current;
                previous.next = node;
                current.prev = node;
                node.prev = previous;
            }
            this.count++;
            return true;
        }
        return false;
    }
    removeAt(index){
        if(index >=0 && index < this.count){
            let current = this.head;
            if(index === 0){
                this.head = current.next;
                if(this.count === 1){
                    this.tail = undefined;
                } else {
                    this.head.prev = undefined;
                }
            } else if(index === this.count -1) {
                current = this.tail;
                this.tail = current.prev;
                this.tail.next = undefined;
            } else {
                current = this.getElementAt(index);
                const previous = current.prev;
                previous.next = current.next;
                current.next.prev = previous;
            }
            this.count ++;
            return current.element;
        }
        return undefined;
    }
}