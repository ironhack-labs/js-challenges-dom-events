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
const threeContacts = contacts.splice(randomIndex, 3);

// Your code goes here ...

threeContacts.forEach((contact) => {
  const row = document.createElement("tr");
  row.innerHTML = `
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
  </td>`;
  tableBody.appendChild(row);
  const deleteButton = row.querySelector(".btn-delete");

  deleteButton.addEventListener("click", function () {
    row.remove();
  });

  const likeButton = row.querySelector(".btn-like");
  likeButton.addEventListener("click", function () {
    // likeButton.style.backgroundColor === "red"
    //   ? (likeButton.style.backgroundColor = "")
    //   : (likeButton.style.backgroundColor = "red");
    likeButton.classList.toggle("selected");
  });
});

// ITERATION 2 - Delete Buttons

// Your code goes here ...

// ITERATION 3 - Like Buttons

// Your code goes here ...

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

// Assuming there's a button with an id of 'addRandomContact' and a global contacts array

buttonAddRandom.addEventListener("click", function () {
  // Ensure there are contacts to add
  if (contacts.length > 0) {
    // Get a random contact from the contacts array
    const randomIndex = Math.floor(Math.random() * contacts.length);
    const randomContact = contacts[randomIndex];

    // Create a new table row for the new contact
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><img src="${randomContact.pictureUrl}" alt="Contact Image"/></td>
      <td>${randomContact.name}</td>
      <td>${randomContact.popularity.toFixed(2)}</td>

      <td><button class="btn-delete">Delete</button></td>
      <td>
       <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
    `;

    // Append the new row to the table body
    tableBody.appendChild(row);


    row.querySelector(".btn-delete").addEventListener("click", function () {
      row.remove();
    });


    row.querySelector(".btn-like").addEventListener("click", function () {
      this.classList.toggle("selected");
    });
  }
});
