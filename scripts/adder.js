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