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
threeContacts.forEach((celebrity) => {
  let celebrityRow = document.createElement("tr")
  celebrityRow.innerHTML = `
  <td>
    <img src="${celebrity.pictureUrl}" />
  </td>
  <td> ${celebrity.name} </td>
  <td> ${celebrity.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;
tableBody.appendChild(celebrityRow);
 
// ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
  const deleteBtn = celebrityRow.querySelectorAll(".btn-delete");
  deleteBtn.forEach((item) => {
    item.addEventListener("click",() => {
      celebrityRow.remove();
    });
  });

  // ITERATION 3 - Like Buttons
 const likeBtn = celebrityRow.querySelectorAll(".btn-like");
  likeBtn.forEach((button) => {
    button.addEventListener("click",() => {
      button.classList.toggle("selected");
    })
  });
// Bonus: ITERATION 4 - Add Random Contacts
  const randomBtn = document.getElementById("btn-add-random");
  const existingRow = document.getElementById("contacts")
  randomBtn.addEventListener("click", () => {
    const newRow = existingRow.cloneNode(true); // Clone the existing <tr> element
    const containerElm = document.getElementById("randomContact");
    containerElm.appendChild(newRow);
});
  });

