// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];
addRow(randomContact);

function addRow(contact) {
  const exampleRow = document.createElement("tr");
  exampleRow.innerHTML = `
  <td>
    <img src="${contact.pictureUrl}" />
  </td>
  <td> ${contact.name} </td>
  <td> ${contact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete" data-index="${contacts.indexOf(contact)}">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

  tableBody.appendChild(exampleRow);
}



// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);
threeContacts.forEach(el => addRow(el))


// ITERATION 2 - Delete Buttons
const delBtns = document.querySelectorAll('.btn-delete');

tableBody.addEventListener("click", event => {
  // check if the closest thing to target is ".btn-delete" 
  if (event.target.closest(".btn-delete")) {
    // remove the closest row 
    event.target.closest("tr").remove();
    console.log("removed");
    // if closest classt is ".btn-like"
  } else if (event.target.closest(".btn-like")) {
    // toggle "selected" on closest ".btn-like"
    event.target.closest(".btn-like").classList.toggle("selected");
    console.log("liked");
  }
});



// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
