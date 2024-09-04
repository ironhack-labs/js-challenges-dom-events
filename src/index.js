// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// name: "Arnold Schwarzenegger",
// pictureUrl: "https://image.tmdb.org/t/p/w500/sOkCXc9xuSr6v7mdAq9LwEBje68.jpg",
// popularity: 18.216362,
// wonOscar: false,


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");

function appendTableBody(node, contact) {
  node.innerHTML = `
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
}

appendTableBody(exampleRow, randomContact);

tableBody.appendChild(exampleRow);

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

threeContacts.forEach( (contact) => {
  let contactNode = document.createElement("tr");
  appendTableBody(contactNode, contact);
  tableBody.appendChild(contactNode);
  // ITERATION 2 - Delete Buttons
  let deleteBtnNode = contactNode.querySelector(".btn-delete");
  deleteBtnNode.addEventListener("click", () => {
    contactNode.remove();
  });
  // ITERATION 3 - Like Buttons
  let likeBtnNode = contactNode.querySelector(".btn-like");
  likeBtnNode.addEventListener("click", ()=>{
    // console.log(likeBtnNode.classList);
    likeBtnNode.classList.toggle("selected");
  });

});

// Bonus: ITERATION 4 - Add Random Contacts

buttonAddRandom.addEventListener("click", () => {
  const randRow = document.createElement("tr");

  const randContactIndex = Math.floor(Math.random() * contacts.length);
  const randContact = contacts.splice(randContactIndex, 1)[0];

  appendTableBody(randRow, randContact);
  tableBody.appendChild(randRow);
  // ITERATION 2 - Delete Buttons
  let deleteBtnNode = randRow.querySelector(".btn-delete");
  deleteBtnNode.addEventListener("click", () => {
    randRow.remove();
  });
  // ITERATION 3 - Like Buttons
  let likeBtnNode = randRow.querySelector(".btn-like");
  likeBtnNode.addEventListener("click", ()=>{
    likeBtnNode.classList.toggle("selected");
  });

});