const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

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
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(exampleRow);

const threeContacts = contacts.splice(0, 3);

threeContacts.forEach((contact) => {
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
  tableBody.appendChild(contactRow);

  const deleteButton = contactRow.querySelector(".btn-delete");

  deleteButton.addEventListener("click", () => {
    contactRow.remove();
  });

  const likeButton = contactRow.querySelector(".btn-like");

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("selected");
  });
});
