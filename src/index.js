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
const contact1 = threeContacts[0]

const exampleRow1 = document.createElement("tr");
exampleRow1.innerHTML = `
  <td>
    <img src="${contact1.pictureUrl}" />
  </td>
  <td> ${contact1.name} </td>
  <td> ${contact1.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(exampleRow1);

const contact2 = threeContacts[1]

const exampleRow2 = document.createElement("tr");
exampleRow2.innerHTML = `
  <td>
    <img src="${contact2.pictureUrl}" />
  </td>
  <td> ${contact2.name} </td>
  <td> ${contact2.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(exampleRow2);

const contact3 = threeContacts[2]

const exampleRow3 = document.createElement("tr");
exampleRow3.innerHTML = `
  <td>
    <img src="${contact2.pictureUrl}" />
  </td>
  <td> ${contact3.name} </td>
  <td> ${contact3.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(exampleRow3);


  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
  
  const removeBtnNode = exampleRow.querySelector(".btn-delete")
  removeBtnNode.addEventListener("click", () => {
    exampleRow.remove()

  })
  
  const removeBtnNode1 = exampleRow1.querySelector(".btn-delete")
  removeBtnNode1.addEventListener("click", () => {
    exampleRow1.remove()

  })

  const removeBtnNode2 = exampleRow2.querySelector(".btn-delete")
  removeBtnNode2.addEventListener("click", () => {
    exampleRow2.remove()

  })

  const removeBtnNode3 = exampleRow3.querySelector(".btn-delete")
  removeBtnNode3.addEventListener("click", () => {
    exampleRow3.remove()

  })


  // ITERATION 3 - Like Buttons

  // Your code goes here ...

  
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
