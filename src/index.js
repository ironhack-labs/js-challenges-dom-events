const tableBody = document.querySelector("tbody#contacts");

const getRandomContact = () => {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const splicedArr = contacts.splice(randomIndex, 1);
  const randomContact = splicedArr[0];
  return randomContact;
};

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
  tableBody.appendChild(row);
  const btnLike = row.querySelector(".btn-like");
  btnLike.onclick = () => btnLike.classList.toggle("selected");
  const btnDelete = row.querySelector(".btn-delete");
  btnDelete.onclick = () => row.remove();
  return row;
};

const randomContact = getRandomContact();
const exampleRow = makeRow(randomContact);

const threeContacts = contacts.splice(0, 3);
const threeRows = threeContacts.map((contact) => makeRow(contact));

document.querySelector("#btn-add-random").onclick = () => {
  const randomContact = getRandomContact();
  const row = makeRow(randomContact);
  return row;
};
