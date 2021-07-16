function sumUpNumbers(inputString) {
    return inputString.split(/[^0-9]/)
        .filter(v => v != '')
        .map(v=>parseInt(v))
        .reduce((p, c) => p + c, 0);
}
const string = 'meu 123, seu 3940, e o 4904'
sumUpNumbers(string)