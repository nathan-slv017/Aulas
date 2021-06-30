function aa(palavra) {
    function cadaUm(el, ie){
        return el = ie
    }
    const alphabetic = {
        "a": "b", "b": "c", "c": "d", "d": "e", "e": "f", "f": "g","g": "h", "h": "i", "i": "j", "j": "k", "k": "l", "l": "m", "m": "n","n": "o", "o": "p", "p": "q", "q": "r", "r": "s", "s": "t","t": "u", "u": "v","v": "w", "w": "x", "x": "y", "y": "z", "z": "a"
    } // objeto com +1 letra 

    const papa1 = palavra.split("")
    const maisUm = papa1.map(el => cadaUm(el, alphabetic[`${el}`]));
    console.log(maisUm.join(""))
}
aa('crazy');
