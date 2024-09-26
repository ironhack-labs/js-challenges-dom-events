// // HTML ELEMENTS
// const buttonAddRandom = document.querySelector("#btn-add-random");
// const tableBody = document.querySelector("tbody#contacts");

// function createContactRow(contact) {
//   if (!contact) return;
//   const row = document.createElement("tr");
//   row.innerHTML = `
//     <td>
//       <img src="${contact.pictureUrl}" alt="${contact.name}'s picture" />
//     </td>
//     <td>${contact.name}</td>
//     <td>${contact.popularity.toFixed(2)}</td>
//     <td>
//       <button class="btn-delete">Delete</button>
//     </td>
//     <td>
//       <button class="btn-like">
//         <img src="./images/icon.png" alt="like" />
//       </button>
//     </td>
//   `;
//   tableBody.appendChild(row);

//   // Attach event listeners for delete and like buttons
//   attachRowEventListeners(row);
// }

// // Helper function to attach event listeners to delete and like buttons
// function attachRowEventListeners(row) {
//   const deleteButton = row.querySelector(".btn-delete");
//   deleteButton.addEventListener("click", () => {
//     row.remove();
//   });

//   const likeButton = row.querySelector(".btn-like");
//   likeButton.addEventListener("click", () => {
//     likeButton.classList.toggle("selected");
//   });
// }

// // Function to get and remove a random contact from the contacts array
// function getRandomContact() {
//   if (contacts.length === 0) return null; // Handle empty contacts array
//   const randomIndex = Math.floor(Math.random() * contacts.length);
//   return contacts.splice(randomIndex, 1)[0]; // Return the contact object
// }

// // Display initial contacts (first 3)
// function displayInitialContacts() {
//   const initialThreeContacts = contacts.splice(0, 3);
//   initialThreeContacts.forEach((contact) => createContactRow(contact));
// }

// // Event listener for adding a random contact on button click
// buttonAddRandom.addEventListener("click", () => {
//   const randomContact = getRandomContact();
//   if (randomContact) {
//     createContactRow(randomContact);
//   } else {
//     console.warn("No more contacts to add!");
//   }
// });

// // Initial call to display the first 3 contacts
// displayInitialContacts();

class ContactManager {
  constructor(contacts) {
    this.contacts = contacts; // Array of contacts
    this.tableBody = document.querySelector("tbody#contacts");
    this.buttonAddRandom = document.querySelector("#btn-add-random");

    // Initialize the app
    this.init();
  }

  // Initialize the contact manager
  init() {
    this.displayInitialContacts(); // Show the first 3 contacts initially
    this.buttonAddRandom.addEventListener("click", () =>
      this.addRandomContact()
    );
  }

  // Display the first 3 contacts
  displayInitialContacts() {
    const initialThreeContacts = this.contacts.splice(0, 3);
    initialThreeContacts.forEach((contact) => this.createContactRow(contact));
  }

  // Create a row for the contact and append to the table
  createContactRow(contact) {
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
    this.tableBody.appendChild(row);
    this.attachRowEventListeners(row);
  }

  // Attach event listeners for delete and like buttons
  attachRowEventListeners(row) {
    const deleteButton = row.querySelector(".btn-delete");
    deleteButton.addEventListener("click", () => row.remove());

    const likeButton = row.querySelector(".btn-like");
    likeButton.addEventListener("click", () =>
      likeButton.classList.toggle("selected")
    );
  }

  // Add a random contact to the table
  addRandomContact() {
    const randomContact = this.getRandomContact();
    if (randomContact) {
      this.createContactRow(randomContact);
    } else {
      console.warn("No more contacts to add!");
    }
  }

  // Get and remove a random contact from the contacts array
  getRandomContact() {
    if (this.contacts.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * this.contacts.length);
    return this.contacts.splice(randomIndex, 1)[0];
  }
}

// Instantiate the ContactManager class
const contactManager = new ContactManager(contacts);
