//example 1 

document.getElementById('changeTextButton').addEventListener('click', function (){
    console.log(
        document.getElementById('myParagraph').textContent = "Value of the paragraph is changed");
})

//example - 2

document.getElementById('highlightFirstCity').addEventListener('click', function () {
    console.log(document
        .getElementById('citiesList')
        .firstElementChild
        .classList
        .add("highlight")
    );
});

//example-3
document.getElementById('changeOrder').addEventListener('click',function () {
   let coffeType =  document.getElementById('coffeeType')
  coffeType.textContent = "Espresso";
  coffeType.style.backgroundColor = "brown";
  coffeType.style.padding = "5px"
})

//example-4

document.getElementById('addNewItem').addEventListener('click',function(){
    let newItem =  document.createElement('li');
                           newItem.textContent = "Egg";
   document.getElementById('shoppingList')
            .appendChild(newItem);
})

//example-5

document.getElementById('removeLastTask').addEventListener('click',function () {
    let taskList = document.getElementById('taskList');
    taskList.lastElementChild.remove()
})

//example-6

document.getElementById("clickMeButton").addEventListener("mouseover",function () {
    alert("hello")
    
})
//example-7
document.getElementById("teaList").addEventListener("click", function (event) {
    if(event.target && event.target.matches('.teaItem')){
        alert("You selected: "+ event.target.textContent);
    }
})

//example-8

document.getElementById("feedbackForm").addEventListener('submit',function (event) {
    event.preventDefault();
    let feedBack = document.getElementById("feedbackInput").value;
    
    document.getElementById("feedbackDisplay").textContent = feedBack;
})

//example-9

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('domStatus').textContent ="Dom fully loaded"
})

//example-10
document.getElementById('toggleHighlight').addEventListener('click',function () {
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.toggle("highlight");
})