// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = createContactRow(randomContact);
tableBody.appendChild(exampleRow);

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const firstThreeContacts = contacts.splice(0, 3);

firstThreeContacts.forEach(contact => {
  const contactRow = createContactRow(contact);
  tableBody.appendChild(contactRow);
});


function createContactRow(contact) {
  const contactRow = document.createElement("tr");
  
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

  const deleteButton = contactRow.querySelector('.btn-delete');
  deleteButton.addEventListener('click', () => {
    contactRow.remove(); 
  });


  const likeButton = contactRow.querySelector('.btn-like');
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('selected'); 
  });

  return contactRow; 
}

// Bonus: Add Random Contacts
buttonAddRandom.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const randomContact = contacts[randomIndex];

  const randomContactRow = createContactRow(randomContact);
  tableBody.appendChild(randomContactRow);
});
