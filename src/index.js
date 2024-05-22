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
console.log(threeContacts);
// Your code goes here ...

for (let i = 0; i < threeContacts.length; i++) {
  const row = document.createElement("tr");
  row.innerHTML = `
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

  tableBody.appendChild(row);
}

// ITERATION 2 - Delete Buttons
const deleteButton = document.querySelectorAll(".btn-delete");

deleteButton.forEach((oneButton) => {
  oneButton.addEventListener("click", handleDelete);
});

function handleDelete(event) {
  const button = event.target;
  console.log(button);
  console.log(button.parentNode.parentNode);
  button.closest("tr").remove();
}
// Your code goes here ...

// ITERATION 3 - Like Buttons

// Your code goes here ...
const likeButton = document.querySelectorAll(".btn-like");
likeButton.forEach((oneButton) => {
  oneButton.addEventListener("click", handleLike);
});

function handleLike(event) {

  event.currentTarget.classList.toggle("selected");
  // if (event.target.classList.contains("selected")) {
  //   event.target.classList.remove("selected");
  // } else {
  //   event.target.classList.add("selected");
  // }
}
// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
buttonAddRandom.addEventListener("click", addRandomContact);

function addRandomContact(event) {
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
  const deleteButton = document.querySelectorAll(".btn-delete");
  const likeButton = document.querySelectorAll(".btn-like");
  likeButton.forEach((oneButton) => {
    oneButton.addEventListener("click", handleLike);
  });
  deleteButton.forEach((oneButton) => {
    oneButton.addEventListener("click", handleDelete);
  });
}
