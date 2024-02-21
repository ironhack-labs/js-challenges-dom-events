// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");
const deleteButtons = document.getElementsByClassName("btn-delete");
const likeButtons = document.getElementsByClassName("btn-Like");
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
threeContacts.forEach((contact) => {
  const iterationOneRow = document.createElement("tr");
  iterationOneRow.innerHTML = `
  <td>
    <img src="${contact.pictureUrl}" />
  </td>
  <td> ${contact.name} </td>
  <td> ${contact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;
  return tableBody.appendChild(iterationOneRow);
});

// Array.forEach((arrayElement => logic on array element))

// ITERATION 2 - Delete Buttons
Array.from(deleteButtons).forEach((deleteButton) => {
  deleteButton.addEventListener("click", (event) => {
    const row = event.target.closest("tr");
    if (row) {
      row.remove();
    }
  });
});

// ITERATION 3 - Like Buttons

Array.from(likeButtons).forEach((likeButtons) => {
  likeButtons.addEventListener("click", (event) => {
    event.target.classList.toggle("selected");
  });
});

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
