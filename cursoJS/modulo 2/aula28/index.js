
try{
    console.log(aabb)
}catch(err){
    console.log('ocorreu um erro')
}

function soma(x, y) {
    if(typeof x !== 'number' 
    || typeof y !== 'number'
    ){
        throw new ReferenceError('x e y precisam ser números.');
    }
    return x + y;
}
try{
    console.log(soma('a', 10))
}catch(console.error();){
    console.log(error)
}