// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// ITERATION 0 | Example Row
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);
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
      <img src="./images/icon.png" alt="like" class="like-icon" />
    </button>
  </td>
`;

tableBody.appendChild(exampleRow);

// Añadir event listener para el botón eliminar que tenga en cuenta la primera fila
const deleteButtonExample = exampleRow.querySelector('.btn-delete');
deleteButtonExample.addEventListener('click', () => {
  tableBody.removeChild(exampleRow);
});

// Like functionality for the first row
const likeButtonExample = exampleRow.querySelector('.btn-like');
const likeIconExample = likeButtonExample.querySelector('.like-icon'); // Seleccionar el icono de "me gusta"
likeButtonExample.addEventListener('click', () => {
  likeButtonExample.classList.toggle('selected'); // Toggle de clase 'selected'
  if (likeButtonExample.classList.contains('selected')) {
    randomContact.popularity += 1; // Incrementar la popularidad
  }
  exampleRow.cells[2].innerText = randomContact.popularity.toFixed(2); // Actualizar la popularidad
});

// ITERATION 1 - Display 3 contacts
const threeContacts = contacts.splice(0, 3);

threeContacts.forEach(contact => {
  const row = document.createElement("tr");
  row.innerHTML = `
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
        <img src="./images/icon.png" alt="like" class="like-icon" />
      </button>
    </td>
  `;

  // Append the row to the table body
  tableBody.appendChild(row);

  // Delete functionality for each row
  const deleteButton = row.querySelector('.btn-delete');
  deleteButton.addEventListener('click', () => {
    tableBody.removeChild(row);
  });

  // Like functionality for each row
  const likeButton = row.querySelector('.btn-like');
  const likeIcon = likeButton.querySelector('.like-icon'); // Seleccionar el icono de "me gusta"
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('selected'); // Toggle de clase 'selected'
    if (likeButton.classList.contains('selected')) {
      contact.popularity += 1; // Incrementar la popularidad
    }
    row.cells[2].innerText = contact.popularity.toFixed(2); // Actualizar popularidad
  });
});

// Bonus: ITERATION 4 - Add Random Contacts
buttonAddRandom.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const splicedArr = contacts.splice(randomIndex, 1);
  const randomContact = splicedArr[0];

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
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
        <img src="./images/icon.png" alt="like" class="like-icon" />
      </button>
    </td>
  `;

  tableBody.appendChild(newRow);

  // Add delete functionality
  const deleteButton = newRow.querySelector('.btn-delete');
  deleteButton.addEventListener('click', () => {
    tableBody.removeChild(newRow);
  });

  // Add like functionality for the new row
  const likeButton = newRow.querySelector('.btn-like');
  const likeIcon = likeButton.querySelector('.like-icon'); // Seleccionar el icono de "me gusta"
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('selected'); // Toggle de clase 'selected'
    if (likeButton.classList.contains('selected')) {
      randomContact.popularity += 1; // Incrementar la popularidad
    }
    newRow.cells[2].innerText = randomContact.popularity.toFixed(2); // Actualizar la popularidad
  });
});