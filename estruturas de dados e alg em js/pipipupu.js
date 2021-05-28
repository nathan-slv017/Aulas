class Set {
    constructor(){
        this.items= {};
    }
    has(element){
        return Object.prototype.hasOwnProperty.call(this.item, element);
    }

    add(element){
        if(!this.has(element)){
        return this.items[element] = element;
        }
        return false
    }
    clear(){
        return this.items = {};
    }
    delete(element){
        if(this.has(element)){
            delete this.items[element];
            return true;
        }
        return false;
    }
    size(){
        return Object.keys(this.items).length;
    }
    values(){
        return Object.values(this.items);
    }
    union(otherSet){
        const unionSet = new Set();
        this.values().forEach(value => unionSet.add(value));
        otherSet.this.values.forEach(value => unionSet.add(value));
        return unionSet;
    }
    intersection(otherSet){
        const intersection = new Set();
        const values = this.values();
        for(let i = 0; i < values.length; i++){
            if(otherSet.has(values[i])){
                intersection.add(value[i]);
            }
        }
        return intersection;
    }
    difference(otherSet){
        const difference = new Set();
        const values = this.values();
        for(let i = 0; i < values.length; i++){
            if(!otherSet.has(values[i])){
                difference.add(value[i])
            }
        }
    }
    isSubsetOf(otherSet){
        if(this.size() > otherSet.size()){
            return false;
        }
        let isSubset = true;
        this.values().every(value => {
            if(!otherSet.has(value)){
                isSubset = false;
                return false
            }
            return true;
        });
        return isSubset;
    }
}

const set1 = new Set();
const set2 = new Set();

const union = (set1, set2) =>{
    const unionAb = new Set();
    set1.forEach(values => unionAb.add(values));
    set2.forEach(values => unionAb.add(values));
    return unionAb;
}

const intersection = (set1, set2) =>{
    const intersection = new Set();
    set1.forEach(value =>{
        if(set2.has(value)){
            intersection.add(value)
        }
    });
    return intersection;
}

const difference = (set1, set2) =>{
    const difference = new Set();
    set1.forEach(value =>{
        if(!set2.has(value)){
            difference.add(value);
        }
    });
    return difference;
};
