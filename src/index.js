// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
// const randomIndex = Math.floor(Math.random() * contacts.length);
// const splicedArr = contacts.splice(randomIndex, 1);

// ITERATION 1 - Display 3 contacts - Get the first 4 contacts from the 'contacts' array.
// ITERATION 2 - Delete Buttons
// ITERATION 3 - Like Buttons

const threeContacts = contacts.splice(0, 4);
threeContacts.forEach((contact) => {
  const aRow = document.createElement("tr");

  aRow.innerHTML = `
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

  tableBody.appendChild(aRow);

  // Delete button
  const deleteButton = aRow.querySelector(".btn-delete");
  deleteButton.addEventListener("click", () => {
    aRow.remove();
  });

  // Like button
  const likeButton = aRow.querySelector(".btn-like");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("btn-like-selected");
  });
});

// Bonus: ITERATION 4 - Add Random Contacts
const randomButton = document.getElementById("btn-add-random");
randomButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const splicedArr = contacts.splice(randomIndex, 1);
  const randomContact = splicedArr[0];
  const randomRow = document.createElement("tr");

  randomRow.innerHTML = `
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

  tableBody.appendChild(randomRow);

  // Delete button
  const deleteButton = randomRow.querySelector(".btn-delete");
  deleteButton.addEventListener("click", () => {
    randomRow.remove();
  });

  // Like button
  const likeButton = randomRow.querySelector(".btn-like");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("btn-like-selected");
  });
});
