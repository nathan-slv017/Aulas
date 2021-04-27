let numbers = [1, 4, 9];
let doubles = numbers.map(function (num){
    return num* 2
});
console.log(doubles)

let map = Array.prototype.map;
var a = map.call('hello word', function(x) {
    return x.charCodeAt(0);
});
console.log(a)

let str = '12345';
let rts = [].map.call(str, function(x) {
    return x
}).reverse().join('');
console.log(rts)


function returnInt(element){
    return parseInt(element, 10);
}
let umDoisTres = ['1', '2', '3'].map(returnInt);
console.log(umDoisTres)
// ou ['1', '2', '3'].map(Number) ;)