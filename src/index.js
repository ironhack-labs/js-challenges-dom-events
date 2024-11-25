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
for (const e of threeContacts) {
  const row = document.createElement("tr");
  row.innerHTML = `
  <td>
    <img src="${e.pictureUrl}" />
  </td>
  <td> ${e.name} </td>
  <td> ${e.popularity.toFixed(2)} </td>
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

  // Your code goes here ...
  const deleteButton = row.querySelector("button.btn-delete");
  deleteButton.addEventListener("click", () => {
    row.remove();
  });

  // ITERATION 3 - Like Buttons

  // Your code goes here ...

  const likeButton = row.querySelector('button.btn-like');
  likeButton.addEventListener('click', (event) => {
    likeButton.classList.toggle('selected');
  });

  tableBody.appendChild(row);
}

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
