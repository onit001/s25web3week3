/* const textA = document.getElementById(("pContent"));

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
"
//using querySelector, you can be very specifi about what you want to select
const para = document.querySelector("#addAt p");
//once you have the element you can get the info about it - including its children
const spans = para.children;
console.log(spans);

//another way to select children
const otherSpans = document.querySelectorAll("#addAt p span"); */

//add an event listenerto the element that will add a list item to the end of the list
document.querySelector("#addEnd").addEventListener("click", addToEnd);

//type the function to ad an element to he end of the list 
function addToEnd(){
    //creat a new HTML list item(this element will no yet be added to the pag)
	const newListItem = document.createElement("li");
    //get the text from the textarea
    const textA = document.getElementById("pContent");
    //put the text from the textarea into the new list item
    newListItem.textContent = document.querySelector("#pContent").value;

    //add the new list item to the UL(WITH THE ID adder)
    const adder=document.querySelector("#adder");
    //check to see if there are certain number of children (more than 16)
    //add if there are,make the text white
    if(adder.children.length > 10){
        //add a class to the new list item to mak it white 
        newListItem.classList.add("bright");
    }
    adder.appendChild(newListItem);
}

    // add an event listener to the element that wil remove the last list item in the list 
    document.querySelector("#removeLast").addEventListener("click", removeItem);
    //add another event listenr above the function
    document.querySelector("#removeFirst").addEventListener("click", removeItem);

    //type the function to remove the last list item in the list 
    function removeItem(){
        const adder=document.querySelector("#adder");
    
        // check to see which button was clicked
        //two equals makes a comparison
        let cRemove;
        //get th lsit ofchildren to count them
        const listItems = adder.children;
       if(this.id == "removeLast"){


         //set the child to remove variable to the last child 
         cRemove = listItems[listItems.length - 1];
    
        
       }
       else{
        cRemove = listItems[0];


       }
       adder.removeChild(cRemove);
        /*//check the lenght first to make sure there is something to remove
        if(listItems.length > 0){

        //use the length of the list to remove the last item
        //have to do lenght-1 because the first item is 0
        const lastC = listItems.length - 1;
        //tell the UL to remove the last child
        adder.removeChild(listItems[lastC]);2*/
}