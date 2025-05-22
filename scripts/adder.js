const textA = document.getElementById(("pContent"));

//now that we have the element, we can find out more about it.

console.log(textA.id);
console.log(textA.name);

//querySelector lets you select by any CSS Selector (anyway you style the element)
const buttons = document.querySelector(".b");

console.log(buttons.id);

//querySelector selects only the first thing that matches the selector
//querySelectorAll selects them all

const allButtons = document.querySelectorAll(".b");

console.log(allButtons[2].style);

//using querySelector, you can be very specifi about what you want to select
const para = document.querySelector("#addAt p");
//once you have the element you can get the info about it - including its children
const spans = para.children;
console.log(spans);

//another way to select children
const otherSpans = document.querySelectorAll("#addAt p span");

//add an event listener to the element that will add a new list item to the end of the list
document.querySelector("#addEnd").addEventListener("click", addToEnd);

//type the function to add an element to the end of the list
function addToEnd(){
    //create a new html list item (this element will not be added to the page yet)
    const newListItem = document.createElement("li");

    //get the text from the textarea
    newListItem.textContent = document.querySelector("#pContent").value;

    //add the list item to the end of the list
    document.querySelector("#adder").appendChild(newListItem);

    //check to see if there are a certian number of children (more than 7);
    //and if so, make them white
    if(document.querySelector("#adder").children.length > 7){
        document.querySelector("#addEnd").style.color = "white";
    }

}