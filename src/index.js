// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
// const randomIndex = Math.floor(Math.random() * contacts.length);
// const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
// const randomContact = splicedArr[0];

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





// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...
threeContacts.forEach(contact => {
  const contactRow = document.createElement("tr");
  contactRow.innerHTML = `
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

  // ITERATION 2 - Delete Buttons
  // Your code goes here ...
  const deletButton = contactRow.querySelector(".btn-delete");
  deletButton.addEventListener("click", function (){
    contactRow.remove();
  })

  // ITERATION 3 - Like Buttons

  // Your code goes here ...
  const tagButton = contactRow.querySelector(".btn-like");
  tagButton.addEventListener("click", function (){
    tagButton.classList.toggle("selected")
  })




  tableBody.appendChild(contactRow);
});


  // Bonus: ITERATION 4 - Add Random Contacts

  // Your code goes here ...

buttonAddRandom.addEventListener("click", () => {

    if (contacts.length === 0) return;

    const randomIndex = Math.floor(Math.random() * contacts.length);
    const randomContact = contacts.splice(randomIndex, 1)[0];

    const contactRow = document.createElement("tr");
    contactRow.innerHTML = `
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

    // Add delete functionality to the newly added random contact
    const deleteButton = contactRow.querySelector(".btn-delete");
    deleteButton.addEventListener("click", function () {
      contactRow.remove();
    });

    // Add like functionality to the newly added random contact
    const likeButton = contactRow.querySelector(".btn-like");
    likeButton.addEventListener("click", function () {
      likeButton.classList.toggle("selected");
    });

    tableBody.appendChild(contactRow);
  });
