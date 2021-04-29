//apply()

function sum( n1, n2, n3){
    console.log(n1 + n2 + n3)
}
const n1n2n3 = [2, 4, 5];

sum(...n1n2n3);
// ou
sum.apply(undefined, n1n2n3);

function rest(n1, n2, ...n){
    return (n1+n2) * n.length
};

