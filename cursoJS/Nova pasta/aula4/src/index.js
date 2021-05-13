import { nome as nomeOutro, idade as idadeOutro, soma as somaOutro , Node} from './modulo1';
import qlqNome from './modulo1';

console.log(nomeOutro, idadeOutro);
const node1 = new Node();
node1.element = 20;
node1.next = new Node();
console.log(node1);
console.log(somaOutro(10, 20));
console.log(qlqNome(10, 20))