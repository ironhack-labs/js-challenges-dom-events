// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1); //array de los que elimina

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
  const threeRow = document.createElement("tr");
  threeRow.innerHTML = `
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

  tableBody.appendChild(threeRow);
});
// Your code goes here ...
const [contact1, contact2, contact3] = threeContacts;
const row1 = document.createElement("tr");
row1.innerHTML = `
<td>
<img src=${contact1.pictureUrl}/></td>
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
const row2 = document.createElement("tr");
row2.innerHTML = `
<td> <img src=${contact2.pictureUrl}/></td>
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
const row3 = document.createElement("tr");
row3.innerHTML = `
<td><img src=${contact3.pictureUrl}/> </td>
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
tableBody.appendChild(row1);
tableBody.appendChild(row2);
tableBody.appendChild(row3);

// ITERATION 2 - Delete Buttons
// const threeContacts = contacts.splice(0, 3);
threeContacts.forEach((contact) => {
  const newRow = document.createElement("tr");
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

  tableBody.appendChild(newRow);

  const btnDelete = newRow.querySelector(".btn-delete");

  btnDelete.addEventListener("click", (e) => {
    newRow.remove();

  });
});

// Your code goes here ...

// ITERATION 3 - Like Buttons



threeContacts.forEach(contact => {
  const newRow = document.createElement('tr');

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

  // Event listener para Delete
  const deleteButton = newRow.querySelector('.btn-delete');
  deleteButton.addEventListener('click', () => {
    newRow.remove();
  });

  // Event listener para Like
  const likeButton = newRow.querySelector('.btn-like');
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('selected'); // Alternar clase "selected"
  });

  tableBody.appendChild(newRow);
});





// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
