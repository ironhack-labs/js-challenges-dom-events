// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");
const deleteButtonEl = document.getElementsByClassName("btn-delete");
const likeButtonEl = document.getElementsByClassName("btn-like");
const randomButtonEl = document.getElementById("btn-add-random");
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

threeContacts.forEach((item) => {
  const newRow = document.createElement("tr");
  tableBody.appendChild(newRow);
  console.log(newRow); // Log newRow here

  newRow.innerHTML = `
  <td>
   <img src="${item.pictureUrl}" />
  </td>
  <td> ${item.name} </td>
  <td> ${item.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
   <button class="btn-like">
    <img src="./images/icon.png" alt="like" />
   </button>
  </td>
  `;
});

// ITERATION 2 - Delete Buttons
console.log(deleteButtonEl);
deleteButtonEl;
const deleteButtonsArray = [...deleteButtonEl];
console.log(deleteButtonsArray);

deleteButtonsArray.forEach((item) => {
  item.addEventListener("click", () => {
    const newRowParent = item.parentElement.parentElement;
    newRowParent.remove();
  });
});

// ITERATION 3 - Like Buttons

console.log(likeButtonEl);
const likeButtonArray = [...likeButtonEl];
console.log(likeButtonArray);

likeButtonArray.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("selected");
  });
});

// Bonus: ITERATION 4 - Add Random Contacts
console.log(randomButtonEl);

randomButtonEl.addEventListener("click", () => {
  const newRandomRow = document.createElement("tr");
  tableBody.appendChild(newRandomRow);

  const randomContactIndex = Math.floor(Math.random() * contacts.length);
  newRandomRow.innerHTML = `
  <td>
  <img src="${contacts[randomContactIndex].pictureUrl}" />
  </td>
  <td> ${contacts[randomContactIndex].name} </td>
  <td> ${contacts[randomContactIndex].popularity.toFixed(2)} </td>
  <td>
  <button class="btn-delete">Delete</button>
  </td>
  <td>
  <button class="btn-like">
    <img src="./images/icon.png" alt="like" />
  </button>
  </td>  
  `;
});

console.log(likeButtonEl);
