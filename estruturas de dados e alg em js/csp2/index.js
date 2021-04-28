let movie = 'Lord of the Rings'


function startWarsFan(){
    const movie = 'Star War';
    return movie
}
function marvelFan(){
    movie = 'The avengers';
    return movie
}

function blizzardFan(){
    const isFan = true
    let phase = 'Warcraft';
    console.log('Before if ' + phase);

    if(isFan){
        let phase = 'initial text';
        phase = 'For the Holde !'
        console.log('inside if: ' + phase);
    }
}

console.log(movie)
console.log(startWarsFan());
console.log(marvelFan());
console.log(movie);
blizzardFan();