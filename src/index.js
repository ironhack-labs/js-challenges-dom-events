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
/*
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const row0 = document.createElement("tr");
const randomContact = splicedArr[0];
addContact(row0, randomContact);
*/

// ITERATION 1 - Display 3 contacts
const threeContacts = contacts.splice(0, 3);
const row1 = document.createElement("tr");
const row2 = document.createElement("tr");
const row3 = document.createElement("tr");
let rows = [row1, row2, row3];
threeContacts.forEach((contact, id) => addContact(rows[id], contact));

// ITERATION 2 - Delete Buttons
const del1 = row1.querySelector(".btn-delete");
const del2 = row2.querySelector(".btn-delete");
const del3 = row3.querySelector(".btn-delete");
del1.addEventListener("click", () => row1.remove());
del2.addEventListener("click", () => row2.remove());
del3.addEventListener("click", () => row3.remove());

// ITERATION 3 - Like Buttons
const like1 = row1.querySelector(".btn-like");
const like2 = row2.querySelector(".btn-like");
const like3 = row3.querySelector(".btn-like");
like1.addEventListener("click", () => like1.classList.toggle("selected"));
like2.addEventListener("click", () => like2.classList.toggle("selected"));
like3.addEventListener("click", () => like3.classList.toggle("selected"));

// Bonus: ITERATION 4 - Add Random Contacts
const random = document.querySelector("#btn-add-random");
random.addEventListener("click", () => {
  const randomID = Math.floor(Math.random() * contacts.length);
  const randomContact = contacts.splice(randomID, 1)[0];
  const randomRow = document.createElement("tr");
  addContact(randomRow, randomContact);
  const randomDel = randomRow.querySelector(".btn-delete");
  randomDel.addEventListener("click", () => randomRow.remove());
  const randomLike = randomRow.querySelector(".btn-like");
  randomLike.addEventListener("click", () =>
    randomLike.classList.toggle("selected")
  );
});
