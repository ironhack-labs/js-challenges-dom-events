/* // HTML ELEMENTS
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

const firstThreeContacts = contacts.splice(0, 3);

firstThreeContacts.forEach((contact) => {
  const contactRow = document.createElement("tr");
  contactRow.innerHTML = `
    <td>
      <img src="${contact.pictureUrl}" alt="picture of ${contact.name}" />
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
  tableBody.appendChild(contactRow);
});

// ITERATION 2 - Delete Buttons

// Your code goes here ...
const deleteButton = document.querySelectorAll(".btn-delete");
deleteButton.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.target.parentElement.parentElement.remove();
  });
});

// ITERATION 3 - Like Buttons

// Your code goes here ...
let likeButton = document.querySelectorAll(".btn-like");
likeButton.forEach((button) => {
  button.addEventListener("click", (event) => {
    //likeButton.classList.toggle("selected");
    event.currentTarget.classList.toggle("selected");
  });
});
 */
/** 
likeButton.addEventListener("click", (event) => {
  likeButton.classList.toggle("selected");
});*/
/* 
// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
const addRandomContact = document.querySelector("#btn-add-random");
addRandomContact.addEventListener("click", (event) => {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const selectedContact = contacts[randomIndex];
  const addRandomRow = document.createElement("tr");
  addRandomRow.innerHTML = `
    <td>
      <img src="${selectedContact.pictureUrl}" alt="picture of ${
    selectedContact.name
  }" />
    </td>
    <td> ${selectedContact.name} </td>
    <td> ${selectedContact.popularity.toFixed(2)} </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;

  let likeButton = document.querySelectorAll(".btn-like");
  likeButton.forEach((button) => {
    button.addEventListener("click", (event) => {
      //likeButton.classList.toggle("selected");
      event.currentTarget.classList.toggle("selected");
    });
  });
  const deleteButton = document.querySelectorAll(".btn-delete");
  deleteButton.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.target.parentElement.parentElement.remove();
    });
  });
  tableBody.appendChild(addRandomRow);
});
 */
// tableBody.addEventListener("click", (event) => {
//   console.log(event.target, event.currentTarget);
//   if (
//     event.target.parentElement &&
//     event.target.classList.contains("btn-like")
//   ) {
//     event.target.classList.toggle("selected");
//   }
// });

/* let likeButton = document.querySelectorAll(".btn-like");
likeButton.forEach((button) => {
  button.addEventListener("click", (event) => {
    //likeButton.classList.toggle("selected");
    event.currentTarget.classList.toggle("selected");
  });
}); */

/** 
//added even delegation removed btn-like part to add eventlisteners to ALL the randomly added elements
tableBody.addEventListener("click", (event) => {
  if (event.target && event.target.classList.contains("btn-like")) {
    event.target.classList.toggle("selected");
  }
});
*/
/**
   * 0. Add Event Listener => click event =>{}
   * 1. Get a random contact from the contacts array
   * const randomContact = Math.floor(Math.random() * contacts.length);
   * 2.Create a new tr for the contact 
   * const addRandomRow = document.createElement("tr");
  addRandomRow.innerHTML = `
    <td>
      <img src="${contact.pictureUrl}" alt="picture of ${contact.name}" />
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
  tableBody.appendChild(addRandomRow);
});
   * 
   * 
   * 
   */
// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// Ensure the variable is defined before adding event listener
const addRandomContact = document.querySelector("#btn-add-random");

// ITERATION 0 | Example Row
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);
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
const firstThreeContacts = contacts.splice(0, 3);

firstThreeContacts.forEach((contact) => {
  const contactRow = document.createElement("tr");
  contactRow.innerHTML = `
    <td>
      <img src="${contact.pictureUrl}" alt="picture of ${contact.name}" />
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
  tableBody.appendChild(contactRow);
});

// ITERATION 2 - Delete and Like Buttons: Event Delegation
//LEARN THIS => Whole body listener with if elementxyz clicked
// **Event Delegation - Handles Click for 'Like' and 'Delete' buttons**
tableBody.addEventListener("click", (event) => {
  // Handle 'Like' button click
  if (event.target && event.target.classList.contains("btn-like")) {
    event.target.classList.toggle("selected");
  }

  // Handle 'Delete' button click
  if (event.target && event.target.classList.contains("btn-delete")) {
    event.target.parentElement.parentElement.remove();
  }
});

// Bonus: ITERATION 4 - Add Random Contacts

// **Add Random Contact: Attach Event Listeners Dynamically**
addRandomContact.addEventListener("click", (event) => {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const selectedContact = contacts[randomIndex];
  const addRandomRow = document.createElement("tr");
  addRandomRow.innerHTML = `
    <td>
      <img src="${selectedContact.pictureUrl}" alt="picture of ${
    selectedContact.name
  }" />
    </td>
    <td> ${selectedContact.name} </td>
    <td> ${selectedContact.popularity.toFixed(2)} </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;

  // Append the newly created row
  tableBody.appendChild(addRandomRow);
});
