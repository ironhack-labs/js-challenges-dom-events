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

const deleteButton = exampleRow.querySelector('.btn-delete');
deleteButton.addEventListener('click', (e) => {
  tableBody.removeChild(exampleRow)
})

tableBody.appendChild(exampleRow);

const likeButton = exampleRow.querySelector('.btn-like');
likeButton.addEventListener("click", () => {
  likeButton.classList.toggle('selected')
})





// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...

threeContacts.forEach(contact => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
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
  tableBody.appendChild(newRow);

  // ITERATION 2 - Delete Buttons
  const deleteButton = newRow.querySelector('.btn-delete');
  deleteButton.addEventListener('click', (e) => {
    tableBody.removeChild(newRow)
  })

  // ITERATION 3 - Like Buttons

  // Your code goes here ...
  const likeButton = newRow.querySelector('.btn-like');
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle('selected')
  })

});



// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
buttonAddRandom.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  

  const randomContact = contacts[randomIndex]
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
  tableBody.appendChild(row);

  const deleteButton = row.querySelector('.btn-delete');
  deleteButton.addEventListener('click', (e) => {
    tableBody.removeChild(row);
  })

  const likeButton = row.querySelector('.btn-like');
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle('selected');
  })
}) 


