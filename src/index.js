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

const threeContactsList = contacts.splice(0, 3);

threeContactsList.forEach((eachContact) => {
  const newTableThreeContactsRow = document.createElement("tr");
  // console.log(newTableThreeContactsRow)

  newTableThreeContactsRow.innerHTML = `
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

  /*

  ISSUE
  the delete button event only workis within the new table, not the example table;
  it should be replicated inside other tables to work and linked to the specific table row

  */
  // delete button + addEventListener
  const btnDeleteNode = newTableThreeContactsRow.querySelector(".btn-delete")
  // const btnDeleteNode = document.querySelector(".btn-delete")
  console.log(btnDeleteNode)

  btnDeleteNode.addEventListener("click", () => {
    // console.log("click on delete!")

    newTableThreeContactsRow.remove()

  })


  tableBody.appendChild(newTableThreeContactsRow); // adds the rows to <tbody id="contacts">
});

  
  // ITERATION 2 - Delete Buttons
  // You will need to do this in the same loop where you are creating the new table rows. 
  // As soon as you create a new table row, you should also add an event listener to the 
  // delete button of that row.
  
  
  
  

  // ITERATION 3 - Like Buttons

  // Your code goes here ...

  
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
