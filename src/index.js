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
// Get the first 3 contacts from the array
const firstThreeContacts = contacts.splice(0, 3);

// Iterate over the array of 3 contacts and create table rows
firstThreeContacts.forEach(contact => {
  // Create a new table row
  const tableRow = document.createElement('tr');
  
  // Populate the row's content
  tableRow.innerHTML = `
    <td><img src="${contact.pictureUrl}" alt="${contact.name}" /></td>
    <td>${contact.name}</td>
    <td>${contact.popularity.toFixed(2)}</td>
    <td><button class="btn-delete">Delete</button></td>
    <td><button class="btn-like"><img src="./images/icon.png" alt="like" /></button></td>
  `;

  // Append the row to the table body
  tableBody.appendChild(tableRow);

  // Add functionality to the delete button
  tableRow.querySelector('.btn-delete').addEventListener('click', () => {
    tableRow.remove();  // Remove the row when delete is clicked
  });

  // Add functionality to the like button
  tableRow.querySelector('.btn-like').addEventListener('click', () => {
    alert(`You liked ${contact.name}!`);  // You can add more functionality here
  });
});

 
// ITERATION 2 - Delete Buttons 
// Get the first 3 contacts from the array
const firstThreeContacts = contacts.splice(0, 3);

// Iterate over the array of 3 contacts and create table rows
firstThreeContacts.forEach(contact => {
  // Create a new table row
  const tableRow = document.createElement('tr');
  
  // Populate the row's content
  tableRow.innerHTML = `
    <td><img src="${contact.pictureUrl}" alt="${contact.name}" /></td>
    <td>${contact.name}</td>
    <td>${contact.popularity.toFixed(2)}</td>
    <td><button class="btn-delete">Delete</button></td>
    <td><button class="btn-like"><img src="./images/icon.png" alt="like" /></button></td>
  `;

  // Append the row to the table body
  tableBody.appendChild(tableRow);

  // Get the Delete button from the current row
  const deleteButton = tableRow.querySelector('.btn-delete');

  // Add event listener to the Delete button
  deleteButton.addEventListener('click', () => {
    // Remove the entire row from the table when clicked
    tableRow.remove();
  });

  // Add functionality to the like button (optional, same as in Iteration 1)
  const likeButton = tableRow.querySelector('.btn-like');
  likeButton.addEventListener('click', () => {
    alert(`You liked ${contact.name}!`);
  });
});

  
// ITERATION 3 | Like Buttons

// Get the first 3 contacts from the array
const firstThreeContacts = contacts.splice(0, 3);

// Iterate over the array of 3 contacts and create table rows
firstThreeContacts.forEach(contact => {
  // Create a new table row
  const tableRow = document.createElement('tr');
  
  // Populate the row's content
  tableRow.innerHTML = `
    <td><img src="${contact.pictureUrl}" alt="${contact.name}" /></td>
    <td>${contact.name}</td>
    <td>${contact.popularity.toFixed(2)}</td>
    <td><button class="btn-delete">Delete</button></td>
    <td><button class="btn-like"><img src="./images/icon.png" alt="like" /></button></td>
  `;

  // Append the row to the table body
  tableBody.appendChild(tableRow);

  // Get the Delete button from the current row
  const deleteButton = tableRow.querySelector('.btn-delete');
  
  // Add event listener to the Delete button
  deleteButton.addEventListener('click', () => {
    tableRow.remove();  // This removes the row when the button is clicked
  });

  // Get the Like button from the current row
  const likeButton = tableRow.querySelector('.btn-like');

  // Add event listener to the Like button
  likeButton.addEventListener('click', () => {
    // Toggle the "selected" class on the entire row
    tableRow.classList.toggle('selected');
  });
});


// ITERATION 4 | Add Random Contact

// Select the Add Random Contact button from the HTML
const addRandomContactButton = document.querySelector('#add-random-contact');  // Adjust the selector as needed

// Add event listener for the "Add Random Contact" button
addRandomContactButton.addEventListener('click', () => {
  // Check if there are any contacts left to add
  if (contacts.length === 0) {
    alert('No more contacts available!');
    return;
  }

  // Get a random contact from the contacts array
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const randomContact = contacts.splice(randomIndex, 1)[0];  // Remove the random contact from the array

  // Create a new table row for the random contact
  const tableRow = document.createElement('tr');

  // Populate the row's content
  tableRow.innerHTML = `
    <td><img src="${randomContact.pictureUrl}" alt="${randomContact.name}" /></td>
    <td>${randomContact.name}</td>
    <td>${randomContact.popularity.toFixed(2)}</td>
    <td><button class="btn-delete">Delete</button></td>
    <td><button class="btn-like"><img src="./images/icon.png" alt="like" /></button></td>
  `;

  // Append the new row to the table body
  tableBody.appendChild(tableRow);

  // Add event listener to the Delete button
  const deleteButton = tableRow.querySelector('.btn-delete');
  deleteButton.addEventListener('click', () => {
    tableRow.remove();  // This removes the row when the button is clicked
  });

  // Add event listener to the Like button
  const likeButton = tableRow.querySelector('.btn-like');
  likeButton.addEventListener('click', () => {
    tableRow.classList.toggle('selected');  // Toggle the "selected" class on the row
  });
});

