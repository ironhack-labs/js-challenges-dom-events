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

// ITERATION 1 - Display 3 Contacts
// Get the first 3 contacts from the 'contacts' array without modifying the original array.
const firstThreeContacts = contacts.slice(0, 3);

// Iterate over the first 3 contacts and create table rows
firstThreeContacts.forEach((contact) => {
  // Create a new table row
  const newRow = document.createElement("tr");

  // Populate the row with contact information
  newRow.innerHTML = `
        <td>${contact.name}</td>
        <td>${contact.email}</td>
        <td>${contact.phoneNumber}</td>
    `;

  // Append the new row to the table body
  document.getElementById("contactTableBody").appendChild(newRow);
});

// ITERATION 2 - Delete Buttons
document.addEventListener("DOMContentLoaded", function () {
  // Get the table body element
  const tableBody = document.getElementById("contactTableBody");

  // Iterate over each contact
  contacts.forEach((contact) => {
    // Create a new table row
    const newRow = document.createElement("tr");

    // Populate the row with contact information
    newRow.innerHTML = `
          <td>${contact.name}</td>
          <td>${contact.email}</td>
          <td>${contact.phoneNumber}</td>
          <td><button class="delete-btn">Delete</button></td>
      `;

    // Append the new row to the table body
    tableBody.appendChild(newRow);

    // Add event listener to delete button
    const deleteButton = newRow.querySelector(".delete-btn");
    deleteButton.addEventListener("click", function () {
      // Remove the row when delete button is clicked
      tableBody.removeChild(newRow);
    });
  });
});

// ITERATION 3 - Like Buttons

// ITERATION 3 - Like Buttons
document.addEventListener("DOMContentLoaded", function () {
  // Get the table body element
  const tableBody = document.getElementById("contactTableBody");

  // Iterate over each contact
  contacts.forEach((contact) => {
    // Create a new table row
    const newRow = document.createElement("tr");

    // Populate the row with contact information
    newRow.innerHTML = `
          <td>${contact.name}</td>
          <td>${contact.email}</td>
          <td>${contact.phoneNumber}</td>
          <td>
              <button class="delete-btn">Delete</button>
              <button class="like-btn">Like</button>
          </td>
      `;

    // Append the new row to the table body
    tableBody.appendChild(newRow);

    // Add event listener to delete button
    const deleteButton = newRow.querySelector(".delete-btn");
    deleteButton.addEventListener("click", function () {
      // Remove the row when delete button is clicked
      tableBody.removeChild(newRow);
    });

    // Add event listener to like button
    const likeButton = newRow.querySelector(".like-btn");
    let isLiked = false; // Flag to track if contact is liked
    likeButton.addEventListener("click", function () {
      // Toggle like status and update button appearance
      isLiked = !isLiked;
      likeButton.textContent = isLiked ? "Unlike" : "Like";
      // You can add additional functionality here, such as changing button color or icon
    });
  });
});

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
