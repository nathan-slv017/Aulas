// new Object -> Object.prototyope
const objA = {
    chaveA: 'A'
    //__proto__: Object.prototyope
};

const objB = {
    chaveB: 'B'
    //__proto__: Object.prototyope
};

const objC = new Object();
objC.chaveC = 'C';

const objD = new Object();
objD.chaveD = 'D'


Object.setPrototypeOf(objB, objA); // método para setar o prototype
Object.setPrototypeOf(objC, objB);
Object.setPrototypeOf(objD, objC);
console.log(Object.keys(objD));