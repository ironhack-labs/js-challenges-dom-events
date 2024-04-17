// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const rowNode = document.createElement("tr");
rowNode.innerHTML = `
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

tableBody.appendChild(rowNode);
const deleteBtnNode = rowNode.querySelector(".btn-delete");
deleteBtnNode.addEventListener("click", () => {
  deleteBtnNode.remove();
});

const likeBtnNode = rowNode.querySelector(".btn-like");
  likeBtnNode.addEventListener("click", () => {
    likeBtnNode.classList.toggle("selected");
});


// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);
console.log(threeContacts);

const eachRow = threeContacts.forEach((eachContact) => {
  //para cada elemento añadimos un tr, es decir, una fila
  const rowNode = document.createElement("tr");
  //dentro de cada fila, añadimos un contacto:
  rowNode.innerHTML = `<td>
    <img src="${eachContact.pictureUrl}" />
  </td>
  <td> ${eachContact.name} </td>
  <td> ${eachContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
  `;
  tableBody.appendChild(rowNode);

  // ITERATION 2 - Delete Buttons
  const deleteBtnNode = rowNode.querySelector(".btn-delete");
  deleteBtnNode.addEventListener("click", () => {
    deleteBtnNode.remove();
  });

  // ITERATION 3 - Like Buttons
  const likeBtnNode = rowNode.querySelector(".btn-like");
  likeBtnNode.addEventListener("click", () => {
    likeBtnNode.classList.toggle("selected");
  });
});

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
