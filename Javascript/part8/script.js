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

//example-4

document.getElementById('removeLastTask').addEventListener('click',function () {
    let taskList = document.getElementById('taskList');
    taskList.lastElementChild.remove()
})

