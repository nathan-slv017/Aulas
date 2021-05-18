class Set {
    constructor(){
        this.items = {};
    };
    has(element){
        return Object.prototype.hasOwnProperty.call(this.items, element);
    };
    add(element){
        if(!this.has(element)){
            this.items[element] = element;
            return true;
        }
        return false;
    };
    delete(element){
        if(this.has(element)){
            delete this.items[element];
            return true;
        };
        return false;
    };
    clear(){
        this.items = {};
    };
    size(){
        return Object.keys(this.items).length;
    };
    sizeLegacy(){
        let count = 0;
        for(let key in this.items){
            if(this.items.hasOwnProperty(key)){
                count ++;
            }
        }
        return count;
    };

    values(){
        return Object.values(this.items);
    };

    union(otherSet){
        const unionSet = new Set();
        this.values().forEach( value => unionSet.add(value));
        otherSet.values().forEach(value => unionSet.add(value));
        return unionSet;
    }

    unionOld(otherSet){
        const unionSet = new Set();
        let values = this.values();

        for(let i = 0; i < values.length; i++){
            unionSet.add(values[i]);
        }

        values = otherSet.values();
        for(let i = 0; i < values.length; i++){
            unionSet.add(values[i]);
        }
        return unionSet;
    }

    intersection(otherSet){
        const intersection = new Set();
        const values = this.values();

        for(let i = 0; i < values.length; i++){
            if(otherSet.has(values[i])){
                intersection.add(values[i]);
            }
        }
        return intersection;
    }

    difference(otherSet){
        const differenceSet = new Set();
        this.values().forEach(values =>{
            if(!otherSet.has(values)){
                differenceSet.add(value);
            }
            return true;
        });
        return differenceSet;
    }
    isSubsetOf(otherSet){
        if(this.size() < otherSet.size()){
            return false;
        }
        let isSubset = true;

        this.values().every(value =>{
            if(!otherSet.has(value)){
                isSubset = false;
                return isSubset
            }
            return true;
        });
        return isSubset;
    }

}

const setA = new Set();
setA.add(1);
setA.add(2);
const setB = new Set();
setB.add(1);
setB.add(2);
setB.add(3);

const setC = new Set();
setC.add(2);
setC.add(3);
setC.add(4);

console.log(setA.isSubsetOf(setB));
console.log(setA.isSubsetOf(setC));


