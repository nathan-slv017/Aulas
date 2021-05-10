class set {
    constructor(){
        this.items = {};
    }

    has(element){
       // return element in items;
       return Object.prototype.hasOwnProperty.call(this.items, element);
    };
}