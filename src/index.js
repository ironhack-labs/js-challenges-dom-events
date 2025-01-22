// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(exampleRow);



// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...

console.log(threeContacts)
threeContacts.forEach((randomContact) => {
  const exampleRow = document.createElement("tr");
  exampleRow.innerHTML = `
    <td>
      <img src="${randomContact.pictureUrl}"/>
    </td>
    <td> ${randomContact.name} </td>
    <td> ${randomContact.popularity.toFixed(2)} </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;
  tableBody.appendChild(exampleRow);
});


// ITERATION 2 - Delete Buttons

// Your code goes here ...

const deleteBtn = document.querySelectorAll(".btn-delete");

deleteBtn.forEach((button) => {
  button.addEventListener("click", (event) => {
    const rowToDelete = event.target.closest("tr");
    tableBody.removeChild(rowToDelete);
  });
});


// ITERATION 3 - Like Buttons

// Your code goes here ...

const likeBtn = document.querySelectorAll(".btn-like")

for (let btn of likeBtn) {
  btn.addEventListener("click", function () {
    btn.classList.toggle("selected");
    console.log("¡Me gusta!");
  });
}




// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

const addBtn = document.getElementById("btn-add-random");
function addRandomContact (Contacts){
const indiceRandom = Math.floor(Math.random() * Contacts.length);
  return Contacts[indiceRandom];
}

addBtn.addEventListener("click", function(){
if(contacts.length === 0){
  alert("No hay más contactos disponibles.");
    return;
}const randomContact = addRandomContact(contacts);

// Crear una nueva fila para la tabla
const newRow = document.createElement("tr");
newRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" alt="${randomContact.name}" />
  </td>
  <td>${randomContact.name}</td>
  <td>${randomContact.popularity.toFixed(2)}</td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
  <button class="btn-like">
    <img src="./images/icon.png" alt="like" />
  </button>
</td>
`;

tableBody.appendChild(newRow);
});
