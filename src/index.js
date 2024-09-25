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
threeContacts.forEach((element) => addContactToWebsite(element))

function addContactToWebsite(contactElement) {
  let toBeAddedContact = document.createElement("tr");
  toBeAddedContact.innerHTML = `
  <td>
    <img src="${contactElement.pictureUrl}" />
  </td>
  <td> ${contactElement.name} </td>
  <td> ${contactElement.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
  `
  let deleteButton = toBeAddedContact.querySelector(".btn-delete")
  deleteButton.addEventListener("click", () => deleteButton.closest("tr").remove());
  let likeButton = toBeAddedContact.querySelector(".btn-like");
  likeButton.addEventListener("click", () => (likeButton.className === "btn-like selected") ? likeButton.className = "btn-like" : likeButton.className = "btn-like selected");
  tableBody.appendChild(toBeAddedContact);
}

// Iteration 5
addRandomContactButton = document.querySelector("#btn-add-random");
addRandomContactButton.onclick = () => {
  toBeAddedRandomContact = contacts.splice(Math.floor(Math.random()*contacts.length), 1)[0];
  addContactToWebsite(toBeAddedRandomContact);
}