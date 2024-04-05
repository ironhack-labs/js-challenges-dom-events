// // HTML ELEMENTS
// const buttonAddRandom = document.querySelector("#btn-add-random");
// const tableBody = document.querySelector("tbody#contacts");

// //the contacts variable is pulled from the data.js file
// //they are linked through the index.html file code.

// // ITERATION 0 | Example Row
// // Splice 1 element from the contacts array at the random index
// const randomIndex = Math.floor(Math.random() * contacts.length);
// // The splice() method is used to add or remove elements of an existing array and
// // the return value will be the removed items from the array.
// const splicedArr = contacts.splice(randomIndex, 1); //picking that random item

// // Get the element from the spliced array
// const randomContact = splicedArr[0]; //index 0 because this is the only element

// //create a table row element
// // which will go inside <tbody id="contacts">

//----------------

// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
// create a table row element
// which will go inside <tbody id="contacts">

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

const buttonDelete = exampleRow.querySelector(".btn-delete");
buttonDelete.addEventListener("click", () => {
  exampleRow.remove();
});

const likedButton = exampleRow.querySelector(".btn-like");
likedButton.addEventListener("click", () => {
  likedButton.classList.toggle("selected");
});

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...
threeContacts.map((contact) => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = ` <td>
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

  // PAY ATTENTION, ALL OF THIS STILL GOES INSIDE OF THE NEW ROWS CODE
  // DID ALL CORRECT AND HAD THAT LITTLE MISTAKE INITIALLY!!!!!!

  //   add an event listener to each Delete button so that,
  // when clicked, the corresponding row is removed from the table.

  // Get the Delete button element from the newly created row
  // Add event listener to the Delete button for the click event
  const buttonDelete = newRow.querySelector(".btn-delete");
  buttonDelete.addEventListener("click", () => {
    newRow.remove();
  });
  // ITERATION 3 - Like Buttons

  // Your code goes here ...
  const likedButton = newRow.querySelector(".btn-like");
  likedButton.addEventListener("click", () => {
    likedButton.classList.toggle("selected");
  });
});

// //for reference, Laura's code on changing background color
// function generateRandomColor() {
//   return "#" + Math.floor(Math.random() * 16777215).toString(16);
// }

// //changes background to random color when pressing the keyboard key dowm
// document.body.addEventListener("keydown", () => {
//   document.body.style.backgroundColor = generateRandomColor();
// });

// // Bonus: ITERATION 4 - Add Random Contacts

//task is: event listener for the Add Random Contact button.
// When clicked, the button should add a new random contact to the table.

// // Your code goes here ...

//04 - step 01: Add an event listener to the Add Random Contact button element, for the click event.
buttonAddRandom.addEventListener("click", function () {
  //04 - step 02 When the Add Random Contact button is clicked, get a random contact from the contacts array.
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const randomContact = contacts[randomIndex]; //adds the new contact on that random index from the array
  //   // const randomIndex = Math.floor(Math.random() * contacts.length);
  //   // const randomContact = contacts.splice(randomIndex, 1)[0];
  //from here on this new contact will also do the same as before,
  //generate the exact same newRow
  const newRow = document.createElement("tr");
  newRow.innerHTML = ` <td>
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
  tableBody.appendChild(newRow);

  const buttonDelete = newRow.querySelector(".btn-delete");
  buttonDelete.addEventListener("click", () => {
    newRow.remove();
  });

  const likedButton = newRow.querySelector(".btn-like");
  likedButton.addEventListener("click", () => {
    likedButton.classList.toggle("selected");
  });
});
