function defaultEquals(a, b) {
    return a === b;
}

class Node {
    constructor(element, next) {
        this.element = element;
        this.next = next;
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
        let current
        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next != null) {
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

    getElementAt(index) {
        if (index >= 0 && index <= this.count) {
            let node = this.head;
            for (let i = 1; i < index && node != null; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }

    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element);
            if (index === 0) {
                const current = this.head;
                node.next = current;
                this.head = node;
            } else {
                const previous = this.getElementAt(index);
                const current = previous.next;
                node.next = current;
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }

    indexOf(element) {
        let current = this.head;
        for (i = 0; i < this.count && current != null; i++) {
            if (this.equalsFn(element, current.element)) {
                return i;
            }
            current = current.next;
        }
        return -1;
    }
    remove(element) {
        const index = indexOf(element);
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
        if (this.head == null) {
            return '';
        }
        let objString = `${this.head.element}`
        let current = this.head.next;
        for (let j = 1; j < this.size() && current != null; j++) {
            objString = `${objString}, ${current.element}`
            current = current.next;
        }
        return objString;
    }
}


class CircularLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals){
        super(equalsFn)
    }
    insert(element, index){
        if(index >=0 && index <= this.count){
            const node = new Node(element);
            let current = this.head;
            if( index === 0 ){
                if(this.head == null) {
                    this.head = node;
                    node.next = this.head
                } else{
                    node.next = current;
                    current = this.getElementAt(this.size());
                    this.head = node;
                    current.next = node
                }
            } else {
                const previous = this.getElementAt(index -1)
                node.next = previous.next
                previous.next = node
            }
            this.count ++
            return true
        }
        return false;
    }

    removeAt(index){
        if(index >=0 && index < this.count){
            let current = this.head;
            if(index === 0 ){
                if(this.size() === 1){
                    this.head = undefined;
                } else {
                    const removed = this.head;
                    current = this.getElementAt(this.size());
                    this.head = this.head.next;
                    current.next = this.head;
                    current = removed;
                }
            } else {
                const previous = this.getElementAt(index - 1);
                 current = previous.next;
                 previous.next = current.next;
            }
            this.count --;
            return current.element;
        }
        return undefined
    }
}