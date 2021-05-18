class Room {
    constructor(length, width){
        Object.defineProperty(this, 'length', {value: length});
        Object.defineProperty(this, 'width', {value: width});
    }
}

let room = new Room(20, 10);
room.length = 1000;
console.log(room.length);

class Pop{
    constructor(length, width){
        Object.defineProperty(this, 'length', {value: length});
        Object.defineProperty(this, 'width', {value: width});
    }
}

let poop = new Pop(20, 10);
poop.length = 2000;
console.log(poop.length)