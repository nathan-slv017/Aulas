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

const hash = new HashTable();
hash.put('Nathan', 'emaildonathan@gmail.com');
hash.put('João Pedro', 'emailpepe@gmail.com');
hash.put('Rogerio', 'rogerin@gmail.com');
console.log(hash.hashCode('Nathan') + ' - Nathan');
console.log(hash.hashCode('Rogerio') + ' - Rogerio');


console.log(hash.get('Nathan'));
console.log(hash.get('pwpw'));
console.log(hash.size());

