let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
numbers.reverse();
numbers.sort()

function compare(a, b){
    if(a < b){
        return -1;
    }
    if(a > b){
        return 1
    }
    return 0
}
console.log(numbers)

numbers.sort(compare);
console.log(numbers);

let friends = [
    {nome:'Nathan', idade: 19 },
    {nome:'Zé Maria', idade: 49 },
    {nome:'Dora' , idade: 40 },
    {nome:'Pâmela' , idade: 24 },
    {nome:'Willian' , idade: 24 },
    {nome:'Jorge' , idade: 14}
]

function ordemPorIdade(a, b){
    if(a.idade < b.idade){
        return 1;
    }
    if(a.idade > b.idade){
        return -1;
    }
    return 0;
}

friends.sort(ordemPorIdade);
console.log(friends);

let numbers = [1, 2, 3, 4, 5, 6, 7, 'Nathan']
console.log(numbers.indexOf('Nathan'));