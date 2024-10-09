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
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...

threeContacts.forEach(function(contact) {
  const newRows = document.createElement("tr");
newRows.innerHTML = `  
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

  const deleteButton = newRows.querySelector(".btn-delete");
  deleteButton.addEventListener("click", function() {
      newRows.remove();
});  
  const likeButton = newRows.querySelector(".btn-like");
  likeButton.addEventListener("click", function() {
  likeButton.classList.toggle("selected");
});

  tableBody.appendChild(newRows);
});


  
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
  
/* const deleteButton = newRows.querySelector(".btn-delete");
deleteButton.addEventListener("click", function() {
  newRows.remove(); */ //coloquei no espaço da iteration 1
  


  // ITERATION 3 - Like Buttons

  // Your code goes here ...

/* const likeButton = newRows.querySelector(".btn-like");
  likeButton.addEventListener("click", function() {
  likeButton.classList.toggle("selected");*/ 
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

function addRandomContact() {
 
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const randomContact = contacts[randomIndex];

  
  const rowsPlus = document.createElement("tr");
  rowsPlus.innerHTML = `
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

  
  tableBody.appendChild(rowsPlus);

  
  const deleteButton = rowsPlus.querySelector(".btn-delete");
  const likeButton = rowsPlus.querySelector(".btn-like");

  
  deleteButton.addEventListener("click", function() {
    rowsPlus.remove();
  });

  
  likeButton.addEventListener("click", function() {
    rowsPlus.classList.toggle("selected"); // Assuming 'selected' changes button color
  });
}


addRandomContactButton.addEventListener("click", addRandomContact);
