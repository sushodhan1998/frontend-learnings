function sayHello() {
    console.log("I would like to say a Hello");
}

console.log("Chai code");

setTimeout(() => {
    sayHello();
    }, 4000);

for (let index = 0; index < 10; index++) {
    console.log("hello from the loop"+ index);
    
    
}