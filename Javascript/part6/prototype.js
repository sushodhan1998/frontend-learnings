let computer = {cpu: 12};
let lenovo = { screen: "HD",
    __proto__:computer,
};
let tomeHardware = {__proto__:lenovo};

// console.log('lenovo', lenovo.__proto__);
// console.log('tomeHardware', tomeHardware.__proto__);

let genericCar = {tyres: 4}
let tesla = {
    driver: "AI"
}

Object.setPrototypeOf(tesla,genericCar)
console.log('tesla', Object.getPrototypeOf(tesla) );
console.log(Object.hasOwnProperty('generic'));
