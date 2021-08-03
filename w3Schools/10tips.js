// const turrle ={
//     name: 'Bob',
//     legs: 4,
//     shell: true,
//     type: 'amphibious',
//     meal: 10,
//     diet: 'berries'
// }

// function feed ({name, meal, diet}){
//     return 'feed ' + name + " " + meal + ' ' + diet
// }

// const {name, meal, diet} = turrle 

 
// console.log(feed(turrle));

// const pikachu = { name: "Pikachu" };
// const status = { hp:40, attack: 60, defense: 45 }

// const lv1 = Object.assign(pikachu, status);
// const lv2 = {...pikachu, ...status};

// console.log(lv1);
// console.log(lv2);

// const orders = [500, 30, 99, 15, 223];

// const total = orders.reduce((acc, cur) => acc + cur);

// const frases = orders.map(val => 'esse é o numero ' + val)

// const filtragem = orders.filter(val => val > 50);


// console.log(filtragem);

// const randow = () =>{
//     return Promise.resolve(Math.random());
// }


// const sumRandomAsyncNums = async() =>{

//     try{

//         const first = await randow();
//         const second = await randow();
//         const theerd = await randow();

//     } catch(e) {
//         console.log(e)
//     }

// }

function getTrasnlateMap(x) {
    const obj = {
        "a":"Stairs",
        "b":"Teetc",
        "c":"Head",
        "d":"Lies",
        "e":"Suit"
    }

    return obj[x.toLowerCase()] ?? 'x not found';
}

console.log(getTrasnlateMap('b'));