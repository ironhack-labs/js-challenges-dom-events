// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

//Add new new row to table
function addNewRow(contact){
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
      <td><img src="${contact.pictureUrl}"></td>
      <td>${contact.name}</td>
      <td>${contact.popularity.toFixed(2)}</td>
      <td>
        <button class="btn-like">
          <img src="./images/icon.png" alt="like" />
        </button>
      </td>
      <td><button class="btn-delete">Delete</button></td>
      </button></td>
    `;
  addEventListenersToRow(newRow);
  tableBody.appendChild(newRow);
}

//Add event listeners to a row
function addEventListenersToRow(row){
  
  // Add event listener to delete button
  const buttonDelete = row.querySelector(".btn-delete");
  buttonDelete.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.remove();
  });

  // Add event listener to like button
  const buttonLike = row.querySelector(".btn-like");
  buttonLike.addEventListener("click", (e) => {
    const elementToTarget =
      e.target.tagName === "BUTTON" ? e.target : e.target.parentElement;
    elementToTarget.classList.toggle("selected");
  });
}

// Get the first 3 contacts from the 'contacts' array and display them
const threeContacts = contacts.splice(0, 3);
threeContacts.forEach((contact) => {
  addNewRow(contact);
});

// Add Random Contacts
buttonAddRandom.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const randomContact = contacts[randomIndex];
  addNewRow(randomContact);
});
