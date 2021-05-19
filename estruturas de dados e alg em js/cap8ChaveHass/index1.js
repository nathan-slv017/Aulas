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

class ValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    toString() {
        return `[#${this.key}:${this.value}]`
    }
}

class Dictionary {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }
    hasKey(key) {
        return this.table[this.toStrFn(key)] != null;
    }


    set(key, value) {
        if (key != null && value != null) {
            const tableKey = this.toStrFn(key);
            this.table[tableKey] = new ValuePair(key, value);
            return true
        }
        return false;
    }

    remove(key){
        if(this.hasKey(key)){
            delete this.table[this.toString(key)];
            return true
        }
        return false
    }

    /* get(key){
        if(this.hasKey(key)){
            return this.table[this.toStrFn(key)];
        }
        return undefined
    }
     */

    get(key){
        const valuePair = this.table[this.toStrFn(key)]
        return valuePair == null ? undefined: valuePair.value;
    }

    keyValue(){
        return Object.values(this.table);
    }
    keyValue2(){
        const valuePairs = []
        for(const k in this.table){
            if(this.hasKey(k)){
                valuePairs.push(this.table[k]);
            }
        }
        return valuePairs
    }
    keys(){
        return this.keyValue.map(valuePair => valuePair.key);
    }
    keys2(){
        const  key = [];
        const valuePairs = this.keyValue();
        for(let i = 0; i < valuePairs.length; i++){
            key.push(valuePairs[i].key);
        }
        return key;
    }

    values(){
        return this.keyValue().map(valuePair => valuePair.value);
    }

    size(){
        return Object.keys(this.table).length; // ou return this.values().length
    }
    isEmpty(){
        return this.size() === 0;
    }
    clear() {
        this.table = {};
    }

    toString(){
        if(this.isEmpty()){
            return ''
        }
        const valuePairs = this.keyValue();
        let objStrign = `${valuePairs[0].toString()}`;
        for(let i = 1; i < valuePairs.length; i++){
            objStrign = `${objStrign}, ${valuePairs[i].toString()}`;
        }
        return objStrign;
    }

    forEach(callBack){
        const valuePair = this.keyValue2();
        for(let i = 0; i < valuePair.length; i++){
            const result = callBack(valuePair[i].key, valuePair[i].value);
            if(result === false){
                break;
            }
        }
    }

}

const dictionary = new Dictionary();
dictionary.set('Nathan', 'emaildonnatan@gmail.com');
dictionary.set('João', 'JoaozinReiDelas@gmail.com');
dictionary.set('Paula', 'paulinha@gmail.com');

console.log(dictionary.keyValue());
console.log(dictionary.values());
dictionary.forEach((k, v) =>{
    console.log(`o nome de usuario é:'${k}' e o email é:'${v}'`);
})