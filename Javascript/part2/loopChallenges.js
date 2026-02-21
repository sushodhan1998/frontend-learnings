// let i=5
// let countDown=[]
// while(i>0){
// countDown.push(i--);
// }
// console.log(countDown);

let teaCollection = []
let tea

do {
    tea = prompt(`Enter you favourite tea (type "stop" to finish)`)
    if(tea !== "stop")
        teaCollection.push(tea);
} while (tea !== "stop");