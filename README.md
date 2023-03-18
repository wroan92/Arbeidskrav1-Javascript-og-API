# Arbeidskrav 1 Javascript & API 

## About the project
The project consisted of creating a website where the user could enter an item and then enter a price and this should be added to a list.
### Some of the criteria for the project were.
- The item's price cannot be 0 or less
- The item's price cannot be anything other than a number
- The user must be able to delete an item from the list
- The user must be able to confirm the choice of and delete an item.
- The price of the goods must be added up and updated every time an item is added or removed.

## Getting Started
### Installing
1. Clone the repo:
``` 
git clone https://github.com/wroan92/Arbeidskrav1-Javascript-og-API.git
```
### Running
Navigate to your index.html and right-click the file, then press Open with Live Server. This will run the live-server and you will be able to navigate through the assignment.

## Usage
The user will receive a welcome message, in the welcome message there will be a brief description of how the user can use the site. The user will be given the choice whether to see this instruction every time the page is updated, or whether it should be hidden.
The user can always access the instructions from the main page.

The user will then have the option to add an item with a price and add this to a table. If more items are added, the sum of all items will be calculated at the bottom.

If the user wishes to delete an item, he can click on the delete button, the user will then be asked to confirm whether he is sure that the item should be deleted.

## How the code works
### Brief introduction to how the code works
In the first part of the code, a modal is opened, if the user has checked the checkbox, it will set "hideModal" to "true" and the user will not get this every time the page is updated.
```javascript
  if (document.querySelector("#checkbox").checked) {
    localStorage.setItem("hideModal", "true");
    document.querySelector("#modal").style.display = "none";
  }
```

A function called "addItem" is then created, here the input fields are checked to ensure that the user has entered valid values. If both inputs are valid it will create a object that is pushed into the array, the uppdateList function is called to update the list after the object is pushed into the array.

Furthermore, a function called "updateList" is created, this uses a forEach which means that every time something is added to the array, it will print the values in the table, store the price in a sum, and print the sum in the HTML document.

The last part deals with the removal of an item from the table. Here it looks for the class "removeBtn", and add the id to "const index"
The modal where the user must confirm the delete will then come up, if the user clicks that he wants to delete this item, the item will be deleted using splice, if the user does not want to delete, it will return to the page.

And of course, in the last bit of code I ran into one problem that I figured out after a lot of fiddling. The problem was that if I had a list with 4 items and I clicked to remove #2 but then clicked cancel it was kind of marked. So when I then clicked on number 4 and selected and deleted it, it deleted number 2 and number 4. This was because addEventListener adds an event listener to the button, but does not remove it, so then I found out that I could use removeEventListener, but felt it became easier and shorter to use onClick.
Felt the need to explain this as addEventListener is used elsewhere in the code and onClick is used here.

I have left the original solution to the code commented out in the js file.