
// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

 // DOM Elements
const tableBody = document.querySelector('#contacts');
const addRandomContactBtn = document.querySelector('#btn-add-random');

// Function to create and append a new contact row
function addContactRow(contact) {
  const newRow = document.createElement('tr');

  // Define the structure of the row with contact details
  newRow.innerHTML = `
    <td><img src="${contact.pictureUrl}" alt="${contact.name}" width="50"></td>
    <td>${contact.name}</td>
    <td>${contact.popularity.toFixed(2)}</td>
    <td><button class="btn-like">❤️</button></td>
    <td><button class="btn-delete">Delete</button></td>
  `;

  // Append the new row to the table body
  tableBody.appendChild(newRow);

  // DELETE button functionality
  const deleteBtn = newRow.querySelector('.btn-delete');
  deleteBtn.addEventListener('click', () => {
    newRow.remove(); // Remove the row from the table
  });

  // LIKE button functionality
  const likeBtn = newRow.querySelector('.btn-like');
  likeBtn.addEventListener('click', () => {
    newRow.classList.toggle('selected'); // Toggle 'selected' class on the row for like functionality
  });
}

// Function to display the first 3 contacts
function displayFirstThreeContacts() {
  // Use slice to get the first 3 contacts and map to add rows
  contacts.slice(0, 3).map(contact => addContactRow(contact));
}

// Add Random Contact functionality
function addRandomContact() {
  const remainingContacts = contacts.slice(3); // Get remaining contacts after first 3
  const randomIndex = Math.floor(Math.random() * remainingContacts.length);
  const randomContact = remainingContacts[randomIndex];
  
  // Check if the contact is already in the table
  const contactExists = Array.from(tableBody.rows).some(row => 
    row.cells[1].textContent === randomContact.name
  );

  // Add the contact only if it's not already present in the table
  if (!contactExists) {
    addContactRow(randomContact);
  }
}

// Display the first 3 contacts initially
displayFirstThreeContacts();

// Event listener for adding random contact
addRandomContactBtn.addEventListener('click', addRandomContact);




  