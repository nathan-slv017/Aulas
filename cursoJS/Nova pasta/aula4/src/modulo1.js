/*const nome = 'nathan'
const idade = '19';
function soma(x, y){
    return x, y
}

export { nome, idade, soma };
*/

export const nome = 'nathan';
export const idade = '19';
export function soma(x, y){
    return x + y
}

export class Node{
    constructor(){
        this.element
        this.next 
    }
}

export default function mult(x, y){
    return x * y
}
// export default (y, x) => x * y;
// export { nome as default, idade, soma}