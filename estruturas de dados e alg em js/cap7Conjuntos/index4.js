const setA = new Set();
const setB = new Set();

setA.add(1);
setA.add(2);
setA.add(3);

setB.add(2);
setB.add(3);
setB.add(4);

console.log(new Set([...setA, ...setB]));
console.log(new Set([...setA].filter(x => setB.has(x))));
console.log(new Set([...setA].filter(x => !setB.has(x))));