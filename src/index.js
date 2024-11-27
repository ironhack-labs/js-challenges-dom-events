// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];
// This is also possible
// const randomContact = contacts[randomIndex];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td> <img src="${randomContact.pictureUrl}" /> </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td> <button class="btn-delete">Delete</button> </td>
  <td> <button class="btn-like">
  <img src="./images/icon.png" alt="like" /> </button> </td>`;

tableBody.appendChild(exampleRow);
//
//
// ITERATION 1 - Display 3 contacts

const threeContacts = contacts.splice(0, 3);

threeContacts.forEach((person) => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
  <td> <img src="${person.pictureUrl}" /> </td>
  <td> ${person.name} </td>
  <td> ${person.popularity.toFixed(2)} </td>
  <td> <button class="btn-delete">Delete</button> </td>
  <td> <button class="btn-like">
  <img src="./images/icon.png" alt="like" /> </button> </td>`;

  const deleteButton = newRow.querySelector(".btn-delete");
  deleteButton.addEventListener('click', ()=> {
   newRow.remove() 
  });
  
  tableBody.appendChild(newRow);
});

// ITERATION 3 - Like Buttons
//





// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
