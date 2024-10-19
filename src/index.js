// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// ITERATION 0: Mostrar un contacto de ejemplo
const randomIndex = Math.floor(Math.random() * contacts.length);
const randomContact = contacts.splice(randomIndex, 1)[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" style="width: 50px; height: 50px;" alt="contact picture" />
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

// Asignar eventos para el contacto de ejemplo
const exampleDeleteButton = exampleRow.querySelector(".btn-delete");
exampleDeleteButton.addEventListener("click", () => {
  exampleRow.remove();
});

const exampleLikeButton = exampleRow.querySelector(".btn-like");
exampleLikeButton.addEventListener("click", () => {
  exampleRow.classList.toggle("selected");
});

tableBody.appendChild(exampleRow);

// ITERATION 1: Mostrar los primeros 3 contactos
const threeContacts = contacts.splice(0, 3);
threeContacts.forEach((contact) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>
      <img src="${contact.pictureUrl}" style="width: 50px; height: 50px;" alt="contact picture" />
    </td>
    <td>${contact.name}</td>
    <td>${contact.popularity.toFixed(2)}</td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;

  // Asignar eventos para los botones "Delete" y "Like"
  const deleteButton = row.querySelector(".btn-delete");
  deleteButton.addEventListener("click", () => {
    row.remove();
  });

  const likeButton = row.querySelector(".btn-like");
  likeButton.addEventListener("click", () => {
    row.classList.toggle("selected");
  });

  tableBody.appendChild(row);
});

