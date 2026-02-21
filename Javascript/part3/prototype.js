let computer = {cpu: 12};
let lenovo = {screen: "HD", __proto__: computer};
let tomHardware = {};

console.log(`computer`, computer.__proto___);
console.log(`computer`, lenovo.__proto___);

let genericCar = {typres: 4, engine: "V6"};

let tesla = {
    wheels: 4,
    color: "red"};

    console.log(`tesla `, Object.getPrototypeOf(tesla));
    