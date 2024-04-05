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

for (let i = 0; i < threeContacts.length; i++) {
  const oneRow = document.createElement("tr");
  oneRow.innerHTML = `
      <td>
        <img src="${threeContacts[i].pictureUrl}" />
      </td>
      <td> ${threeContacts[i].name} </td>
      <td> ${threeContacts[i].popularity.toFixed(2)} </td>
      <td>
        <button class="btn-delete">Delete</button>
      </td>
      <td>
        <button class="btn-like">
          <img src="./images/icon.png" alt="like" />
        </button>
      </td>
  `;
  tableBody.append(oneRow);
  // const deleteButton = oneRow.querySelector(".btn-delete");
  // console.log(deleteButton);
  // deleteButton.addEventListener("click", () => {
  //   oneRow.remove();
  // });
}

// ITERATION 2 - Delete Buttons
const deleteButton = document.getElementsByClassName("btn-delete");
[...deleteButton].forEach((button) => {
  button.addEventListener("click", () => {
    button.closest("tr").remove();
  });
});

// ITERATION 3 - Like Buttons

const likeButton = document.getElementsByClassName("btn-like");
[...likeButton].forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("selected");
  });
});

// Bonus: ITERATION 4 - Add Random Contacts

const addRandomRow = () => {
  const randomRow = document.createElement("tr");
  const rIndex = Math.floor(Math.random() * contacts.length);
  randomRow.innerHTML = `
      <td>
        <img src="${contacts[rIndex].pictureUrl}" />
      </td>
      <td> ${contacts[rIndex].name} </td>
      <td> ${contacts[rIndex].popularity.toFixed(2)} </td>
      <td>
        <button class="btn-delete">Delete</button>
      </td>
      <td>
        <button class="btn-like">
          <img src="./images/icon.png" alt="like" />
        </button>
      </td>
  `;
  return tableBody.appendChild(randomRow);
};

const addRandomContactButton = document.getElementById("btn-add-random");
addRandomContactButton.addEventListener("click", addRandomRow);
