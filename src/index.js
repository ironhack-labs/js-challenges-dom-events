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
threeContacts.forEach((contact) => {
  //create a new row element
  const contactRow = document.createElement("tr");

  // Populate the table row with contact data
  contactRow.innerHTML = `
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

  // Append the raw to the table body
  tableBody.appendChild(contactRow);

  // ITERATION 2 - Delete Buttons

  // Your code goes here ...

  // Select the delete button within this raw
  let deleteButton = contactRow.querySelector(".btn-delete");

  // add Eventlistener
  deleteButton.addEventListener("click", () => {
    // remove the row form the DOM
    contactRow.remove();
  });

  // ITERATION 3 - Like Buttons

  // Your code goes here ...

  // Select the like button within this raw
  let likeButton = contactRow.querySelector(".btn-like");

  // add Eventlistener
  likeButton.addEventListener("click", () => {
    // change css class on click
    likeButton.classList.toggle("selected");
  });
});

// Bonus: ITERATION 4 - Add Random Contacts
// Select the random button by id
let randomButton = document.getElementById("btn-add-random");

// add Eventlistener
randomButton.addEventListener("click", () => {
  // add random raw
  // Splice 1 element from the contacts array at the random index
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const splicedArr = contacts.splice(randomIndex, 1);

  // Get the element from the spliced array
  const randomContact = splicedArr[0];

  const randomRow = document.createElement("tr");
  randomRow.innerHTML = `
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

  tableBody.appendChild(randomRow);

  // Select the delete button within this raw
  let deleteButton = randomRow.querySelector(".btn-delete");

  // add Eventlistener
  deleteButton.addEventListener("click", () => {
    // remove the row form the DOM
    randomRow.remove();
  });

  // Select the like button within this raw
  let likeButton = randomRow.querySelector(".btn-like");

  // add Eventlistener
  likeButton.addEventListener("click", () => {
    // change css class on click
    likeButton.classList.toggle("selected");
  });
});

// btn-add-random = i of random button

// Your code goes here ...
