class Queue{
    constructor(){
        this.count = 0;
        this.lowestCount =0;
        this.items = {};
    }
    isEmpyt(){
        return this.count - this.lowestCount === 0 ? true : false

    }
    enqueue(element){
        this.items[this.count] = element;
        this.count ++
    }
    dequeue(){
        if(this.isEmpyt()){
            return undefined
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount ++
        return result;
    }
    peek(){
        if(this.isEmpyt()){
            return undefined;
        }
        return this.items[this.lowestCount];
    }
    size(){
        return this.count - this.lowestCount;
    }
    clear(){
        this.count = 0;
        this.lowestCount = 0;
        this.items = {}
    }
    toString(){
        if(this.isEmpyt()){
            return ''
        }

        let objString = `${this.items[this.lowestCount]}`;
        for( let i = this.lowestCount + 1; i < this.count; i++){
            objString = `${objString}, ${this.items[i]}`
        }
        return objString;
    }
}

function hotPotate(elementsList, num){
    const queue = new Queue()
    const elimitatedList = []
    for(let i = 0; i < elementsList.length; i++){
        queue.enqueue(elementsList[i]);
    }
    while(queue.size() > 1){
        for(let i = 0; i < num; i ++){
            queue.enqueue(queue.dequeue());
        }
        elimitatedList.push(queue.dequeue());
    }
    return {
        eliminated: elimitatedList,
        winner: queue.dequeue()
    }
}

const names = ['Nathan', 'Paulo', 'Pedro', 'Luiz', 'Jorge']
const result = hotPotate(names, 5);

result.eliminated.forEach(name => {
    console.log(`${name} was eliminated from the hot Potate game`);
});
console.log(`the winer is: ${result.winner}`);

function palindromeChecker(aString) {
    if(aString === undefined || aString === null (aString !== null && aString.length === 0)){
        return false
    }
    const deque = new Deque();
    const lowerString = aString.toLocaleLowerCase().split(' ').join('');
    let isEqual = true;
    let firstChar, lastChar;
    for(let i = 0; i < lowerString.length; i++){
        deque.addBack(lowerString.charAt(i));
    }
    while (deque.size() > 1 && isEqual) {
        firstChar = deque.removeFront();
        lastChar = deque.removeBack();
        if(firstChar != lastChar) {
            isEqual = false
        }
    }
    return isEqual;
}