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
    toString(){
        return `[#${this.key}: ${this.value}]`;
    }
}

class Dictionary{
    constructor(toStrFn = defaultToString){
        this.toStrFn = toStrFn;
        this.table = {};
    }
    hasKey(key){
        return this.table[this.toStrFn(key)] != null;
    }

    set(key, value){
        if(key != null && value != null){
            const tableKey = this.toStrFn(key);
            this.table[tableKey] = new ValuePair(key, value);
            return true;
        }
        return false;
    }
    remove(key){
        if(this.hasKey(key)){
            delete this.table[this.toStrFn(key)];
            return true;
        }
        return false
    }
    get(key){
        const valuePair = this.toStrFn(key);
        return this.table[valuePair] == null ? undefined: valuePair.value;
    }
    keyValues(){
        return Object.values(this.table);
    }
    keys(){
        return this.keyValues().map(valuePair => valuePair.key);
    }
    values(){
        return this.keyValues().map(valuePair => valuePair.value);
    }
    forEach(callBackFn){
        const valuePair = this.keyValues();
        for(let i = 0; i < valuePair.length; i++){
            const result = callBackFn(valuePair[i].key, valuePair[i].value);
            if(result === false){
                break;
            }
        }
    }
    size(){
        return Object.keys(this.table).length;
    }
    isEmpyt(){
        return this.size() === 0;
    }
    clear(){
        this.table ={};
    }
    
    toString(){
        if(this.isEmpyt()){
            return '';
        }
        let valuePair = this.keyValues();
        let objStrign = `${valuePair[0].toString()}`;
        for(let i = 1; i < valuePair.length; i++){
            objStrign = `${objStrign}, ${objStrign[i].toString()}`;
        }
        return objStrign;
    }
}
///