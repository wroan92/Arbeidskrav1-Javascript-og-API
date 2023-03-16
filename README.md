# Arbeidskrav 1 Javascript & API 

## About the project
The project consisted of creating a website where the user could enter an item and then enter a price and this should be added to a list.
### Some of the criteria for the project were.
- The item's price cannot be 0 or less
- The item's price cannot be anything other than a number
- The user must be able to delete an item from the list
- The user must be able to confirm the choice of and delete an item.
- The price of the goods must be added up and updated every time an item is added or removed.

### 
## Getting Started
### Installing
1. Clone the repo:
``` 
git clone https://jkdlsaøkasjdølkjasølkdjaødsjksaødkajsd 
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
In the first part of the code, a modal is opened, if the user has unchecked the checkbox, it will set "hideModal" to "true" and the user will not get this every time the page is updated.
```javascript
  if (document.querySelector("#checkbox").checked) {
    localStorage.setItem("hideModal", "true");
    document.querySelector("#modal").style.display = "none";
```

A function called "addItem" is then created, here the input fields are checked to ensure that the user has entered valid values. If both inputs are valid it will create a object that is pushed into the array.

Furthermore, a function called "updateList" is created, this uses a forEach which means that every time something is added to the array, it will print the values in the table, store the price in a sum, and print the sum in the HTML document.

The last part deals with the removal of an item from the table. Here it looks for the class "removeBtn", if it finds it it will retrieve the index using substring(9) which says it wants the value that comes after the first 9 characters. When the id is then (removeBtn2), we extract the index value, which is then "2".
```Javascript  
if (e.target.classList.contains("removeBtn")) {
    const index = e.target.id.substring(9);
```
The modal where the user must confirm the delete will then come up, if the user clicks that he wants to delete this item, the item will be deleted using splice, if the user does not want to delete, it will return to the page.