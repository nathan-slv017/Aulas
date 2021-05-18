const setA = new Set();
const setB = new Set();

setA.add(1);
setA.add(2);
setA.add(3);

setB.add(2);
setB.add(3);
setB.add(4);

const union = (setA, setB) =>{
    const unionAb = new Set();
    setA.forEach( value => unionAb.add(value));
    setB.forEach( value => unionAb.add(value));
    return unionAb;
}

const intersection = (setA, setB) =>{
    const intersectionSet = new Set();

    setA.forEach(value =>{
        if(setB.has(value)){
            intersectionSet.add(value);
        }
    });
    return intersectionSet;
};

const difference = (setA, setB) =>{
    const difference = new Set();

    setA.forEach(value =>{
        if(!setB.has(value)){
            difference.add(value)
        }
    });
    return difference;
}

console.log(intersection(setA, setB));
console.log(union(setA, setB));