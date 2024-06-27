const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

const randomContact = splicedArr[0];

const likeButton = (button) =>
  (button.onclick = () => button.classList.toggle("selected"));

const deleteButton = (button, row) => (button.onclick = () => row.remove());

const makeRow = (contact) => {
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
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;
  const btnLike = row.querySelector(".btn-like");
  const btnDelete = row.querySelector(".btn-delete");
  likeButton(btnLike);
  deleteButton(btnDelete, row);
  return row;
};

const exampleRow = makeRow(randomContact);
tableBody.appendChild(exampleRow);

const threeContacts = contacts.splice(0, 3);

const threeRows = threeContacts.map((contact) => makeRow(contact));

tableBody.append(...threeRows);

document.querySelector("#btn-add-random").onclick = () => {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const splicedArr = contacts.splice(randomIndex, 1);
  const randomContact = splicedArr[0];
  const row = makeRow(randomContact);
  const btnLike = row.querySelector(".btn-like");
  const btnDelete = row.querySelector(".btn-delete");
  likeButton(btnLike);
  deleteButton(btnDelete, row);
  tableBody.appendChild(row);
};
