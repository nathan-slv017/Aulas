function logArrayElements(element, index){
    console.log("a[" + index + "] = " + element);
}
let abi = [2, 5, 9].forEach(logArrayElements);

function copy(o){
    var copy = Object.create( Object.getPrototypeOf(o) );
    var propNames = Object.getOwnPropertyNames(o);
  
    propNames.forEach(function(name){
      var desc = Object.getOwnPropertyDescriptor(o, name);
      Object.defineProperty(copy, name, desc);
    });
  
    return copy;
  }
let o1 = {a:1, b:2};
let o2 = copy(o1);
console.log(o2)