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

for (let i = 0; i < threeContacts.length; i++) {
  const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>
        <img src="${threeContacts[i].pictureUrl}" />
      </td>
      <td> ${threeContacts[i].name} </td>
      <td> ${threeContacts[i].popularity.toFixed(2)} </td>
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


  
  // ITERATION 2 - Delete Buttons
  
  const deleteRow = newRow.querySelector(".btn-delete");
  deleteRow.addEventListener("click", (event)=>{
    const row = event.target.closest("tr");
    if (row) {
      row.remove();
    }
  });

  

  // ITERATION 3 - Like Buttons

  const likeButton = newRow.querySelector(".btn-like");

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("selected");
  });
}
  
  


// Bonus: ITERATION 4 - Add Random Contacts

const randomButton = document.getElementById("btn-add-random");

randomButton.addEventListener("click", () => {
  
  const extraRow = document.createElement("tr");
    extraRow.innerHTML = `
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
  tableBody.appendChild(extraRow);
})
