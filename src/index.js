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

threeContacts.forEach((contact) => {
  // step 1: create element
  const newRow = document.createElement("tr"); 
  // step 2: add content or modify
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
  // step3: append
  tableBody.appendChild(newRow);


   // ITERATION 2 - Delete Buttons
  const deleteButton = newRow.querySelector(".btn-delete")
  
  deleteButton.addEventListener("click", () => {
  tableBody.removeChild(newRow)
  console.log("removed new row")
  });

  // ITERATION 3 - Like Buttons
  const likeButton = newRow.querySelector(".btn-like")
  
  likeButton.addEventListener("click", () => {
  likeButton.classList.toggle("selected")
  console.log("Someone hit the like button!")
  });

});

// Bonus: ITERATION 4 - Add Random Contacts

buttonAddRandom.addEventListener("click", (contact) => {
  
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const splicedArr = contacts.splice(randomIndex, 1);
    // Get the element from the spliced array
    const randomContact = splicedArr[0];
  
  
  const newRandomContact = document.createElement("tr"); 
  
  newRandomContact.innerHTML = `
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

tableBody.appendChild(newRandomContact);
}
)

