/* Valores FALSY
*false, null, NaN, undefined, '', "", ``,0
*/


/*function falaOi() {
    return 'Oi';
}

let vaiExecutar;

console.log(vaiExecutar && falaOi()); */
//console.log(0|| false || null || 'Luiz Otávio' || true);

const corUsuario = null;
const corPadrao = corUsuario || 'preto';
console.log(corPadrao);

//pegadinha
const a = 0;
const b = 'falsei';
const c = false;
const e = NaN;

console.log(a || b || c|| e);