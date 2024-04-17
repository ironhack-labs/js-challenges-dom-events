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

const deleteButtonElement = exampleRow.querySelector('.btn-delete');
deleteButtonElement.addEventListener("click", () => {
  exampleRow.remove();
  contacts.push(randomContact);
  console.log(contacts)
});

const likeButtonElement = exampleRow.querySelector('.btn-like');
likeButtonElement.addEventListener("click", () => {
  likeButtonElement.classList.toggle('selected');
});


// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.

// ITERATION 2 - Delete Buttons
  
// ITERATION 3 - Like Buttons

// Your code goes here ...
const threeContacts = contacts.splice(0, 3);

threeContacts.forEach(element => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>
      <img src="${element.pictureUrl}" />
    </td>
    <td> ${element.name} </td>
    <td> ${element.popularity.toFixed(2)} </td>
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

  const deleteButtonElement = newRow.querySelector('.btn-delete');
  deleteButtonElement.addEventListener("click", () => {
    newRow.remove();
    contacts.push(element);
    console.log(contacts)
  });

  const likeButtonElement = newRow.querySelector('.btn-like');
  likeButtonElement.addEventListener("click", () => {
    likeButtonElement.classList.toggle('selected');
  });
});


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
const randomAddButtonElement = document.querySelector('#btn-add-random');

randomAddButtonElement.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const splicedArr = contacts.splice(randomIndex, 1);

  const randomContact = splicedArr[0];

  const randomRow = document.createElement("tr");
  randomRow.innerHTML = `
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

  tableBody.appendChild(randomRow);

  console.log(contacts);

  const deleteButtonElement = randomRow.querySelector('.btn-delete');
  deleteButtonElement.addEventListener("click", () => {
    randomRow.remove();
    contacts.push(randomContact);
    console.log(contacts)
  });

  const likeButtonElement = randomRow.querySelector('.btn-like');
  likeButtonElement.addEventListener("click", () => {
    likeButtonElement.classList.toggle('selected');
  });
})