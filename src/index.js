// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);
threeContacts.forEach((contact) => {
  //create new row
  const newRow = document.createElement("tr");

  //Add content to the row
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

  // ITERATION 2 - Delete Buttons
  const buttonDelete = newRow.querySelector(".btn-delete");
  buttonDelete.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.remove();
  });

  // ITERATION 3 - Like Buttons
  const buttonLike = newRow.querySelector(".btn-like");

  buttonLike.addEventListener("click", (e) => {
    const elementToTarget =
    e.target.tagName === "BUTTON" ? e.target : e.target.parentElement;
    elementToTarget.classList.toggle("selected");
  });

  //Append the row to the table
  tableBody.appendChild(newRow);
});



// Bonus: ITERATION 4 - Add Random Contacts

buttonAddRandom.addEventListener('click', () => {
  const ramdomIndex = Math.floor(Math.random() * contacts.length);
  const randomContact = contacts[ramdomIndex];
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td><img src="${randomContact.pictureUrl}"></td>
    <td>${randomContact.name}</td>
    <td>${randomContact.popularity.toFixed(2)}</td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
    <td><button class="btn-delete">Delete</button></td>
    </button></td>
  `;

  // ITERATION 2 - Delete Buttons
  const buttonDelete = newRow.querySelector(".btn-delete");
  buttonDelete.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.remove();
  });

  // ITERATION 3 - Like Buttons
  const buttonLike = newRow.querySelector(".btn-like");

  buttonLike.addEventListener("click", (e) => {
    const elementToTarget =
      e.target.tagName === "BUTTON" ? e.target : e.target.parentElement;
    elementToTarget.classList.toggle("selected");
  });
  
  tableBody.appendChild(newRow);
});