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

threeContacts.forEach(contact => {

  const row = document.createElement("tr");

  // Picture cell
  const pictureCell = document.createElement("td");
  const img = document.createElement("img");
  img.src = contact.pictureUrl;
  img.alt = `${contact.name}'s picture`;
  img.style.width = "50px"; // Optional styling for image size
  pictureCell.appendChild(img);

  // Name cell
  const nameCell = document.createElement("td");
  nameCell.textContent = contact.name;

  // Popularity cell
  const popularityCell = document.createElement("td");
  popularityCell.textContent = contact.popularity.toFixed(2); // Format popularity to 2 decimals

  // Action cell for Delete and Like buttons
  const actionCell = document.createElement("td");

  // Delete Button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "btn-delete"; // Class for styling
  actionCell.appendChild(deleteButton);

  // Like Button (Heart Icon)
  const favoriteButton = document.createElement("button");
  favoriteButton.innerHTML = "&#9825;"; // Unicode for heart symbol
  favoriteButton.className = "btn-like"; // Class for styling
  actionCell.appendChild(favoriteButton);

  // Append all cells to the row
  row.appendChild(pictureCell);
  row.appendChild(nameCell);
  row.appendChild(popularityCell);
  row.appendChild(actionCell);

  // Append the row to the table body
  tableBody.appendChild(row);
});

// Bonus: ITERATION 4 - Add Random Contacts
buttonAddRandom.addEventListener('click', function () {
  // Splice 1 element from the contacts array at the random index
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const splicedArr = contacts.splice(randomIndex, 1);

  const randomContact = splicedArr[0];

  const row = document.createElement("tr");

  // Picture cell
  const pictureCell = document.createElement("td");
  const img = document.createElement("img");
  img.src = randomContact.pictureUrl;
  img.alt = `${randomContact.name}'s picture`;
  img.style.width = "50px"; // Optional styling for image size
  pictureCell.appendChild(img);

  // Name cell
  const nameCell = document.createElement("td");
  nameCell.textContent = randomContact.name;

  // Popularity cell
  const popularityCell = document.createElement("td");
  popularityCell.textContent = randomContact.popularity.toFixed(2);

  // Action cell for Delete and Like buttons
  const actionCell = document.createElement("td");

  // Delete Button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "btn-delete";
  actionCell.appendChild(deleteButton);

  // Like Button
  const favoriteButton = document.createElement("button");
  favoriteButton.innerHTML = "&#9825;";

  favoriteButton.className = "btn-like";
  actionCell.appendChild(favoriteButton);

  // Append all cells to the row
  row.appendChild(pictureCell);
  row.appendChild(nameCell);
  row.appendChild(popularityCell);
  row.appendChild(actionCell);

  // Append the row to the table body
  tableBody.appendChild(row);
});
