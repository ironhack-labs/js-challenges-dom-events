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
const threeContacts = contacts.splice(randomIndex, 3);
// Create a row for each contact.
threeContacts.forEach((contact) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>
      <img src="${contact.pictureUrl}" alt="${contact.name}" />
    </td>
    <td>${contact.name}</td>
    <td>${contact.popularity.toFixed(2)}</td>
    <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
  `;
  tableBody.appendChild(row);
});
// Your code goes here ...
// ITERATION 2 - Delete Buttons
const deleteButtons = document.querySelectorAll(".btn-delete");
deleteButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const row = event.target.closest("tr");
    if (row) {
      row.remove();
    }
  });
});
// Your code goes here ...
// ITERATION 3 - Like Buttons
const likeButtons = document.querySelectorAll(".btn-like");
likeButtons.forEach((likeButton) => {
  likeButton.addEventListener("click", (event) => {
    likeButton.classList.toggle("selected");
  });
});
// Bonus: ITERATION 4 - Add Random Contacts

buttonAddRandom.addEventListener("click", () => {
  const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
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
  tableBody.appendChild(newRow);
  const deleteButton = newRow.querySelector(".btn-delete");
  deleteButton.addEventListener("click", () => {
    tableBody.removeChild(newRow);
  });
  const likeButtion = newRow.querySelector(".btn-like");
  likeButtion.addEventListener("click", () => {
    likeButtion.classList.toggle("selected");
  });
});
