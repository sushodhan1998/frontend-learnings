function Person(name, age){
    this.name = name;
    this.age = age;
}

function Car(make, modle){
    this.make = make;
    this.model = modle;
}

let myCar = new Car("Toyota", "Camry")
console.log(myCar);

let newCar = new Car("Tata","Safari")
console.log(newCar);


function Tea(type){
    this.type = type;
    this.describe = function(){
        return `this is a cup of ${this.type}`;
    };
}
let lemonTea = new Tea('lemon tea')
console.log(lemonTea.describe());

function Animal(species){
    this.species = species;
}
Animal.prototype.sound = function () {
    return `${this.species} makes a sound`
}

let dog = new Animal('dog');

// console.log(dog.sound());

function Drink(name) {

    if(!new.target)
        throw new Error("Drink must be called with new keyword")
    this.name = name;
    
}

let tea = new Drink("tea");

