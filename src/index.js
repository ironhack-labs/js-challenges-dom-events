// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

//the bonus
buttonAddRandom.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const splicedArr = contacts.splice(randomIndex, 1);

  // get the element from the spliced array
  const myRandomContact = splicedArr[0];
  const myExampleRow = document.createElement("tr");
  myExampleRow.innerHTML = `
  <td>
    <img src="${myRandomContact.pictureUrl}" />
  </td>
  <td> ${myRandomContact.name} </td>
  <td> ${myRandomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

  tableBody.appendChild(myExampleRow);
});
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
const buttonDeleteExample = exampleRow.querySelector(".btn-delete");
buttonDeleteExample.addEventListener("click", () => {
  exampleRow.remove(buttonDelete);
});

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...

threeContacts.forEach((contact) => {
  const firstContactRow = document.createElement("tr");
  firstContactRow.innerHTML = `<td>
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
  </td>`;
  tableBody.appendChild(firstContactRow);

  // ITERATION 2 - Delete Buttons

  // Your code goes here ...

  const buttonDelete = firstContactRow.querySelector(".btn-delete");
  buttonDelete.addEventListener("click", () => {
    firstContactRow.remove(buttonDelete);
  });

  // for the toggle of the button, we select only the element and not the whole row (firstContactRow), because the action must affect only one element and not the whole row
  const buttonLike = firstContactRow.querySelector(".btn-like");
  buttonLike.addEventListener("click", () => {
    buttonLike.classList.toggle("selected");
  });
});

// ITERATION 3 - Like Buttons

// Your code goes here ...

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
