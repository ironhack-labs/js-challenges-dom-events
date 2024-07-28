// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


function createContactRow(contact){
  const exampleRow = document.createElement("tr");
  exampleRow.innerHTML = `
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
  const deleteButton = exampleRow.querySelector('.btn-delete')
  deleteButton.addEventListener('click', () =>{
    exampleRow.remove()
  })

  // ITERATION 3 - Like Buttons
  const likeButton = exampleRow.querySelector(".btn-like")
  likeButton.addEventListener('click', () =>{
    likeButton.classList.toggle("selected")
  })
  
  return exampleRow;
}

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = createContactRow(randomContact)

tableBody.appendChild(exampleRow);





// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3); 

threeContacts.forEach((contact) => {
  const newRow = createContactRow(contact)
  tableBody.appendChild(newRow);
})



// Bonus: ITERATION 4 - Add Random Contacts
buttonAddRandom.addEventListener('click', () =>{
  const newRandomIndex = Math.floor(Math.random() * contacts.length);
  const splicedArray = contacts.splice(newRandomIndex, 1);
  const newContact = splicedArray[0];

  const randomRow = createContactRow(newContact)

  tableBody.appendChild(randomRow);

})
