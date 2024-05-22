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
// console.log(threeContacts);
// function addContactRow(oneContact) {
threeContacts.forEach((oneContact) => {
  const tableBody = document.querySelector("tbody#contacts");
  const tableRow = document.createElement("tr");
  tableRow.innerHTML = `
  <td>
  <img src="${oneContact.pictureUrl}" />
  </td>
  <td> ${oneContact.name} </td>
  <td> ${oneContact.popularity.toFixed(2)} </td>
  <td>
  <button class="btn-delete">Delete</button>
  </td>
  <td>
  <button class="btn-like">
  <img src="./images/icon.png" alt="like" />
  </button>
  </td>
  `;

  tableBody.appendChild(tableRow);

  const deleteButton = tableRow.querySelector(".btn-delete");
  console.log(deleteButton);
  deleteButton.addEventListener("click", rowRemover);
});
// ITERATION 2 - Delete Buttons

// Your code goes here ...
function rowRemover(event) {
  console.log(event.target);
  const tableRow = event.target.closest("tr");
  console.log(tableRow);
  tableRow.remove();
}

// ITERATION 3 - Like Buttons

// Your code goes here ...
const likeButton =
  // const buttonAddRandom = document.querySelector("#btn-add-random");

  // Bonus: ITERATION 4 - Add Random Contacts

  // Your code goes here ...

  buttonAddRandom.addEventListener("click", addRandomContactEvent);

function addRandomContactEvent(event) {
  // const buttonAddRandom = event.target.closest(".btn-container");
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const randomNewContact = contacts.splice(randomIndex, 1)[0];

  const tableBody = document.querySelector("tbody#contacts");
  const tableRow = document.createElement("tr");
  console.log(randomNewContact);
  tableRow.innerHTML = `
  <td>
  <img src="${randomNewContact.pictureUrl}" />
  </td>
  <td> ${randomNewContact.name} </td>
  <td> ${randomNewContact.popularity.toFixed(2)} </td>
  <td>
  <button class="btn-delete">Delete</button>
  </td>
  <td>
  <button class="btn-like">
  <img src="./images/icon.png" alt="like" />
  </button>
  </td>
  `;

  const newDeleteButton = tableRow.querySelector(".btn-delete");
  newDeleteButton.addEventListener("click", rowRemover);
  tableBody.appendChild(tableRow);
}
