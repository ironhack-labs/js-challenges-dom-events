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
threeContacts.forEach((contact) => {
  //Create new row
  const row = document.createElement("tr");
  row.innerHTML = `
  <td> 
    <img src = "${contact.pictureUrl}" />
  </td>
  <td> ${contact.name} </td>
  <td> ${contact.popularity.toFixed(2)} </td>
  <td> <button class = "btn-delete"> Delete </button> </td>
  <td> 
    <button class = "btn-like"> 
      <img src = "./images/icon.png" alt = "like" />
    </button>
  </td>
  `;

  // ITERATION 2 - Delete Buttons
  const buttonDelete = row.querySelector(".btn-delete");
  buttonDelete.addEventListener("click", () => row.remove());
  
  // ITERATION 3 - Like Buttons
  const buttonLike = row.querySelector(".btn-like");
  //Add o remove "selected" class
  buttonLike.addEventListener("click", () => buttonLike.classList.toggle("selected"));

  //Append each row
  tableBody.appendChild(row);
})

// Bonus: ITERATION 4 - Add Random Contacts
buttonAddRandom.addEventListener("click", () => {
  const contactRandom = contacts[Math.floor(Math.random() * contacts.length)];
  const row = document.createElement("tr");
  row.innerHTML = `
    <td> 
    <img src = "${contactRandom.pictureUrl}" />
  </td>
  <td> ${contactRandom.name} </td>
  <td> ${contactRandom.popularity.toFixed(2)} </td>
  <td> <button class = "btn-delete"> Delete </button> </td>
  <td> 
    <button class = "btn-like"> 
      <img src = "./images/icon.png" alt = "like" />
    </button>
  </td>
  `;

  tableBody.appendChild(row);
})