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
  const contactNode = document.createElement("tr");
  contactNode.innerHTML = `
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
  //console.log(contactNode)
  tableBody.appendChild(contactNode);

  // ITERATION 2 - Delete Buttons
  const deleteButton = contactNode.querySelector(".btn-delete");
  deleteButton.addEventListener("click", () => {
    contactNode.remove();
  });
  // ITERATION 3 - Like Buttons
  const likeButton = contactNode.querySelector(".btn-like");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("selected"); //.btn-like.selected
  });
});

// Bonus: ITERATION 4 - Add Random Contacts
//btn-add-random
//repetimos todo pero añadiendo nuevos nombres a las constantes, con random para aclarar que son todas al azar.
const randomButton = document.querySelector("#btn-add-random");
randomButton.addEventListener("click", () => {
  const randomIndex2 = Math.floor(Math.random() * contacts.length);
  const splicedArr2 = contacts.splice(randomIndex2, 1);
  const randomContact2 = splicedArr2[0];
  const randomContactNode = document.createElement("tr");
  randomContactNode.innerHTML = `
    <td>
      <img src="${randomContact2.pictureUrl}" />
    </td>
    <td> ${randomContact2.name} </td>
    <td> ${randomContact2.popularity.toFixed(2)} </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
    `;
  tableBody.appendChild(randomContactNode);
//no funcionan los botones de Like y Delete, hay que copiarlo con randomContacNode
  const deleteButton = randomContactNode.querySelector(".btn-delete");
  deleteButton.addEventListener("click", () => {
    randomContactNode.remove();
  });
  const likeButton = randomContactNode.querySelector(".btn-like");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("selected"); //.btn-like.selected
  });
});
