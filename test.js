if (localStorage.getItem("hideModal") === "true") {
    document.querySelector("#modal").style.display = "none";
  }
  
  window.onload = () => {
    if (localStorage.getItem("hideModal") !== "true") {
      document.querySelector("#modal").style.display = "block";
    }
  };
  
  const closeModalBtn = document.querySelector("#closeModalBtn");
  
  closeModalBtn.addEventListener("click", () => {
    if (document.querySelector("#checkbox").checked) {
      localStorage.setItem("hideModal", "true");
      document.querySelector("#modal").style.display = "none";
    }else if(document.querySelector("#checkbox").checked === false){
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
    //   parseFloat to convert string to a number and float to let user input decimals
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
      outputTable.id = `item${index}`;
      outputTable.innerHTML = `
        <td>${item.type}</td>
        <td>${item.price}</td>
        <td><button id="removeBtn${index}" class="removeBtn">X</button></td>
      `;
      itemList.appendChild(outputTable);
    });
  
    let sumOutput = document.querySelector("#sumOutput");
    sumOutput.innerHTML = `Total sum: ${sum}`;
  };
  
  itemList.addEventListener("click", (e) => {
    if (e.target.classList.contains("removeBtn")) {
      const index = e.target.id.substring(9); // hent ut index fra id
      document.querySelector(".confirmationModal").style.display = "block";
      const onConfirmRemove = () => {
        // definer funksjonen som skal kjøres når knappen klikkes
        items.splice(index, 1);
        updateList();
        document.querySelector(".confirmationModal").style.display = "none";
        confirmRemoveBtn.removeEventListener("click", onConfirmRemove); // fjern hendelseslytteren
      };
      confirmRemoveBtn.addEventListener("click", onConfirmRemove);
    }
  });
  
  cancelRemoveBtn.addEventListener("click", () => {
    document.querySelector(".confirmationModal").style.display = "none";
    setTimeout(() => {
      alert("Ingen varer er fjernet fra tabellen!");
    }, 10);
  });