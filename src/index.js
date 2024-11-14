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
// Get the first 3 contacts from the 'contacts' array.

function displayContacts(contactsArray) {
  for (let i = 0; i < contactsArray.length; i++) {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
    <td>
      <img src="${contactsArray[i].pictureUrl}" />
    </td>
    <td> ${contactsArray[i].name} </td>
    <td> ${contactsArray[i].popularity.toFixed(2)} </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;

    // selecting the delete button:
    const buttonDelete = newRow.querySelector(".btn-delete");

    // Adding eventListerner to delete the row when click delete button
    buttonDelete.addEventListener("click", function () {
      newRow.remove();
    });

    addLikeFunctionality(newRow);

    tableBody.appendChild(newRow);
  }
}
displayContacts(threeContacts);

// ITERATION 2 - Delete Buttons

function addDeleteFunctionality(row) {
  // selecting the delete button:
  const buttonDelete = newRow.querySelector(".btn-delete");
  // Adding eventListerner to delete the row when click delete button
  buttonDelete.addEventListener("click", function () {
    row.remove();
  });
}

// ITERATION 3 - Like Buttons

function addLikeFunctionality(row) {
  const buttonLike = row.querySelector(".btn-like");
  buttonLike.addEventListener("click", function () {
    buttonLike.classList.toggle("selected");
  });
}

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
