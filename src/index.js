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

const newRows = document.createElement("tr");

newRows.innerHTML = `
  <td>
    <img src="${threeContacts[0].pictureUrl}" />
  </td>
  <td> ${threeContacts[0].name} </td>
  <td> ${threeContacts[0].popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
  
`
const newRows1 = document.createElement("tr");

newRows1.innerHTML = `<td>
    <img src="${threeContacts[1].pictureUrl}" />
  </td>
  <td> ${threeContacts[1].name} </td>
  <td> ${threeContacts[1].popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
  `
const newRows2 = document.createElement("tr");

newRows2.innerHTML =
  `<td>
      <img src="${threeContacts[2].pictureUrl}" />
    </td>
    <td> ${threeContacts[2].name} </td>
    <td> ${threeContacts[2].popularity.toFixed(2)} </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
    `
; 

tableBody.appendChild(newRows);
tableBody.appendChild(newRows1);
tableBody.appendChild(newRows2);

  
  // ITERATION 2 - Delete Buttons
    // Your code goes here ...

  let deleteButtons = document.querySelectorAll(".btn-delete");

  deleteButtons.forEach(button =>{
    button.addEventListener("click", () =>{
        let row = button.parentElement.parentElement;
        row.remove();
    });
  });
  

  // ITERATION 3 - Like Buttons

  // Your code goes here ...

  let likeButtons = document.querySelectorAll(".btn-like");

  likeButtons.forEach(button =>{
    button.addEventListener("click", () =>{
      button.classList.toggle("selected");

    });
  });
  
// Bonus: ITERATION 4 - Add Random Contacts

const addRandomButton = document.querySelector('#btn-add-random');






// Your code goes here ...