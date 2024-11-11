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
// Step 1: Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...
// Step 2: Iterate over each contact in the 'threeContacts' array.
threeContacts.forEach(contact => {
  
  // Step 3: Create a new row for each contact.
  const contactRow = document.createElement("tr");
  
  // Step 4: Set the inner HTML of the row with the contact's information.
  contactRow.innerHTML = `
    <td><img src="${contact.pictureUrl}" alt="${contact.name}" /></td>
    <td>${contact.name}</td>
    <td>${contact.popularity.toFixed(2)}</td>
    <td><button class="btn-delete">Delete</button></td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;

  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
  // Step 5: Get the Delete button element from the new row.
  const deleteButton = contactRow.querySelector(".btn-delete");

  // Step 6: Add an event listener to the Delete button.
  deleteButton.addEventListener("click", () => {

    // Step 7: Remove the row from the table.
    contactRow.remove();
  });

  // ITERATION 3 - Like Buttons

  // Your code goes here ...
  // Step 8: Get the Like button element from the new row.
  const likeButton = contactRow.querySelector(".btn-like");

  // Step 9: Add an event listener to the Like button.
  likeButton.addEventListener("click", () => {

    // Step 10: Toggle the 'selected' class on the row.
    likeButton.classList.toggle("selected");
  });

  // Step 11: Append the new row to the table body.
  tableBody.appendChild(contactRow);
});


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
// Step 1: Add an event listener to the Add Random Contact button
buttonAddRandom.addEventListener("click", () => {
  // Step 2: Check if there are any contacts left to add
  if (contacts.length === 0) {
    alert("No more contacts to add.");
    return;
  }

  // Step 3: Get a random contact from the contacts array and remove it from the array
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const [randomContact] = contacts.splice(randomIndex, 1);

  // Step 4: Create a new row for the random contact
  const contactRow = document.createElement("tr");
  contactRow.innerHTML = `
    <td><img src="${randomContact.pictureUrl}" alt="${randomContact.name}" /></td>
    <td>${randomContact.name}</td>
    <td>${randomContact.popularity.toFixed(2)}</td>
    <td><button class="btn-delete">Delete</button></td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;

  // Step 5: Add event listeners for the Delete and Like buttons in the new row

  // Delete button
  const deleteButton = contactRow.querySelector(".btn-delete");
  deleteButton.addEventListener("click", () => {
    contactRow.remove();
  });

  // Like button
  const likeButton = contactRow.querySelector(".btn-like");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("selected");
  });

  // Step 6: Append the new row to the table body
  tableBody.appendChild(contactRow);
});