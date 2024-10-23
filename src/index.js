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

  const deleteButton = exampleRow.querySelector(".btn-delete")
  deleteButton.addEventListener("click", ()=>{
  tableBody.removeChild(exampleRow)
  });
  
  const likeButton =  exampleRow.querySelector(".btn-like")
  likeButton.addEventListener("click", ()=>{
    likeButton.classList.toggle("selected")
  });


// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...

// threeContacts.forEach((contact)=>{

//   const contactRow = document.createElement("tr")
//   contactRow.innerHTML = `
//     <td>
//       <img src="${contact.pictureUrl}" />
//     </td>
//     <td> ${contact.name} </td>
//     <td> ${contact.popularity.toFixed(2)} </td>
//     <td>
//       <button class="btn-delete">Delete</button>
//     </td>
//     <td>
//       <button class="btn-like">
//         <img src="./images/icon.png" alt="like" />
//       </button>
//     </td>
//   `;
//   tableBody.appendChild(contactRow);

// });


// ITERATION 2 - Delete Buttons

// threeContacts.forEach((contact)=>{

//   const contactRow = document.createElement("tr")
//   contactRow.innerHTML = `
//     <td>
//       <img src="${contact.pictureUrl}" />
//     </td>
//     <td> ${contact.name} </td>
//     <td> ${contact.popularity.toFixed(2)} </td>
//     <td>
//       <button class="btn-delete">Delete</button>
//     </td>
//     <td>
//       <button class="btn-like">
//         <img src="./images/icon.png" alt="like" />
//       </button>
//     </td>
//   `;
//   tableBody.appendChild(contactRow);
  
//   const deleteButton = contactRow.querySelector(".btn-delete")
//   deleteButton.addEventListener("click", ()=>{
//   tableBody.removeChild(contactRow)
//   });
  
// });



// ITERATION 3 - Like Buttons

threeContacts.forEach((contact)=>{

  const contactRow = document.createElement("tr")
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
  tableBody.appendChild(contactRow);
  
  const deleteButton = contactRow.querySelector(".btn-delete")
  deleteButton.addEventListener("click", ()=>{
  tableBody.removeChild(contactRow)
  });
  
  const likeButton =  contactRow.querySelector(".btn-like")
  likeButton.addEventListener("click", ()=>{
    likeButton.classList.toggle("selected")
  });

});


// Bonus: ITERATION 4 - Add Random Contacts



// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
// const randomIndex = Math.floor(Math.random() * contacts.length);
// const splicedArr = contacts.splice(randomIndex, 1);

// // Get the element from the spliced array
// const randomContact = splicedArr[0];


// Get the element from the spliced array

buttonAddRandom.addEventListener("click", ()=>{

  const anotherRandomIndex = Math.floor(Math.random() * contacts.length);
  const anotherSplicedArr = contacts.splice(anotherRandomIndex, 1);
  const anotherRandomContact = anotherSplicedArr[0];

  const newContactRow = document.createElement("tr")
  newContactRow.innerHTML = `
    <td>
      <img src="${anotherRandomContact.pictureUrl}" />
    </td>
    <td> ${anotherRandomContact.name} </td>
    <td> ${anotherRandomContact.popularity.toFixed(2)} </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;
  tableBody.appendChild(newContactRow);
  
  const deleteButton = newContactRow.querySelector(".btn-delete")
  deleteButton.addEventListener("click", ()=>{
  tableBody.removeChild(newContactRow)
  });
  
  const likeButton =  newContactRow.querySelector(".btn-like")
  likeButton.addEventListener("click", ()=>{
    likeButton.classList.toggle("selected")
  });
});