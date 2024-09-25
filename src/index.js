// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

function createContactRow(contact) {
  if (!contact) return;
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>
      <img src="${contact.pictureUrl}" alt="${contact.name}'s picture" />
    </td>
    <td>${contact.name}</td>
    <td>${contact.popularity.toFixed(2)}</td>
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

  // Attach event listeners for delete and like buttons
  attachRowEventListeners(row);
}

// Helper function to attach event listeners to delete and like buttons
function attachRowEventListeners(row) {
  const deleteButton = row.querySelector(".btn-delete");
  deleteButton.addEventListener("click", () => {
    row.remove();
  });

  const likeButton = row.querySelector(".btn-like");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("selected");
  });
}

// Function to get and remove a random contact from the contacts array
function getRandomContact() {
  if (contacts.length === 0) return null; // Handle empty contacts array
  const randomIndex = Math.floor(Math.random() * contacts.length);
  return contacts.splice(randomIndex, 1)[0]; // Return the contact object
}

// Display initial contacts (first 3)
function displayInitialContacts() {
  const initialThreeContacts = contacts.splice(0, 3);
  initialThreeContacts.forEach((contact) => createContactRow(contact));
}

// Event listener for adding a random contact on button click
buttonAddRandom.addEventListener("click", () => {
  const randomContact = getRandomContact();
  if (randomContact) {
    createContactRow(randomContact);
  } else {
    console.warn("No more contacts to add!");
  }
});

// Initial call to display the first 3 contacts
displayInitialContacts();
