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

const likeBtn = exampleRow.querySelector(".btn-like");
likeBtn.addEventListener("click", () => {
likeBtn.classList.toggle("selected");})

tableBody.appendChild(exampleRow);





// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...
threeContacts.forEach(function(actor) {
  const newRow = document.createElement("tr");
newRow.innerHTML = `
  <td>
    <img src="${actor.pictureUrl}" />
  </td>
  <td> ${actor.name} </td>
  <td> ${actor.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`
tableBody.appendChild(newRow);
 // ITERATION 2 - Delete Buttons

const DltBtn = newRow.querySelector(".btn-delete");
DltBtn.addEventListener("click", () => {
  newRow.remove();
})

 // ITERATION 3 - Like Buttons
const likeBtn = newRow.querySelector(".btn-like");
likeBtn.addEventListener("click", () => {
likeBtn.classList.toggle("selected");
})
})


// Bonus: ITERATION 4 - Add Random Contacts

buttonAddRandom.addEventListener("click", () => {
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

const likeBtn = randomRow.querySelector(".btn-like");
likeBtn.addEventListener("click", () => {
likeBtn.classList.toggle("selected");
});

const DltBtn = randomRow.querySelector(".btn-delete");
DltBtn.addEventListener("click", () => {
  randomRow.remove();
});

tableBody.appendChild(randomRow);
})

