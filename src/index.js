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

threeContacts.forEach((contactObj, i) => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
  <td>
    <img src="${contactObj.pictureUrl}" />
  </td>
  <td> ${contactObj.name} </td>
  <td> ${contactObj.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>`;
  const parentElement = document.getElementById("contacts");
  parentElement.appendChild(newRow);
  const deleteBtn = newRow.querySelector("td .btn-delete");
  deleteBtn.addEventListener("click", () => {
    newRow.remove();
  });
  const likeBtn = newRow.querySelector(".btn-like");
  likeBtn.addEventListener("click", (event) => {
    likeBtn.classList.toggle("selected");
  });
});

// ITERATION 2 - Delete Buttons

// Your code goes here ...

// ITERATION 3 - Like Buttons

// Your code goes here ...

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
const randomButtonClick = buttonAddRandom.addEventListener("click", () => {
  const randomSplicedArray = contacts.splice(randomIndex, 1);
  const randomContact = randomSplicedArray[0];
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
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
  </td>`;
  const parentElement = document.getElementById("contacts");
  parentElement.appendChild(newRow);
  const deleteBtn = newRow.querySelector("td .btn-delete");
  deleteBtn.addEventListener("click", () => {
    newRow.remove();
  });
  const likeBtn = newRow.querySelector(".btn-like");
  likeBtn.addEventListener("click", (event) => {
    likeBtn.classList.toggle("selected");
  });
});
