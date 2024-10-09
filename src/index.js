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
const bodyTable = document.getElementById("contacts-table-body");
threeContacts.forEach(function (contact) {
  const row = document.createElement("tr");

  const pictureCell = document.createElement("td");
  const nameCell = document.createElement("td");
  const popularityCell = document.createElement("td");
  const favoriteCell = document.createElement("td");

  pictureCell.innerHTML = `<img src="${name.pictureUrl}" alt="${contact.name}" width="50">`;
  nameCell.textContent = contact.name;
  popularityCell.textContent = contact.popularity.toFixed(2);
  favoriteCell.textContent = contact.Favorite ? "Yes" : "No";

  row.appendChild(pictureCell);
  row.appendChild(nameCell);
  row.appendChild(popularityCell);
  row.appendChild(favoriteCell);

  tableBody.appendChild(row);

  // ITERATION 2 - Delete Buttons

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  actionCell.appendChild(deleteButton);
  actionCell.appendChild(likeButton);

  row.appendChild(pictureCell);
  row.appendChild(nameCell);
  row.appendChild(popularityCell);
  row.appendChild(oscarCell);
  row.appendChild(actionCell);
  tableBody.appendChild(row);
  deleteButton.addEventListener("click", function () {
    row.remove();

    likeButton.addEventListener("click", function () {
      row.classList.toggle("selected");
      likeButton.classList.toggle("selected"); // Toggle button's appearance
    });
    deleteButton.addEventListener("click", function () {
      row.remove();
    });
  });
});
// Your code goes here ...

// ITERATION 3 - Like Buttons

// Your code goes here ...

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
