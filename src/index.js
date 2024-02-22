// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const deleteButtons = document.querySelectorAll('.btn-delete');
const likeButton = document.querySelector('.btn-like');
const likeButtonSelected = document.querySelector('.btn-like');
const buttonSortByName = document.querySelector("#btn-sort-name");
const buttonSortByPopularity = document.querySelector("#btn-sort-popularity");
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
threeContacts.forEach((contact) => {
  const row = document.createElement("tr");
  row.innerHTML = `
  <td>
  <img src="${contact.pictureUrl}" />
  </td>
  <td> ${contact.name} </td>
  <td> ${contact.popularity.toFixed(2)} </td>
  <td><button class="btn-delete">Delete</button></td>
    <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  `;

   // Append the new row to the table body
   tableBody.appendChild(row);  


  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...

  const deleteButton = newRow.querySelector(".btn-delete");
  deleteButton.addEventListener("click", () => {
    newRow.remove();
  });

 
  // ITERATION 3 - Like Buttons

  // Your code goes here ...
  const likeButton = newRow.querySelector(".btn-like");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("selected");
  });  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

buttonAddRandom.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * contact.length);
  const randomContact = contacts.splice(0, 4);


  const newRow = document.createElement("tr");
  row.innerHTML = `
  <td>
  <img src="${contact.pictureUrl}" />
  </td>
  <td> ${contact.Name} </td>
  <td> ${contact.popularity.toFixed(2)} </td>
  <td><button class="btn-delete">Delete</button></td>
    <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  `;

 

 // Add an event listener to delete button
  const buttonDelete = newRow.querySelector(".btn-delete");
  buttonDelete.addEventListener("click", () => {
    newRow.remove();
  });

  // Add an event listener to like button
  const buttonLike = newRow.querySelector(".btn-like");
  buttonLike.addEventListener("click", () => {
    buttonLike.classList.toggle("selected");
  }); 
  
  // Append the new row to the table body
  tableBody.appendChild(newRow);

}); 
});