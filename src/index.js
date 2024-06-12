// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
buttonAddRandom.addEventListener("click", () => {
  const randomI= Math.floor(Math.random() * contacts.length);
const splicedArray = contacts.splice(randomI, 1);
const randomContact1 = splicedArray[0];
const row1 = document.createElement("tr");
row1.innerHTML = `
  <td>
    <img src="${randomContact1.pictureUrl}" />
  </td>
  <td> ${randomContact1.name} </td>
  <td> ${randomContact1.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(row1);
const deleteButtons = row1.querySelectorAll('.btn-delete');
deleteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    row1.remove();
  });
});
const likeButtons = row1.querySelectorAll('.btn-like');
likeButtons.forEach((likeButton) => {
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle('selected')
  })
} )
})
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
threeContacts.forEach((aContact) => {
  const row = document.createElement("tr");
  row.innerHTML = `
  <td>
    <img src="${aContact.pictureUrl}" />
  </td>
  <td> ${aContact.name} </td>
  <td> ${aContact.popularity.toFixed(2)} </td>
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
  const deleteButtons = row.querySelectorAll('.btn-delete');
    deleteButtons.forEach((button) => {
      button.addEventListener("click", () => {
        row.remove();
      });
    });
    const likeButtons = row.querySelectorAll('.btn-like');
    likeButtons.forEach((likeButton) => {
      likeButton.addEventListener("click", () => {
        likeButton.classList.toggle('selected')
      })
    } )
});

// ITERATION 2 - Delete Buttons

// selector = .btn-delete

// Your code goes here ...

// ITERATION 3 - Like Buttons

// Your code goes here ...

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
