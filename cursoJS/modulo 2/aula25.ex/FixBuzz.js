function fizBuzz(n) {
    if(n%3 == 0 && n%5 == 0 ) return 'FizBuzz'
    if(n%3 == 0)return 'Fiz'
    if(n%5 == 0)return 'Buzz'
}

console.log(fizBuzz('a'));