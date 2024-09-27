// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");
// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at a random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" alt="${randomContact.name}" style="width: 50px; height: 75px;" />
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
// ITERATION 1 | Display 3 Contacts

// Splice 3 element from the contacts array at a random index
const randomIndex1 = Math.floor(Math.random() * contacts.length);
const splicedArr1 = contacts.splice(randomIndex, 3);

// Get the element from the spliced array
const randomContact1 = splicedArr[0];

// Function to display contacts
function displayContacts(contactsToDisplay) {
  contactsToDisplay.forEach(contact => {
    // Create a new table row element
    const row = document.createElement("tr");

    // Populate the row with HTML structure
    row.innerHTML = `
            <td>
              <img src="${contact.pictureUrl}" alt="${contact.name}" style="width: 50px; height: 75px;" />
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

    // Append the row to the table body
    tableBody.appendChild(row);

    // Add event listener to the Delete button
    const deleteButton = row.querySelector(".btn-delete");
    deleteButton.addEventListener("click", () => {
      row.remove(); // This will remove the entire row when the delete button is clicked
    });

    // Add event listener to the Like button
    const likeButton = row.querySelector(".btn-like");
    likeButton.addEventListener("click", () => {
      likeButton.classList.toggle("selected"); // Toggle the 'selected' class on the button itself
    });

  });
}

// Display the first 3 contacts from the data.js file
displayContacts(contacts.slice(0, 3)); // Use slice() to get the first 3 contacts

// ITERATION 4 | Add Random Contacts

buttonAddRandom.addEventListener("click", () => {
  if (contacts.length > 0) {
    const randomIndex2 = Math.floor(Math.random() * contacts.length);
    const randomContact2 = contacts.splice(randomIndex2, 1)[0];
    displayContacts([randomContact2]); // Display the random contact
  } else {
    alert("No more contacts to add!");
  }
});
