function orderTea(teaType){
   function confirmOreder(teaType){
        return `Order confirmed for ${teaType} tea.`;
    }
    let resultOnOrder =  confirmOreder(teaType);
    return resultOnOrder;
}
// console.log( orderTea("green") );

calculatTotal = (price, quantity) => {
    return price * quantity;
}
result = calculatTotal(50,3);
// console.log(typeof calculatTotal);

// console.log(result);
function maketea(typeOfTea){
    return `Here is your ${typeOfTea} tea. Enjoy!`;
}
function processTeaOrder(teaMakingFunction){
    let tea = teaMakingFunction("earl grey");
    return tea;
}
console.log(processTeaOrder(maketea));
