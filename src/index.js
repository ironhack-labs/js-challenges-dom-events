// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.

function createNewContactRow(randomContact) {
  const row = document.createElement("tr");
  row.innerHTML = `
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

  // ITERATION 2 - Delete Buttons
  const deleteRowButton = row.querySelector(".btn-delete");
  deleteRowButton.addEventListener("click", () => {
    row.remove();
  });
  // ITERATION 3 - Like Buttons
  const likeButton = row.querySelector(".btn-like");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("selected");
  });
  return row;
}
const threeContacts = contacts.splice(0, 3);
threeContacts.forEach((contact) => {
  const newRow = createNewContactRow(contact);
  tableBody.appendChild(newRow);
});

// Bonus: ITERATION 4 - Add Random Contacts
const addRandomContact = document.querySelector("#btn-add-random");
addRandomContact.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random()) * contacts.length;
  const randomContact = contacts.splice(randomIndex, 1)[0];
  const newRow = createNewContactRow(randomContact);
  tableBody.appendChild(newRow);
});
