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

// ITERATION 2 - Delete Buttons
const deleteButton = exampleRow.querySelector(".btn-delete");
deleteButton.addEventListener("click", function () {
  exampleRow.remove();
});

// ITERATION 3 - Like Buttons
const likeButton = exampleRow.querySelector(".btn-like");
likeButton.addEventListener("click", function () {
  likeButton.classList.toggle("selected");
});

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...
const threeRow = document.createElement("tr");
threeRow.innerHTML = `
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
threeContacts.forEach((contact) => {
  // Crear la fila
  const row = document.createElement("tr");

  // Rellenar la fila con la información del contacto
  row.innerHTML = `
    <td>
      <img src="${contact.pictureUrl}" alt="contact picture" />
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

  tableBody.appendChild(row);

  // ITERATION 2 - Delete Buttons
  const deleteButton = row.querySelector(".btn-delete");
  deleteButton.addEventListener("click", function () {
    row.remove();
  });

  // ITERATION 3 - Like Buttons
  const likeButton = row.querySelector(".btn-like");
  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("selected");
  });
});

// Bonus: ITERATION 4 - Add Random Contacts

const addButton = document.getElementById("btn-add-random");
addButton.addEventListener("click", function () {
  const newRandomIndex = Math.floor(Math.random() * contacts.length);
  const newSplicedArr = contacts.splice(newRandomIndex, 1);

  // Get the element from the spliced array
  const newRandomContact = newSplicedArr[0];

  // Your code goes here ...
  const newRandomRow = document.createElement("tr");
  newRandomRow.innerHTML = `
    <td>
      <img src="${newRandomContact.pictureUrl}" />
    </td>
    <td> ${newRandomContact.name} </td>
    <td> ${newRandomContact.popularity.toFixed(2)} </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;

  tableBody.appendChild(newRandomRow);

  // ITERATION 2 - Delete Buttons
  const randomDeleteButton = newRandomRow.querySelector(".btn-delete");
  randomDeleteButton.addEventListener("click", function () {
    newRandomRow.remove();
  });

  // ITERATION 3 - Like Buttons
  const randomLikeButton = newRandomRow.querySelector(".btn-like");
  randomLikeButton.addEventListener("click", function () {
    randomLikeButton.classList.toggle("selected");
  });
});
