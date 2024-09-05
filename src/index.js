// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");



// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
// const randomIndex = Math.floor(Math.random() * contacts.length);
// const splicedArr = contacts.splice(randomIndex, 1);

// // Get the element from the spliced array
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

// Your code goes here ...
// function addNewRow (contactCard,newContactLine) {
//   newContactLine.innerHTML = `
//   <td>
//     <img src="${contactCard.pictureUrl}" />
//   </td>
//   <td> ${contactCard.name} </td>
//   <td> ${Math.round(contactCard.popularity*100)/100} </td>
//   <td>
//     <button class="btn-delete">Delete</button>
//   </td>
//   <td>
//     <button class="btn-like">
//       <img src="./images/icon.png" alt="like" />
//     </button>
//   </td>
//   `;
// }


/*


deleteButton = newContactLine.querySelector(".btn-delete")
deleteButton.addEventListener("click", () => {
  newContactLine.remove()
})

*/
  
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
  // allRowsNodes = tableBody.querySelectorAll("tr")
  // console.log(allRowsNodes)
  // allRowsNodes.forEach((row) => {
  //   deleteButton = row.querySelector(".btn-delete")
  //   deleteButton.addEventListener("click", () => {
  //     row.remove()
  //   })
  // })
  

  // ITERATION 3 - Like Buttons

  // Your code goes here ...


    // likeButton = document.querySelector(".btn-like")
    // likeButton.addEventListener("click", () => {
    //   likeButton.classList.toggle(`selected`)
    // })
  
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
function addNewRow (contactCard,newContactLine){

  newContactLine.innerHTML = `
  <td>
  <img src="${contactCard.pictureUrl}" />
  </td>
  <td> ${contactCard.name} </td>
  <td> ${Math.round(contactCard.popularity*100)/100} </td>
  <td>
  <button class="btn-delete">Delete</button>
  </td>
  <td>
  <button class="btn-like">
  <img src="./images/icon.png" alt="like" />
  </button>
  </td>
  `;
  
  const deleteBtnNode = newContactLine.querySelector(".btn-delete");
  deleteBtnNode.addEventListener("click", () => {
    newContactLine.remove();
  });
  
  const likeBtnNode = newContactLine.querySelector(".btn-like");
  likeBtnNode.addEventListener("click", ()=>{
    likeBtnNode.classList.toggle("selected");
  });
}


buttonAddRandom.addEventListener("click", () => {
  
  const randomIndex = Math.floor(Math.random() * (contacts.length));
  const contactCard = contacts.splice(randomIndex, 1)[0];
  const newContactLine = document.createElement("tr");
  
  addNewRow (contactCard,newContactLine)
  
  tableBody.appendChild(newContactLine)
})


for (i=0;i<3;i++){
buttonAddRandom.click()
}