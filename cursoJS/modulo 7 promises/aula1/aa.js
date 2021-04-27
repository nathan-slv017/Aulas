function init(){
    let name = "mozilla";
    function displayName(){
       // alert(name);
    }
    displayName();
}
init()

function makeFunc(){
    let name = "Mozilla";
    function displayName(){
      //  alert(name);
    }
    return displayName;
}
let myfunc = makeFunc();
myfunc();



function makeAdder(x){
    return function(y){
        return x + y;
    };
}

let add5 = makeAdder(5);
let add10 = makeAdder(10);

console.log(add10(10));


function makeSize(size){
    return function(){
        document.body.style.fontSize = size + 'px';
    };
}

let size12 = makeSize(12);
let size16 = makeSize(16);