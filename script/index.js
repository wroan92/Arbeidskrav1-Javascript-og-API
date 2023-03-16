window.onload = () => {
  if (localStorage.getItem("hideModal") !== "true") {
    document.querySelector("#modal").style.display = "block";
  }
};
if (localStorage.getItem("hideModal") === "true") {
  document.querySelector("#modal").style.display = "none";
}

const closeModalBtn = document.querySelector("#closeModalBtn");

closeModalBtn.addEventListener("click", () => {
  if (document.querySelector("#checkbox").checked) {
    localStorage.setItem("hideModal", "true");
    document.querySelector("#modal").style.display = "none";
  } else if (document.querySelector("#checkbox").checked === false) {
    localStorage.setItem("hideModal", "false");
    document.querySelector("#modal").style.display = "none";
  }
});

const openModalBtn = document.querySelector("#instructionBtn");
openModalBtn.addEventListener("click", () => {
  document.querySelector("#modal").style.display = "block";
});

let items = [];

const addBtn = document.querySelector("#addItemBtn");

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addItem();
  }
});

addBtn.addEventListener("click", () => {
  addItem();
});

addItem = () => {
  let itemType = document.querySelector("#itemType").value;
  let itemPrice = parseFloat(document.querySelector("#itemPrice").value);
  if (itemType == "") {
    alert("Du må legge til en vare og en pris."); 
}else if (itemPrice <= 0 || isNaN(itemPrice)) {
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
};

const removeBtn = document.querySelector("#removeBtn");
const confirmRemoveBtn = document.querySelector("#confirmRemove");
const cancelRemoveBtn = document.querySelector("#cancelRemove");
let itemList = document.querySelector("#itemList");


const updateList = () => {
  itemList.innerHTML = "";
  let sum = 0;
  items.forEach((item, index) => {
    sum += item.price;
    let outputTable = document.createElement("tr");
    outputTable.id = `item${index}`;
    outputTable.innerHTML = `
      <td>${item.type}</td>
      <td>${item.price},-</td>
      <td><button id="removeBtn${index}" class="removeBtn">X</button></td>
    `;
    itemList.appendChild(outputTable);
  });
  sumOutput.textContent = `Total sum: ${sum}`;
};

itemList.addEventListener("click", (e) => {
  if (e.target.classList.contains("removeBtn")) {
    const index = e.target.id.substring(9);
    document.querySelector(".confirmationModal").style.display = "block";

    const confirmRemove = () => {
      items.splice(index, 1);
      updateList();
      document.querySelector(".confirmationModal").style.display = "none";
      confirmRemoveBtn.removeEventListener("click", confirmRemove);
    };
    confirmRemoveBtn.addEventListener("click", confirmRemove);
  }
});

cancelRemoveBtn.addEventListener("click", () => {
  document.querySelector(".confirmationModal").style.display = "none";
  setTimeout(() => {
    alert("Ingen varer er fjernet fra tabellen!");
  }, 10);
});


let popup = document.querySelector("#popup");
let yesBtn = document.querySelector("#yesBtn");
let noBtn = document.querySelector("#noBtn");
const clearTableBtn = document.querySelector("#clearTableBtn");


clearTableBtn.addEventListener("click", () => {
  popup.style.display = "block";

});




