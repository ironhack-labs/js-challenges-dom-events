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

let deleteBtn = exampleRow.querySelector(".btn-delete");
deleteBtn.addEventListener("click", () => {
  exampleRow.remove();
});

let likeBtn = exampleRow.querySelector(".btn-like");
likeBtn.addEventListener("click", () => {
  exampleRow.toggle(".btn-like.selected");
});

tableBody.appendChild(exampleRow);

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...
threeContacts.forEach((contact) => {
  let newContact = document.createElement("tr");
  newContact.innerHTML = `
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

  let deleteBtn = newContact.querySelector(".btn-delete");
  deleteBtn.addEventListener("click", () => {
    newContact.remove();
  });

  let likeBtn = newContact.querySelector(".btn-like");
  likeBtn.addEventListener("click", () => {
    newContact.toggle(".btn-like-selected");
  });

  tableBody.appendChild(newContact);
});

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

buttonAddRandom.addEventListener("click", () => {
  let randomIndice = Math.floor(Math.random() * contacts.length);
  let randomContact = contacts[randomIndice];

  let finalContact = document.createElement("tr");
  finalContact.innerHTML = `
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
  let deleteBtn = finalContact.querySelector(".btn-delete");
  deleteBtn.addEventListener("click", () => {
    finalContact.remove();
  });

  let likeBtn = finalContact.querySelector(".btn-like");
  likeBtn.addEventListener("click", () => {
    finalContact.toggle(".btn-like-selected");
  });

  tableBody.appendChild(finalContact);
});
