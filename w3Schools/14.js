function lineEncoding(s) {
  let letter = "";
  let newString = "";
  for (let i = 0; i < s.length; i++) {
    if (letter != s.charAt(i)) {
      newString = newString.concat(reclusive(s.charAt(i), i, 1));
      letter = s.charAt(i);
    }
  }

  function reclusive(letter, index, times) {
    if (letter === s.charAt(index + 1)) {
      return reclusive(letter, index + 1, times + 1);
    }
    if (times === 1) return letter;
    return `${times}${letter}`;
  }
  console.log(newString);
}

const string = "ssiiggkooo";
lineEncoding(string);
