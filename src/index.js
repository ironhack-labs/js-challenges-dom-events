// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const likeButton = (button) =>
  (button.onclick = () => button.classList.toggle("selected"));

const deleteButton = (button, row) => (button.onclick = () => row.remove());

const makeRow = (contact) => {
  const row = document.createElement("tr");
  row.innerHTML = `
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
  const btnLike = row.querySelector(".btn-like");
  const btnDelete = row.querySelector(".btn-delete");
  likeButton(btnLike);
  deleteButton(btnDelete, row);
  return row;
};

const exampleRow = makeRow(randomContact);
tableBody.appendChild(exampleRow);

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...

const threeRows = threeContacts.map((contact) => makeRow(contact));

tableBody.append(...threeRows);

// ITERATION 2 - Delete Buttons

// ITERATION 3 - Like Buttons

// Bonus: ITERATION 4 - Add Random Contacts

document.querySelector("#btn-add-random").onclick = () => {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const splicedArr = contacts.splice(randomIndex, 1);
  const randomContact = splicedArr[0];
  const row = makeRow(randomContact);
  const btnLike = row.querySelector(".btn-like");
  const btnDelete = row.querySelector(".btn-delete");
  likeButton(btnLike);
  deleteButton(btnDelete, row);
  tableBody.appendChild(row);
};
