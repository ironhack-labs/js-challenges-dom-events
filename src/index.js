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
exampleRow.querySelector(".btn-delete").addEventListener("click", deleteRow);

exampleRow.querySelector(".btn-like").addEventListener("click", toggleLike);

tableBody.appendChild(exampleRow);





// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...
threeContacts.forEach(contact => {
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
  </td>
  `;
  row.querySelector(".btn-delete").addEventListener("click", deleteRow);

  row.querySelector(".btn-like").addEventListener("click", toggleLike);

  tableBody.appendChild(row);
});

  
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
  function deleteRow(event) {
    const row = event.currentTarget.closest("tr");
    if (row) {
      row.remove();
    }
  }
  

  // ITERATION 3 - Like Buttons

  // Your code goes here ...
  function toggleLike(event) {
    const likeBtn = event.currentTarget;
    likeBtn.classList.toggle("selected");
  }



// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
buttonAddRandom.addEventListener("click", () => {

  const randomIndex = Math.floor(Math.random() * contacts.length);
  const splicedArr = contacts.splice(randomIndex, 1);
  const randomContact = splicedArr[0];

  const row = document.createElement("tr");
  row.innerHTML = `
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
  row.querySelector(".btn-delete").addEventListener("click", deleteRow);

  row.querySelector(".btn-like").addEventListener("click", toggleLike);

  tableBody.appendChild(row);

});
