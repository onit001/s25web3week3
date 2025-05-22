const textA = document.getElementById(("pContent"));

//now that we have the element, we can find out more about it.

//console.log(textA.id);
//console.log(textA.name);

//querySelector lets you select by any CSS Selector (anyway you style the element)
const buttons = document.querySelector(".b");

//console.log(buttons.id);

//querySelector selects only the first thing that matches the selector
//querySelectorAll selects them all

const allButtons = document.querySelectorAll(".b");

//console.log(allButtons[2].textContent);

//using querySelector, you can be very specific about what you select

const para = document.querySelector("#addAt p");
//once you have the element, you can get info about it - including its children

const spans = para.children;
//console.log(spans);
//above works


//another way to do the same thing above, using querySelectorAll
//const otherSpans = document.querySelectorAll("#addAt p span");
//console.log(spans);

//cant get above 2nd method to work :(

//add an event listener to the element that will add a list item to the end of a list

document.querySelector("#addEnd").addEventListener("click", addToEnd);

//type the function to add an elment to the end of the list 
function addToEnd(){
    //create a hew HTML list item (this element willl not be addet yet to the page)
    const newListItem = document.createElement("li");
    //get the content of the text area, and add it as text to the new list item
    newListItem.textContent = document.querySelector("#pContent").value;

    //add the new list item to the UL, with the id "adder"
    document.querySelector("#adder").appendChild(newListItem)

    //check to see if there are a certain number of children (more than 7)
    //and if there are, make them white

    if(adder.children.length > 7){
        //add a class to the element to make it white
        newListItem.classList.add("bright")
    }

    adder.appendChild(newListItem);
}

//add an event listener to the element that will remove the last list item in the list

document.querySelector("#removeFirst").addEventListener("click", removeItem);

//add an event listener to the element that will remove the last list item in the list

document.querySelector("#removeLast").addEventListener("click", removeItem);

function removeItem (){
    //get the adder element (the ul that holds the list items)
    const adder = document.querySelector("#adder");
        //also get all the children in a variable aswell, the use for later...
    const listItems = adder.children;

    //check to see which buton was actually clicked...
    //two equals makes a comparison (ask a question)
    //declare the variable cRemove, which will be chaneged inside the if statement
    let cRemove;
    if(this.id == "removeLast"){

        //set the child to remove variable to be the last child
        cRemove = listItems.length - 1;
    }else{
        cRemove = 0;
    }

    //remove the child element based on which button was clicked
    adder.removeChild(listItems[cRemove]);


    console.log(cRemove);


    /*//check the length first to make sure there is a list item to remove
    if(listItems.length > 0){
    

    // use the length of the list of children to remove the last child
    //have to do length-1 because arrays always start at 0

    const lastC = listItems.length-1;

    //tell the UL to remove the last child from list
    adder.removeChild(listItems[lastC]);
    }*/
}