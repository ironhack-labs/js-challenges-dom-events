// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// Helper function to create and append a new contact row
function createContactRow(contact) {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>
      <img src="${contact.pictureUrl}" alt="${contact.name}" />
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

  // Add event listener to the delete button
  const deleteButton = newRow.querySelector(".btn-delete");
  deleteButton.addEventListener('click', () => {
    newRow.remove();
  });

  // Add event listener to the like button
  const likeButton = newRow.querySelector(".btn-like");
  likeButton.addEventListener('click', () => {
    newRow.classList.toggle('selected');
  });

  tableBody.appendChild(newRow);
}

// ITERATION 0 | Example Row
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);
const randomContact = splicedArr[0];
createContactRow(randomContact);

// ITERATION 1 - Display 3 contacts
const threeContacts = contacts.splice(0, 3);
threeContacts.forEach(contact => {
  createContactRow(contact);
});

// ITERATION 2 - Delete Buttons
tableBody.addEventListener('click', (event) => {
  if (event.target.classList.contains('btn-delete')) {
    const rowToDelete = event.target.closest('tr');
    rowToDelete.remove();
  }
});

// ITERATION 3 - Like Buttons
tableBody.addEventListener('click', (event) => {
  if (event.target.closest('.btn-like')) {
    const likeButton = event.target.closest('.btn-like');
    const rowToLike = likeButton.closest('tr');
    rowToLike.classList.toggle('selected');
  }
});

// Bonus: ITERATION 4 - Add Random Contacts
buttonAddRandom.addEventListener('click', () => {
  if (contacts.length > 0) {
    const randomIndex = Math.floor(Math.random() * contacts.length);
    const randomContact = contacts.splice(randomIndex, 1)[0];
    createContactRow(randomContact);
  } else {
    alert('No more contacts available to add!');
  }
});
