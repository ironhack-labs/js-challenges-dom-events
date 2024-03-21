// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


function createNewRow(contact) {
  const newRow = document.createElement("tr");
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
  // ITERATION 2 - Delete Buttons

  // Your code goes here ...
  newRow.querySelector(".btn-delete").addEventListener("click", () => {
    newRow.remove();
  });



  // ITERATION 3 - Like Buttons

  // Your code goes here ...
  const likeButton = newRow.querySelector(".btn-like");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("selected");
  });
  tableBody.appendChild(newRow);
}

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];
createNewRow(randomContact);


// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);
// Your code goes here ...
threeContacts.forEach(currentContact => {
  createNewRow(currentContact);
})


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
buttonAddRandom.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const randomData = contacts.splice(randomIndex, 1)[0];
  if (randomData)
    createNewRow(randomData);
  else
    buttonAddRandom.disabled = true;
})