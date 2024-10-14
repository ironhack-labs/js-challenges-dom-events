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
const createTableRow = (contact) => {
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
  return row;
};

  
threeContacts.forEach((person) => {
  const element = createTableRow(person);
  tableBody.appendChild(element);
}); 


// ITERATION 2 - Delete Buttons

// Your code goes here ... 
const deleteButtons = document.querySelectorAll(".btn-delete");
deleteButtons.forEach((deleteButton) => {
  const row = deleteButton.closest("tr");

  deleteButton.addEventListener("click", () => {
    row.remove();
  });
});


// ITERATION 3 - Like Buttons

// Your code goes here ...
const likeButtons = document.querySelectorAll(".btn-like");
likeButtons.forEach((likeButton) => {

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("selected");
  });

  console.log(likeButton, "like button here");
});


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
const addRandomContactButtons = document.querySelector("#btn-add-random")

addRandomContactButtons.addEventListener("click", () => {
  if (!contacts.length) {
    alert("No more contacts available to add!");
    return;
  }

  const randomIndex = Math.floor(Math.random() * contacts.length);
  const randomContact = contacts.splice(randomIndex, 1)[0]; 

  const newRow = createTableRow(randomContact);
  tableBody.appendChild(newRow);

  const deleteButton = newRow.querySelector(".btn-delete");
  deleteButton.addEventListener("click", () => {
    newRow.remove();
  });

  const likeButton = newRow.querySelector(".btn-like");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("selected");
  });
});
