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
// Your code goes here ...

for (i in threeContacts) {
  const contact = document.createElement("tr");
  contact.innerHTML = `
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
  tableBody.appendChild(contact);
}

// ITERATION 2 - Delete Buttons
// Your code goes here ...
for (item of tableBody.children) {
  const deleteButton = item.children[3].children[0];

  deleteButton.addEventListener("click", function (item) {
    let currentRow = item.target.parentElement.parentElement;
    tableBody.removeChild(currentRow);
  });
}

// ITERATION 3 - Like Buttons
// Your code goes here ...

const likeImgArray = document.querySelectorAll(".btn-like");
for (item of likeImgArray) {
  item.addEventListener("click", function (element) {
    element.target.classList.toggle("selected");
  });
}

const ImgArray = document.querySelectorAll(".btn-like > img");

for (item of ImgArray) {
  item.addEventListener("click", function (element) {
    element.target.parentElement.classList.toggle("selected");
  });
}

// Bonus: ITERATION 4 - Add Random Contacts
// Your code goes here ...

buttonAddRandom.addEventListener("click", function () {
  const randomInd = Math.floor(Math.random() * contacts.length);
  const randomPerson = contacts.splice(randomInd, 1)[0];

  const newContact = document.createElement("tr");

  newContact.innerHTML = `
<td>
  <img src="${randomPerson.pictureUrl}" />
</td>
<td> ${randomPerson.name} </td>
<td> ${randomPerson.popularity.toFixed(2)} </td>
<td>
  <button class="btn-delete">Delete</button>
</td>
<td>
  <button class="btn-like">
    <img src="./images/icon.png" alt="like" />
  </button>
</td>
`;

  tableBody.appendChild(newContact);

  // Adding delete button Event listener
  newContact.querySelector(".btn-delete").addEventListener("click", function () {
    tableBody.removeChild(newContact);
  });

  console.log(newContact.querySelector(".btn-like, .btn-like > img"));
  // Adding like button event listener
  newContact.querySelector(".btn-like, .btn-like > img").addEventListener("click", function () {
    newContact.querySelector(".btn-like").classList.toggle("selected");
  });
});
