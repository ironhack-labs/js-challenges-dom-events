// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);
// console.log(splicedArr[0]);

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
const deleteButton = exampleRow.querySelector(".btn-delete");
console.log(deleteButton);
deleteButton.addEventListener("click", rowRemover);

const likeButton = exampleRow.querySelector(".btn-like");
likeButton.addEventListener("click", handleLikeEvent);
console.log(likeButton);

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
  deleteButton.addEventListener("click", rowRemover);

  const likeButton = tableRow.querySelector(".btn-like");
  likeButton.addEventListener("click", handleLikeEvent);
});
// ITERATION 2 - Delete Buttons
function handleLikeEvent(event) {
  const button = event.currentTarget;
  button.classList.toggle("selected");
}

function rowRemover(event) {
  const tableRow = event.target.closest("tr");
  tableRow.remove();
}
// Your code goes here ...

// ITERATION 3 - Like Buttons

// Your code goes here ...
// const likeButton = document.querySelector(".btn-like");
// // console.log(likeButton);
// likeButton.addEventListener("click", handleLikeEvent);

// function handleLikeEvent() {

// }
// const buttonAddRandom = document.querySelector("#btn-add-random");

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

buttonAddRandom.addEventListener("click", addRandomContactEvent);

function addRandomContactEvent() {
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

  const likeButton = tableRow.querySelector(".btn-like");
  likeButton.addEventListener("click", handleLikeEvent);

  function handleLikeEvent(event) {
    const button = event.currentTarget;
    button.classList.toggle("selected");
  }
}
