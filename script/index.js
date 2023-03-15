window.onload = () => {
  document.querySelector("#modal").style.display = "block";
};

const closeModalBtn = document.querySelector("#closeModalBtn");
closeModalBtn.addEventListener("click", () => {
  if (document.querySelector("#checkbox").checked) {
    document.querySelector("#modal").style.display = "none";
  } else {
    alert("Du må huke av sjekkboksen for å lukke modalen.");
  }
});
// TODO: Legge til en "Ikke vis denne igjen" checkbox som lagrer en localstorage variabel som gjør
// at modalen ikke vises igjen

// Add and remove function
let items = [];

const addBtn = document.querySelector("#addItemBtn");
addBtn.addEventListener("click", () => {
  let itemType = document.querySelector("#itemType").value;
  //   parseFloat to convert string to a number and float to let user input decimals
  let itemPrice = parseFloat(document.querySelector("#itemPrice").value);

  // Else if to check that input values are not empty and that the price is above 0
  // If inputvalue and price is ok the item is added to the table
  if (itemType == "") {
    alert("Du må legge til en vare og en pris.");
  } else if (itemPrice <= 0) {
    document.querySelector("#itemPrice").value = "";
    alert("Prisen på varen må være over 0.");
  } else {
    let item = {
      type: itemType,
      price: itemPrice,
    };

    items.push(item);
    document.querySelector("#itemType").value = "";
    document.querySelector("#itemPrice").value = "";

    updateList();
  }
});

const removeBtn = document.querySelector("#removeBtn");
const confirmRemoveBtn = document.querySelector("#confirmRemove");
const cancelRemoveBtn = document.querySelector("#cancelRemove");
let itemList = document.querySelector("#itemList");

const updateList = () => {
  itemList.innerHTML = "";
  let sum = 0;
  items.map((item, index) => {
    sum += item.price;
    let outputTable = document.createElement("tr");
    outputTable.innerHTML = `
      <td>${item.type}</td>
      <td>${item.price}</td>
      <td><button id="removeBtn${index}" class="removeBtn">X</button></td>
    `;
    itemList.appendChild(outputTable);

    let removeItemBtn = document.querySelector(`#removeBtn${index}`);
    /*  removeItemBtn.addEventListener("click", () => {
      items.splice(index, 1);
      updateList();
    }); */
  });

  let sumOutput = document.querySelector("#sumOutput");
  sumOutput.innerHTML = `Total sum: ${sum}`;
};

// For å ta tak i id="removeBtn" uten og få feilmelding om at det ikke finnes
// har jeg brukt en eventlistener på itemList som sjekker om id="removeBtn" er trykket på
// og deretter kjører en funksjon som fjerner varen fra listen

/* itemList.addEventListener("click", (e) => {
  if (e.target.id === "removeBtn") {
  document.querySelector(".confirmationModal").style.display = "block";
  }
}); */
/*   confirmRemoveBtn.addEventListener("click", () => {
    items.splice(i, 1);
    updateList();
    document.querySelector(".confirmationModal").style.display = "none";
  }); */
/* itemList.addEventListener("click", (e) => {
  if (e.target.classList.contains("removeBtn")){
    document.querySelector(".confirmationModal").style.display = "block";
    confirmRemoveBtn.addEventListener("click", () => {
      items.splice(i, 1);
      updateList();
      document.querySelector(".confirmationModal").style.display = "none";
    });

    cancelRemoveBtn.addEventListener("click", () => {
      document.querySelector(".confirmationModal").style.display = "none";
      alert("Ingen varer ble fjernet fra listen!");
    });
  }
}); */
