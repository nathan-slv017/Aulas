class Deque{
    constructor(){
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    isEmpyt(){
       return this.count - this.lowestCount === 0 ? true : false
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
   addBack(element){
       this.items[this.count] = element;
       this.count ++
   }
   addFront(element){
       if(this.isEmpyt()){
           this.addBack(element);
       }else if(this.lowestCount > 0){
            this.lowestCount --
            this.items[this.lowestCount] = element
       } else {
           for( let i = this.count; i > 0; i --){
               this.items[i] = this.items[i - 1];
           }
           this.count ++
           this.lowestCount = 0
           this.items[0] = element;
       }
   }
   removeFront(){
       if(this.isEmpyt()){
           return undefined
       }
       delete this.items[this.lowestCount]
       this.lowestCount ++
   }
   removeBack(){
       if(this.isEmpyt){
           return undefined
       }
       delete this.items[this.lowestCount]
       this.count --
   }
}


const deque = new Deque();
console.log(deque.isEmpyt());
deque.addBack('John');
deque.addBack('Jack');
console.log(deque.toString());
deque.addBack('Camila');
console.log(deque.toString());
console.log(deque.size());
console.log(deque.isEmpyt());
deque.removeFront()
deque.removeFront()
console.log(deque.toString());

