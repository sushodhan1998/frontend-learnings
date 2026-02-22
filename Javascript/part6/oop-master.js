let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    start: function() {
         return `${this.make} ${this.model} is starting in ${this.year}`;
    }
}

// console.log(car.start());

function Animal(type) {
    this.type = type;
}

Animal.prototype.sound = function() {
    return `${this.type} makes a sound`;
}

Array.prototype.sush = function () {
    return `Custom method ${this}`;
}

let myArray = [1,2,3];
// console.log(myArray.sush());
let myNewArray = [1,2,3,4,5,6,7,8];
// console.log(myNewArray.sush());


class Vehicle {
    constructor(make,model){
        this.make = make;
        this.model = model;
    }

    start(){
        return `${this.model} is a car from ${this.make}`;
    }
}

class Car extends Vehicle {
    drive(){
        return `${this.make}: This is an inheritence example`;
    }

}

let myCar = new Car("Toyotal","Corola");
// console.log(myCar.drive());


let VeHOne = new Vehicle("Toyotal", "Corola");

class BankAccount {
    #balance = 0;
    deposite(amount){
        this.#balance += amount;
        return this.#balance;
    }

    getBalance(){
        return `$ ${this.#balance}`
    }
}

let myBankAccount = new BankAccount();
// console.log(myBankAccount.getBalance());

//Abstraction

class CoffeMachine{
    start(){
        return `Starting the machine..`
    }

    brewCoffee(){
        return `brewing the coffee`;
    }

    startAndBrew(){
        let mes1 = this.start();
        let mes2 = this.brewCoffee();
        return `${mes1} + ${mes2}`;
    }
}

let myMachine = new CoffeMachine();
// console.log(myMachine.startAndBrew());

class Bird {
    fly(){
        return `Flying...`
    }
}

class Penguin extends Bird{
    fly(){
        return `Penguins can't fly....`
    }
}

let myBird = new Bird();
let nyPenguin = new Penguin();

// console.log(myBird.fly());
// console.log(nyPenguin.fly());

// static method

class Employee{

    #salary;

    constructor(name,salary){
        this.name= name;
        if(salary<0){
            throw new Error("Less than o is not possible");
        }
        this.#salary = salary;
    }

    get salary(){
        return `You cannot access the salary outside of this class`
    }

    set salary(value){
        if(value<0)
            console.error("Invalid Salary");
        else
            this.#salary=value;
    }

}

let newEmployee = new Employee("Alice",50000);
console.log(newEmployee._salary);
newEmployee.salary=-6000
console.log(newEmployee.salary);


