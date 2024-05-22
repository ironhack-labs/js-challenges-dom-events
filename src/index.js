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

// Your code goes here ...

const index = Math.floor(Math.random() * contacts.length);
let ThreeContacts = contacts.splice(0, 3);

ThreeContacts.forEach((contact) => {
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
  tableBody.appendChild(row);
});

// ITERATION 2- DELETE Buttons
// Your code goes here ...

document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.querySelector("#contacts");
  tableBody.addEventListener("click", function (event) {
    if (event.target.classList.contains("btn-delete")) {
      event.target.closest("tr").remove();
    }
  });
});

// ITERATION 3 - Like Buttons

// Your code goes here ...
document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.querySelector("#contacts");
  tableBody.addEventListener("click", function (event) {
    if (event.target.classList.contains("btn-like")) {
      const buttonElement = event.target;
      const row = buttonElement.closest("tr");
      row.classList.toggle("liked");
      if (row.classList.contains("Liked")) {
        buttonElement.textContent = "Unlike";
      } else {
        buttonElement.textContent = "Like";
      }
    }
  });
});

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
