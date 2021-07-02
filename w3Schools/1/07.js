function absoluteValuesSumMinimization(a) {
    const contas = {}
    for(let i = 0; i < a.length; i++){
        let con = [];
        for(let j = 0; j < a.length; j++){
            
            con.push(`${a[j]} - ${a[i]}`)
        }
        contas[`${a[i]}`] = con;
    }
    for(let k = 0; k < Object.keys(contas).length; k++){
        
        let arr = Object.values(contas)[k].toString().replace(/,/g, '+');
        let ar = parseInt(arr, 10)
        console.log(ar)
    }
    
    
}


const arrayWithNumbers = [2, 4, 7];

absoluteValuesSumMinimization(arrayWithNumbers);