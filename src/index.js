// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact1 = splicedArr[0];

//*********************** */

// buttonAddRandom.addEventListener('click', () => {
//   addNewRow.innerHTML = `
//     <td>
//     <img src="${randomContact1.pictureUrl}" />
//     </td>
//     <td> ${randomContact1.name} </td>
//     <td> ${randomContact1.popularity.toFixed(2)} </td>
//     <td>
//      <button class="btn-delete">Delete</button>
//    </td>
//    <td>
//      <button class="btn-like">
//         <img src="./images/icon.png" alt="like" />
//       </button>
//    </td>
//   `;

// tableBody.appendChild(exampleRow);
// });

//*******************************************8 */

const exampleRow = document.createElement("tr");
// exampleRow.innerHTML = `
//   <td>
//     <img src="${randomContact1.pictureUrl}" />
//   </td>
//   <td> ${randomContact1.name} </td>
//   <td> ${randomContact1.popularity.toFixed(2)} </td>
//   <td>
//     <button class="btn-delete">Delete</button>
//   </td>
//   <td>
//     <button class="btn-like">
//       <img src="./images/icon.png" alt="like" />
//     </button>
//   </td>
// `;

// tableBody.appendChild(exampleRow);





// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);


// Your code goes here ...

for (let i = 0; i < threeContacts.length; i++) {
  const newContact = threeContacts[i];
  const newRandomContact = document.createElement("tr");
  newRandomContact.innerHTML = `
    <td>
     <img src="${newContact.pictureUrl}" />
    </td>
    <td> ${newContact.name} </td>
    <td> ${newContact.popularity.toFixed(2)} </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
     <button class="btn-like">
       <img src="./images/icon.png" alt="like" />
     </button>
   </td>
  `;
  tableBody.appendChild(newRandomContact);

    // ITERATION 2 - Delete Buttons
  
    // Your code goes here ...

  const btnDeleteElement = newRandomContact.querySelector('.btn-delete');

  btnDeleteElement.addEventListener('click', () => {
    newRandomContact.remove();
  });

  // ITERATION 3 - Like Buttons

  // Your code goes here ...

  const btnLikeElement = newRandomContact.querySelector('.btn-like')
  btnLikeElement.addEventListener("click", () => {
  btnLikeElement.classList.toggle("selected");
});

};
  



  
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
