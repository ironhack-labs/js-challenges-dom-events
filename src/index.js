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

const deleteButton = exampleRow.querySelector(".btn-delete");
deleteButton.addEventListener("click", function () {
  exampleRow.remove();
});

const likeButton = exampleRow.querySelector(".btn-like");
likeButton.addEventListener("click", function () {
  likeButton.classList.toggle("selected");
});

tableBody.appendChild(exampleRow);

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

threeContacts.forEach((contact) => {
  const row = document.createElement("tr");

  row.innerHTML = ` 
    <td> 
      <img src="${contact.pictureUrl}"
    </td>
    <td>
      ${contact.name}
    </td>
    <td> 
      ${contact.popularity.toFixed(2)}
    </td>
    <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
  `;

  const deleteButton = row.querySelector(".btn-delete");
  deleteButton.addEventListener("click", function () {
    row.remove();
  });

  const likeButton = row.querySelector(".btn-like");
  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("selected");
  });

  tableBody.appendChild(row);
});

// adding click event to add random contact button

buttonAddRandom.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const splicedArr = contacts.splice(randomIndex, 1);

  // Get the element from the spliced array
  const randomContact = splicedArr[0];

  // create a new row with random contact data

  const row = document.createElement("tr");

  row.innerHTML = ` 
    <td> 
      <img src="${randomContact.pictureUrl}"
    </td>
    <td>
      ${randomContact.name}
    </td>
    <td> 
      ${randomContact.popularity.toFixed(2)}
    </td>
    <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
  `;

  const deleteButton = row.querySelector(".btn-delete");
  deleteButton.addEventListener("click", function () {
    row.remove();
  });

  const likeButton = row.querySelector(".btn-like");
  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("selected");
  });

  tableBody.appendChild(row);
});
