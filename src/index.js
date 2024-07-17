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

/*
Let's start by displaying the first 3 contacts in the table. To do so, you will need to:
1. Get the **first 3 contacts** from the `contacts` array.<br>You can use the `splice()` method for this.
Remember that the `splice()` method modifies the original array, and returns the results as a new array.
2. Iterate over the newly obtained array of 3 contacts and, for each contact, create a new table row and append it to the table body.
<br>You can use the *Iteration 0* code as an example of how to create a new table row and what its structure should be.
3. Append each new table row to the table body. You can use the `appendChild()` method for this.
  <p align="center">
    <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-dom-ironcontacts/02-lab-dom-iteration-1.png" alt="iteration 1" width="800">
  </p>
*/



const appendContact = (contact) => {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>
      <img src="${contact.pictureUrl}" alt="${contact.name}" />
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

  tableBody.appendChild(row);
};

const threeContacts = contacts.splice(0, 3);

threeContacts.forEach(contact => {
  appendContact(contact);
});







  
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
  
  

  // ITERATION 3 - Like Buttons

  // Your code goes here ...

  
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
