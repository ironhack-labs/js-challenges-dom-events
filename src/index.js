// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
// Create a new Tr from a contact 
const createNewRow = (contact) => {
  const newRow = document.createElement("tr")
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
  tableBody.appendChild(newRow)
  
  const btnDelete = newRow.querySelector(".btn-delete")
  btnDelete.addEventListener("click", () => {
    tableBody.removeChild(newRow);
    contacts.push(contact);
  })
  
  const btnLike = newRow.querySelector(".btn-like")
  btnLike.addEventListener("click", () => btnLike.classList.toggle("selected"))
}


const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
//const randomContact = splicedArr[0];

//REFACTOR randomContact adding
createNewRow(splicedArr[0])


// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);
// Your code goes here ...

threeContacts.forEach(contact => createNewRow(contact))

  
 // ITERATION 2 - Delete Buttons
  
 // Your code goes here ...

 // ITERATION 3 - Like Buttons
  

  
  
  


// Bonus: ITERATION 4 - Add Random Contacts
const btnAddRnd = document.querySelector('#btn-add-random');
btnAddRnd.addEventListener('click', () => createNewRow(contacts[Math.floor(Math.random() * contacts.length)]));
// Your code goes here ...
