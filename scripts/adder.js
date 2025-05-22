// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get references to elements we'll use multiple times
    const textArea = document.querySelector("#pContent");
    const adderList = document.querySelector("#adder");
    
    // Add event listener for adding items
    document.querySelector("#addEnd").addEventListener("click", addToEnd);
    
    // Add event listeners for removing items
    document.querySelector("#removeFirst").addEventListener("click", removeItem);
    document.querySelector("#removeLast").addEventListener("click", removeItem);
    
    function addToEnd() {
        // Create a new list item
        const newListItem = document.createElement("li");
        // Get the content from the textarea
        newListItem.textContent = textArea.value;
        
        // Check if we need to make it bright
        if(adderList.children.length >= 7) {
            newListItem.classList.add("bright");
        }
        
        // Add the new item to the list
        adderList.appendChild(newListItem);
        
        // Clear the textarea
        textArea.value = '';
    }
    
    function removeItem(event) {
        const listItems = adderList.children;
        
        // Make sure we have items to remove
        if(listItems.length === 0) return;
        
        // Determine which item to remove based on which button was clicked
        const indexToRemove = (event.currentTarget.id === "removeLast") 
            ? listItems.length - 1 
            : 0;
            
        adderList.removeChild(listItems[indexToRemove]);
    }
});