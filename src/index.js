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

// Get first three contacts from contact array
const threeContacts = contacts.splice(0, 3);

function createContact (contact) {
  newRow = document.createElement("tr");
  newRow.innerHTML = `
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
  tableBody.appendChild(newRow);

  //Iteration 2: Delete contacts
  const deleteBtn = newRow.querySelector(".btn-delete");
  deleteBtn.addEventListener("click", (event) => {
    event.currentTarget.closest("tr").remove();
  });

//Iteration 3: Implement Like-button
  const likeBtn = newRow.querySelector(".btn-like");
  likeBtn.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("selected");
  });

}

threeContacts.forEach((contact) => {
  addContact(contact)
});
  



// Bonus: ITERATION 4 - Add Random Contacts
function generateContact(arr) {
  const getRandomIndex = Math.floor(Math.random() * arr.length);
  const splicedContact = arr.splice(randomIndex, 1);
  return (newContact = splicedContact[0]);
};

buttonAddRandom.addEventListener("click", () => {
  addContact(generateContact(contacts));
})

