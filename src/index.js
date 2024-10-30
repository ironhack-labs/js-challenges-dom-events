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
exampleRow.innerHTML = /*html*/ `
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
for (let i = 0; i < threeContacts.length; i++) {
  const nextRow = document.createElement("tr");

  nextRow.innerHTML = /*html*/ `
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
  // ITERATION 2 - Delete Buttons
  const deleteButton = nextRow.querySelector(".btn-delete");

  deleteButton.addEventListener("click", () => {
    nextRow.remove();
  });
  /* nextRow.querySelector(".btn-delete").addEventListener("click", () => {
    console.log(`delete  clicked`);
    nextRow.remove()
    }); */

  // ITERATION 3 - Like Buttons
  const likeButton = nextRow.querySelector(".btn-like");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("selected");
  });

  tableBody.appendChild(nextRow);
}

// Bonus: ITERATION 4 - Add Random Contacts

//

document.querySelector("#btn-add-random").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const splicedArr = contacts.splice(randomIndex, 1);

  // Get the element from the spliced array
  const randomContact = splicedArr[0];

  const additionalRow = document.createElement("tr");

  additionalRow.innerHTML = /*html*/ `
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

  const deleteButton = additionalRow.querySelector(".btn-delete");

  deleteButton.addEventListener("click", () => {
    additionalRow.remove();
  });

  const likeButton = additionalRow.querySelector(".btn-like");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("selected");
  });

  tableBody.appendChild(additionalRow);
});
