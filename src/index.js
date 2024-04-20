// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// Displaying th first 3 contacts when the page is first loaded:
const threeContacts = contacts.splice(0, 3);

threeContacts.forEach(contact => {
  const contactRow = createContactRow(contact);
  addContactRow(contactRow,tableBody);
});



buttonAddRandom.addEventListener('click', () => {
  const randoumContact = pickRandoumContact(contacts);
  const contact = createContactRow(randoumContact);
  addContactRow(contact,tableBody);
})


// Extract a function to pick a randoum contact from the array
function pickRandoumContact(contacts) {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  return contacts[randomIndex];
}

// function to create a contact row with some functionallity
function createContactRow(contact){
  const tr = document.createElement('tr');

  tr.innerHTML = 
    `<td>
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

  const deleteButton = tr.querySelector('.btn-delete');

  deleteButton.addEventListener('click', () => {
    tableBody.removeChild(tr);
  });

  const likeButton = tr.querySelector('.btn-like');

  likeButton.addEventListener('click' , () => {
    likeButton.classList.toggle('selected');
  });
  
  return tr;
}

// function to add the contact to the parent tabble
function addContactRow(contact , table){
  table.appendChild(contact);
}