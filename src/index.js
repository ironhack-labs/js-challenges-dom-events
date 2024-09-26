// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

let overallCount = 0;
buttonAddRandom.onclick = () => addRandomContact();

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
addRandomContact();


// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
// const threeContacts = contacts.splice(0, 3);

// threeContacts.forEach((contact) => {
//   const tableRow = document.createElement("tr");
//   tableRow.innerHTML = `
//   <td>
//     <img src="${contact.pictureUrl}" />
//   </td>
//   <td> ${contact.name} </td>
//   <td> ${contact.popularity.toFixed(2)} </td>
//   <td>
//     <button class="btn-delete" id="btn-delete-${overallCount + 1}">Delete</button>
//   </td>
//   <td>
//     <button class="btn-like" id="btn-like-${overallCount + 1}">
//       <img src="./images/icon.png" alt="like" />
//     </button>
//   </td>
// `;
//   tableBody.appendChild(tableRow);

//   //delete button
//   deleteButtonElement = document.getElementById(`btn-delete-${overallCount + 1}`);
//   deleteButtonElement.onclick = () => {
//     tableRow.remove();
//   };

//   //like button
//   const likeButtonElement = document.getElementById(`btn-like-${overallCount + 1}`);
//   likeButtonElement.onclick = () => {
//     likeButtonElement.classList.toggle("selected");
//   };

//   overallCount++;
// });

// ITERATION 2 - Delete Buttons
//see above

// ITERATION 3 - Like Buttons
//see above



// Bonus: ITERATION 4 - Add Random Contacts


function addRandomContact() {
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
    <button class="btn-delete" id="btn-delete-${overallCount}">Delete</button>
  </td>
  <td>
    <button class="btn-like" id="btn-like-${overallCount}">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

  tableBody.appendChild(exampleRow);

  let deleteButtonElement = document.getElementById(`btn-delete-${overallCount}`);
  deleteButtonElement.onclick = () => {
    exampleRow.remove();
  };

  let likeButtonElement = document.getElementById(`btn-like-${overallCount}`);
  likeButtonElement.onclick = () => {
    likeButtonElement.classList.toggle("selected");
  };

  overallCount++;
}
