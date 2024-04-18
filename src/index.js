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
tableBody.getElementsByTagName('tbody')[1];
threeContacts.forEach(contact => {
  const rowContact = document.createElement("tr");
  rowContact.innerHTML= `
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
// ITERATION 2 - Delete Buttons
const deleteButton = rowContact.querySelector(".btn-delete");
console.log(deleteButton)
deleteButton.addEventListener('click', function(){
  const rowContact = deleteButton.closest('tr'); 
  console.log(rowContact)
  if (rowContact) {
      rowContact.remove();
  }
}) 

const likeButton = rowContact.querySelector(".btn-like");
console.log(likeButton);
likeButton.addEventListener('click', function(){
    likeButton.classList.toggle("selected");
  
})


tableBody.appendChild(rowContact);
});


 
const allContacts = contacts.slice();  
buttonAddRandom.addEventListener('click', function() {
  const randomIndex = Math.floor(Math.random() * allContacts.length);
  const randomContact = allContacts[randomIndex];
  const addRandom = document.createElement("tr");
  addRandom.innerHTML = `
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
  tableBody.appendChild(addRandom);
});

  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
