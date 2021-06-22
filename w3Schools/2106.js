function lineUp(commands){
    let result = 0;
    let same = true;
    for(let i = 0; i < commands.length; i++){
        let command = commands[i];
        if(command == 'R' || command == 'L'){
            same = !same;
        }
        if(same) result++;
    }
    return result;
}
console.log(lineUp('LLRAL'));