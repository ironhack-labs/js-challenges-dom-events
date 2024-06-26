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

threeContacts.forEach((eachContact) => {
  const threeRow = document.createElement("tr");
  threeRow.innerHTML = `
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
  tableBody.appendChild(threeRow);

})



  
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
 
  const removeBtnDelete = document.querySelectorAll(".btn-delete");
   
  removeBtnDelete.forEach((eachButton) => {
    eachButton.addEventListener("click", () => {

      eachButton.parentNode.parentNode.remove();

    })
  });
  
  /* removeBtnDelete.addEventListener("click", () => {
     const removedItem = document.querySelector("tbody tr");
     console.log(removedItem)

     removedItem.remove();
   }) */
  
  

  // ITERATION 3 - Like Buttons

  // Your code goes here ...

  const likeBtn = document.querySelectorAll(".btn-like");
   
  likeBtn.forEach((eachButton) => {
    console.log(eachButton)
    eachButton.addEventListener("click", () => {

      eachButton.classList.toggle("selected");
    })
  });
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

const randomBtnAdd = document.querySelector("#btn-add-random");

randomBtnAdd.addEventListener("click", () => {
  
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

const removeBtnDelete = document.querySelectorAll(".btn-delete");
   
removeBtnDelete.forEach((eachButton) => {
  eachButton.addEventListener("click", () => {

    eachButton.parentNode.parentNode.remove();

  })
});

const likeBtn = document.querySelectorAll(".btn-like");
   
likeBtn.forEach((eachButton) => {
  console.log(eachButton)
  eachButton.addEventListener("click", () => {

    eachButton.classList.toggle("selected");
  })
});
});
