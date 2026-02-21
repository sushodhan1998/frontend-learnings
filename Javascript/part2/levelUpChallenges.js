let teaCollection = ["green teasssss", "black tea","chai", "oolong teassss"];
let selectedTea = [];
// for(val in teaCollection){
//     if(teaCollection[val] === "chai")
//         break;
//     selectedTea.push(teaCollection[val])
    
// }
// console.log(selectedTea);


// teaCollection.forEach(element => {
//     if(element === "chai")
//         return;
//     selectedTea.push(element);
// });
// console.log(selectedTea);

// function hello(tea){
//     console.log("this is a hello from Sushodhan");
    
// }

for (const tea of teaCollection) {
    if(tea.length > 10)
        break;
    selectedTea.push(tea);
}
console.log(selectedTea);
