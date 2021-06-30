/* co regex posso fazer busca, validações e substituições
[0] todos os zeros
[02] todos os 0 e 2
[0-9] todos de 0 até a nove
[0][0] 00 
[0]{2} duas vezes o 0 na string
[0-9]{6} todos os 6 primeiros numeros da primeira linha
[0-9]{6}$ os ultimos 6 caracteres
^[0-9]{6}$ os 6 primeiros no começo da linha
^[0-9]+[-][a-z]$
[0-9]{3}[.][0-9]{3}[.][0-9]{3}[.][-][0-9]{2}

([0-9]{4})[-]([0-9]{2})[-]([0-9]{2}) = $3/$2/$1
    g1          g2          g3

*/

// do a global search for at least one "o"
const str = 'nathan silva'
const patt = /a+/g;
const result = str.match(patt);
console.log(result);

// Do a global search for an "I", followed by zero or more "o" characters:
var str2 = "1, 100 or 1000?";
var patt1 = /10*/g;
console.log(str2.match(patt1))