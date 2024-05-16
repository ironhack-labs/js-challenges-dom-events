// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// helper function addContact()
function addContact(row, contact) {
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
  </td>\n`;
  tableBody.appendChild(row);
}

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const row0 = document.createElement("tr");
const randomContact = splicedArr[0];
addContact(row0, randomContact);

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...
const row1 = document.createElement("tr");
const row2 = document.createElement("tr");
const row3 = document.createElement("tr");
let rows = [row1, row2, row3];
threeContacts.forEach((contact, id) => addContact(rows[id], contact));
console.log(rows);

// ITERATION 2 - Delete Buttons

// Your code goes here ...
let deleteButtons = [];
rows.forEach((row) => deleteButtons.push(row.querySelector("btn-delete")));
console.log(deleteButtons);
deleteButtons[0].addEventListener("click", () => {
  console.log("buttom 0");
});

// ITERATION 3 - Like Buttons

// Your code goes here ...

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
