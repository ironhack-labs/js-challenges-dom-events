// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// Helper functions
const generateRow = (contact) => {
  return `
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
};

const addContact = (contact) => {
  const row = document.createElement("tr");
  row.innerHTML = generateRow(contact);
  tableBody.appendChild(row);

  // ITERATION 2 - Delete Buttons
  row
    .querySelector(".btn-delete")
    .addEventListener("click", () => row.remove());

  // ITERATION 3 - Like Buttons
  const btnLike = row.querySelector(".btn-like");
  btnLike.addEventListener("click", () => btnLike.classList.toggle("selected"));
};

const addRandomContact = () => {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  addContact(contacts.splice(randomIndex, 1)[0]);
};

// ITERATION 0 | Example Row
addRandomContact();

// ITERATION 1 - Display 3 contacts
contacts.splice(0, 3).forEach((contact) => addContact(contact));

// Bonus: ITERATION 4 - Add Random Contacts
buttonAddRandom.addEventListener("click", () => addRandomContact());
