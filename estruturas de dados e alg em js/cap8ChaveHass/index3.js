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
function defaultToString(item) {
    if (item === null) {
        return 'NULL';
    } else if (item === undefined) {
        return 'undefined';
    } else if (typeof item === 'string' || item instanceof String) {
        return `${item}`;
    }
    return item.toString();
}

class ValuePair{
    constructor(key, value){
        this.key = key;
        this.value = value;
    }
}

class HashTable {
    constructor(toStrFn = defaultToString){
        this.toStrFn = toStrFn;
        this.table = {};
    }

    loseLoseHashCode(key){
        if(typeof key === 'number'){
            return key;
        }
        const tableKey = this.toStrFn(key);
        let hash = 0;
        for(let i = 0; i < tableKey.length; i++){
            hash += tableKey.charCodeAt(i);
        }
        return hash % 37;
    }

    hashCode(key){
        return this.loseLoseHashCode(key);
    }
    put(key, value){
        if(key != null && value != null){
            const position = this.hashCode(key);
            this.table[position] = new ValuePair(key, value);
            return true;
        }
        return undefined
    }
    get(key) {
        const valuePair = this.table[this.hashCode(key)]
        return valuePair == null ? undefined : valuePair.value;
    }

    remove(key) {
        const hash = this.hashCode(key);
        const valuePair = this.table[hash];
        if(valuePair != null){
            delete this.table[hash]
            return true;
        }
        return false
    }

    size(){
        return Object.keys(this.table).length
    }
    isEmpyt(){
        return this.size() === 0;
    }

    toString(){
        if(this.isEmpyt()){
            return ''
        }
        const keys = Object.keys(this.table);
        let objStrign = `[${keys[0]} => ${this.table[keys[0].toString()]}]`;
        for(let i = 0; i < keys.length; i++){
            objStrign = `${objStrign}, {${keys[i]} => ${this.table[keys[i]].toString()}}`;
        }
        return objStrign;
    }
}

class HashTableSepareteChaining{
    constructor(toStrFn = defaultToString){
        this.toStrFn = toStrFn;
        this.table ={};
    }

    put(key, value){
        if(key != null && value !=null){
            const position = this.hashCode(key);
            if(this.table[position] == null){
                this.table[position] = new LinkedList();
            }
            this.table[position].push(new ValuePair(key, value));
            return true;
        }
        return false
    }

    get(key){
        const position = this.hashCode(key);
        const linkedList = this.table[position];
        if(linkedList != null && !linkedList.isEmpty()){
            let current = linkedList.getHead();
            while(current != null){
                if(current.element.key === key){
                    return current.element.value;
                }
                current = current.next;
            }
        }
        return undefined;
    }

    remove(key){
        const position = this.hashCode(key);
        const linkedList = this.table[position];
        if(linkedList != null && !linkedList.isEmpty()){
            let current = linkedList.getHead();
            while(current != null){
                if(current.element.key === key){
                    linkedList.remove(current.element);
                    if(linkedList.isEmpty()){
                        delete this.table[position];
                    }
                    return true;
                }
                current = current.next;
            }
        }
        return false;
    }
}

