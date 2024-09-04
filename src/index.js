// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

// const exampleRow = document.createElement("tr");
// exampleRow.innerHTML = `
//   <td>
//     <img src="${randomContact.pictureUrl}" />
//   </td>
//   <td> ${randomContact.name} </td>
//   <td> ${randomContact.popularity.toFixed(2)} </td>
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



// ------------------------------------------------------------------------------------------
// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.

const newContactsList = contacts.splice(0, 3);

newContactsList.forEach((eachContact) => {
  const newContactsListRow = document.createElement("tr");
  // console.log(newContactsListRow)

  newContactsListRow.innerHTML = `
    <td>
      <img src="${eachContact.pictureUrl}" />
    </td>
    <td> ${eachContact.name} </td>
    <td> ${eachContact.popularity.toFixed(2)} </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;

// ------------------------------------------------------------------------------------------
  // DELETE button + addEventListener
  const btnDeleteNode = newContactsListRow.querySelector(".btn-delete");
  // const btnDeleteNode = document.querySelector(".btn-delete")
  // console.log(btnDeleteNode)ç

  btnDeleteNode.addEventListener("click", () => {
    // console.log("click on delete!")

    newContactsListRow.remove();
  });

  // ------------------------------------------------------------------------------------------
  // LIKE button + addEventListener
  const btnLikeNode = newContactsListRow.querySelector(".btn-like");
  // console.log(btnLikeNode)

  btnLikeNode.addEventListener("click", () => {
    btnLikeNode.classList.toggle("selected");
  });

  tableBody.appendChild(newContactsListRow); // adds the rows to <tbody id="contacts">
});


// ------------------------------------------------------------------------------------------
  // ITERATION 2 - Delete Buttons
  // You will need to do this in the same loop where you are creating the new table rows. 
  // As soon as you create a new table row, you should also add an event listener to the 
  // delete button of that row.
  // --> see iteration 1
  
  
// ------------------------------------------------------------------------------------------
  // ITERATION 3 - Like Buttons
  // same as delete buttons; see iteration 1

  
// ------------------------------------------------------------------------------------------
// Bonus: ITERATION 4 - Add Random Contacts

buttonAddRandom.addEventListener("click", () => {

  // const randomIndex = Math.floor(Math.random() * contacts.length); // variable declared above globally
  const randomContact = contacts.splice(randomIndex, 1)[0]; // exctracts one random contact and removes it from the list

  // console.log(contacts.length)
  const newContactsListRow = document.createElement("tr");

  newContactsListRow.innerHTML = `
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

  // DELETE button + addEventListener
  const btnDeleteNode = newContactsListRow.querySelector(".btn-delete");
  btnDeleteNode.addEventListener("click", () => {
    newContactsListRow.remove();
  });

  // LIKE button + addEventListener
  const btnLikeNode = newContactsListRow.querySelector(".btn-like");
  btnLikeNode.addEventListener("click", () => {
    btnLikeNode.classList.toggle("selected");
  });

  tableBody.appendChild(newContactsListRow); // adds the new row to <tbody id="contacts">
});