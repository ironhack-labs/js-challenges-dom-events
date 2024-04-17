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


// index.js (continuação)

// Adicionando eventos para o botão "Delete" e botão "Like" da primeira linha
document.querySelector(".btn-delete").addEventListener("click", function () {
  this.closest("tr").remove();
});

document.querySelector(".btn-like").addEventListener("click", function () {
  this.closest("tr").classList.toggle("selected");
});

document.addEventListener("DOMContentLoaded", function () {
  const contactsTable = document.getElementById("contacts");
  
  // Iteration 1 | Display 3 Contacts
  const firstThreeContacts = contacts.slice(0, 3);
  firstThreeContacts.forEach(contact => {
    const newRow = createContactRow(contact);
    contactsTable.appendChild(newRow);
  });

  // Add event listener to "Add Random Contact" button
  buttonAddRandom.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * contacts.length);
    const randomContact = contacts[randomIndex];
    const newRow = createContactRow(randomContact);
    contactsTable.appendChild(newRow);
  });
});

function createContactRow(contact) {
  const newRow = document.createElement("tr");
  
  const pictureCell = document.createElement("td");
  const picture = document.createElement("img");
  picture.src = contact.pictureUrl;
  pictureCell.appendChild(picture);
  newRow.appendChild(pictureCell);
  
  const nameCell = document.createElement("td");
  nameCell.textContent = contact.name;
  newRow.appendChild(nameCell);
  
  const popularityCell = document.createElement("td");
  popularityCell.textContent = contact.popularity.toFixed(2);
  newRow.appendChild(popularityCell);
  
  const favoriteCell = document.createElement("td");
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "btn-delete";
  favoriteCell.appendChild(deleteButton);
  newRow.appendChild(favoriteCell);
  
  const actionCell = document.createElement("td");
  const likeButton = document.createElement("button");
  likeButton.className = "btn-like";
  const likeIcon = document.createElement("img"); // Criar elemento para o ícone
  likeIcon.src = "images/icon.png"; // Adicionar o ícone ao elemento
  likeButton.appendChild(likeIcon); // Adicionar o ícone ao botão
  actionCell.appendChild(likeButton);
  newRow.appendChild(actionCell);
  
  // Add event listener to "Delete" button
  deleteButton.addEventListener("click", function () {
    newRow.remove();
  });
  
  // Add event listener to "Like" button
  likeButton.addEventListener("click", function () {
    newRow.classList.toggle("selected");
    // Trocar cor do botão Like quando clicado
    if (newRow.classList.contains("selected")) {
      likeButton.style.backgroundColor = "#fd9a9a"; // Cor vermelha
    } else {
      likeButton.style.backgroundColor = "#d4d3d3"; // Cor original
    }
  });
  
  return newRow;
}
