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
let tripleContact = threeContacts.forEach((contact) => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
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
  tableBody.appendChild(newRow);
  // ITERATION 2 - Delete Buttons

  // Your code goes here ...

  let newRowBtn = newRow.querySelector(".btn-delete");
  newRowBtn.addEventListener("click", () => {
    newRow.remove();
  });

  // ITERATION 3 - Like Buttons

  // Your code goes here ...
  let likeBtn = newRow.querySelector(".btn-like");
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("selected");
  });
});

let addContact = document.querySelector("#btn-add-random");
addContact.addEventListener("click", () => {
  const random = Math.floor(Math.random() * contacts.length);
  const realRandom = contacts.splice(randomIndex, 1);
  console.log(random);
  console.log(realRandom);
  const added1 = realRandom[0];

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
        <td>
          <img src="${added1.pictureUrl}" />
        </td>
        <td> ${added1.name} </td>
        <td> ${added1.popularity.toFixed(2)} </td>
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
});

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
