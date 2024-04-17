// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 3 elements from the contacts array at the random index

function createRandomContact(){
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);
// gives us an array with 1 objects.

// Get the element (=== object)from the spliced array

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

exampleRow.querySelector(".btn-delete").addEventListener("click", function() {exampleRow.remove()})

let likeButton = exampleRow.querySelector(".btn-like");
likeButton.addEventListener("click", function(){
  likeButton.classList.toggle("selected")
})

}

createRandomContact()

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...

threeContacts.forEach(contact =>{

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
  // added row for contact

  newRow.querySelector(".btn-delete").addEventListener("click", function() {newRow.remove()})
  // removes the element from the DOM. it still exists in the environment though, just flying around unused.
  
  let likeButton = newRow.querySelector(".btn-like");
  likeButton.addEventListener("click", function(){
    likeButton.classList.toggle("selected")
  })

  })

  
  
  

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

let randomContactButton = document.querySelector("#btn-add-random");

randomContactButton.addEventListener("click", function(){
  createRandomContact()
})