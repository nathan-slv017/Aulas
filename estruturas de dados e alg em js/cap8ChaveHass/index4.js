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

class HashTableLinearProbingLazy extends HashTable{
    constructor(toStrFn = defaultToString){
        this.table = {};
        this.toStrFn = toStrFn;
    }

    put(key, value){
        if(key != null && value != null){
            const position = this.hashCode(key);
            if(this.table[position] == null){
                this.table[position] = new ValuePair(key, value);
            } else {
                let index = position + 1
                while(this.table[index] != null){
                    index ++;
                }
                this.table[index] = new ValuePair(key, value);
            }
            return true;
        }
        return false;
    }

    get(key){
        const position = this.hashCode(key);
        if(this.table[position] != null){
            if(this.table[position].key === key){
                return this.table[position].value;
            } 
            let index = position + 1;
            while(this.table[index].key !== key && this.table[index] != null){
                index ++;
            }
            if(this.table[index] != null && this.table[index].key === key){
                return this.table[index].value;
            }
        }
        return undefined;
    }

    remove(key){
        const position = this.hashCode(key)
        if(this.table[position] != null){
            if(this.table[position].key === key){
                delete this.table[position];
                this.verifyRemoveSideEffect(key, position)
                return true;
            }
            let index = position + 1;
            while(this.table[index] != null && this.table[index].key !== key){
                index ++
            }
            if(this.table[index] != null && this.table[index].key === key){
                delete this.table[index];
                this.verifyRemoveSideEffect(key, index)
                return true;
            }
        }
        return false
    }
    verifyRemoveSideEffect(key, removePosition){
        const hash = this.hashCode(key);
        let index = removePosition + 1;
        while(this.table[index] != null){
            const posHash = this.hashCode(this.table[index].key);
            if(posHash <= hash || posHash <= removePosition){
                this.table[removePosition] = this.table[index];
                delete this.table[index];
                removePosition = index;
            }
            index ++;
        }
    }
}
