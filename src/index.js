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
threeContacts.forEach(contact => {
  //let newContact = threeContacts[i]
  let newRow = document.createElement("tr");
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

//localizamos button delete de esta fila y button like
let buttonDeleteNode = newRow.querySelector(".btn-delete");
let buttonLikeNode = newRow.querySelector(".btn-like");


buttonDeleteNode.addEventListener ("click", () => {
  newRow.remove();
});

buttonLikeNode.addEventListener( "click", () => {
  buttonLikeNode.classList.toggle("selected");
});
});

// Bonus: ITERATION 4 - Add Random Contacts

buttonAddRandom.addEventListener("click", ()=>{

  let randomIndexToAdd = Math.floor(Math.random() * contacts.length);
  let splicedArr2 = contacts.splice(randomIndexToAdd,1);
  // Get the element from the spliced array
  let newContactToAdd = splicedArr2[0]
  let newRow = document.createElement("tr");
  newRow.innerHTML = `
  <td>
    <img src="${newContactToAdd.pictureUrl}" />
  </td>
  <td> ${newContactToAdd.name} </td>
  <td> ${newContactToAdd.popularity.toFixed(2)} </td>
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

//localizamos button delete de esta fila y button like
let buttonDeleteNode = newRow.querySelector(".btn-delete");
let buttonLikeNode = newRow.querySelector(".btn-like");


buttonDeleteNode.addEventListener ("click", () => {
  newRow.remove();
});
buttonLikeNode.addEventListener( "click", () => {
  buttonLikeNode.classList.toggle("selected");
});
});






