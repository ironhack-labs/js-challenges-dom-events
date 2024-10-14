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
// const threeContacts = contacts.splice(0, 3);

// Your code goes here ...

const cloneContacts = structuredClone(contacts);

const threeContacts = cloneContacts.splice(0, 3);
// console.log(threeContacts);

threeContacts.forEach((contact) => {
  const contactRow = document.createElement("tr");
  contactRow.innerHTML = `
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

  // ITERATION 2 - Delete Buttons
  const deleteButton = contactRow.querySelector(".btn-delete");
  deleteButton.addEventListener("click", (algo) => {
    contactRow.remove();
  });

  // ITERATION 3 - Like Buttons
  const likeButton = contactRow.querySelector(".btn-like");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle('selected')
  });

  tableBody.appendChild(contactRow);
});


// Bonus: ITERATION 4 - Add Random Contacts
buttonAddRandom.addEventListener('click', () => {
  // Returns a random integer from 0 to 100:
  const randomNumber = Math.floor(Math.random() * contacts.length);
  const randomNewContact = contacts[randomNumber]
  const randomNewContactRow = document.createElement("tr");
  randomNewContactRow.innerHTML = `
  <td>
    <img src="${randomNewContact.pictureUrl}" />
  </td>
  <td> ${randomNewContact.name} </td>
  <td> ${randomNewContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
  `

  tableBody.appendChild(randomNewContactRow)
})

// Your code goes here ...
