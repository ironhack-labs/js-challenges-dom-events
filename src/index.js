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

function createRowsForContacts(contactsArray) {
  let newArray = [];
  for (let i = 0; i < contactsArray.length; i++) {
    let contact = contactsArray[i];
    const exampleRow = document.createElement("tr");
    exampleRow.innerHTML = `
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

    newArray += tableBody.appendChild(exampleRow);
  }
  return newArray;
}
createRowsForContacts(threeContacts);

// ITERATION 2 - Delete Buttons

// Your code goes here ...

const deleteButtonsArray = tableBody.querySelectorAll(".btn-delete");

function deleteCOntact(arrayOfButtons) {
  arrayOfButtons.forEach((element) => {
    element.addEventListener("click", () => {
      element.parentNode.parentNode.remove();
    });
  });
}

deleteCOntact(deleteButtonsArray);

// ITERATION 3 - Like Buttons

// Your code goes here ...

const likeButtonsArray = tableBody.querySelectorAll(".btn-like");

function likeAContact(likeButtonsArray) {
  likeButtonsArray.forEach((element) => {
    element.addEventListener("click", () => {
      element.classList.toggle("selected");
    });
  });
}

likeAContact(likeButtonsArray);
// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

console.log("buttonAddRandomContact: ", buttonAddRandom);

function addNewRandomContact(contactsArr) {
  const randomContactIndex = Math.floor(Math.random() * contactsArr.length);

  const exampleRow = document.createElement("tr");
  exampleRow.innerHTML = `
    <td>
      <img src="${contactsArr[randomContactIndex].pictureUrl}" />
    </td>
    <td> ${contactsArr[randomContactIndex].name} </td>
    <td> ${contactsArr[randomContactIndex].popularity.toFixed(2)} </td>
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
}

buttonAddRandom.addEventListener("click", () => {
  addNewRandomContact(contacts);
});
