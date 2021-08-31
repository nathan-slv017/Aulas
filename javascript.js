const myObject = {
    web: 'Javascript',
    app: 'Android'
}

const keys = Object.keys(myObject)
const values = Object.values(myObject)
const entries = Object.entries(myObject)

console.log(keys, values, entries)

const alpha = ['A', 'B', 'C'];

// Old way
const cloneAlpha = alpha.slice();
// ES6 way
const es6CloneAlpha = [...alpha]