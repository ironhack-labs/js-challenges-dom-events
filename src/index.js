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

let deleteButton1 = exampleRow.querySelector(".btn-delete");
deleteButton1.addEventListener("click", (event) => {
  event.target.closest("tr").remove();
});

let likeButton1 = exampleRow.querySelector(".btn-like");
likeButton1.addEventListener("click", () => {
  likeButton1.classList.toggle("selected");
});

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// const contact1 = threeContacts[0];
// const contact2 = threeContacts[1];
// const contact3 = threeContacts[2];

// Your code goes here ...

console.log(threeContacts);
for (let i = 0; i < threeContacts.length; i++) {
  let newRow = document.createElement("tr");
  newRow.innerHTML = `
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
  tableBody.appendChild(newRow);

  let deleteButton = newRow.querySelector(".btn-delete");
  deleteButton.addEventListener("click", (event) => {
    event.target.closest("tr").remove();
  });

  let likeButton = newRow.querySelector(".btn-like");

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("selected");
  });
}

// ITERATION 2 - Delete Buttons

// Your code goes here ...

// ITERATION 3 - Like Buttons

// Your code goes here ...

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

const randomIndex2 = Math.floor(Math.random() * contacts.length);
const splicedArr2 = contacts.splice(randomIndex2, 1);

const randomContact2 = splicedArr2[0];

const randomRow = document.createElement("tr");
randomRow.innerHTML = `
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

tableBody.appendChild(randomRow);

let deleteButton = randomRow.querySelector(".btn-delete");
deleteButton.addEventListener("click", (event) => {
  event.target.closest("tr").remove();
});

let likeButton = randomRow.querySelector(".btn-like");
likeButton.addEventListener("click", () => {
  likeButton.classList.toggle("selected");
});
