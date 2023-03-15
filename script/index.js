const closeModalBtn = document.querySelector("#closeModalBtn");
const openModalBtn = document.querySelector("#instructionBtn");
const addBtn = document.querySelector("#addItemBtn");
const removeBtn = document.querySelector("#removeBtn");
const confirmRemoveBtn = document.querySelector("#confirmRemove");
const cancelRemoveBtn = document.querySelector("#cancelRemove");
const itemList = document.querySelector("#itemList");
const sumOutput = document.querySelector("#sumOutput");

let items = [];

const addItem = () => {
  let itemType = document.querySelector("#itemType").value;
  let itemPrice = parseFloat(document.querySelector("#itemPrice").value);
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
};

const updateList = () => {
  itemList.innerHTML = "";
  let sum = 0;
  items.map((item, index) => {
    sum += item.price;
    let outputTable = document.createElement("tr");
    outputTable.id = `item${index}`;
    outputTable.innerHTML = `
      <td>${item.type}</td>
      <td>${item.price}</td>
      <td><button id="removeBtn${index}" class="removeBtn">X</button></td>
    `;
    itemList.appendChild(outputTable);
  });

  sumOutput.innerHTML = `Total sum: ${sum}`;
};

const onConfirmRemove = (index) => {
  items.splice(index, 1);
  updateList();
  document.querySelector(".confirmationModal").style.display = "none";
};

const showConfirmationModal = (index) => {
  document.querySelector(".confirmationModal").style.display = "block";
  confirmRemoveBtn.addEventListener("click", () => onConfirmRemove(index));
};

const hideModal = () => {
  if (document.querySelector("#checkbox").checked) {
    localStorage.setItem("hideModal", "true");
    document.querySelector("#modal").style.display = "none";
  } else {
    localStorage.setItem("hideModal", "false");
    document.querySelector("#modal").style.display = "none";
  }
};

window.onload = () => {
  if (localStorage.getItem("hideModal") !== "true") {
    document.querySelector("#modal").style.display = "block";
  }
};

closeModalBtn.addEventListener("click", hideModal);

openModalBtn.addEventListener("click", () => {
  document.querySelector("#modal").style.display = "block";
});

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addItem();
  }
});

addBtn.addEventListener("click", addItem);

itemList.addEventListener("click", (e) => {
  if (e.target.classList.contains("removeBtn")) {
    const index = e.target.id.substring(9);
    showConfirmationModal(index);
  }
});

cancelRemoveBtn.addEventListener("click", () => {
  document.querySelector(".confirmationModal").style.display = "none";
  setTimeout(() => {
    alert("Ingen varer er fjernet fra tabellen!");
  }, 10);
});
