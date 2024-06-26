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


threeContacts.forEach((eachContact)=> {
  const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
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

tableBody.appendChild(exampleRow);

});




  
  // ITERATION 2 - Delete Buttons
  
  const removeBtnDelete = exampleRow.querySelector("btn-delete")
  removeBtnDelete.addEventListener("click", () => {
  
    exampleRow.querySelector("#contacts tr").remove()
  
  })
  
  

  // ITERATION 3 - Like Buttons

  const BtnLike = document.querySelector("btn-like")
  BtnLike.addEventListener("click", () => {
  
    BtnLike.classList.toggle("btn-like selected")
  
  })
  
  


// Bonus: ITERATION 4 - Add Random Contacts
const btnAddRandom = document.querySelector("btn-add-random")
btnAddRandom.addEventListener("click", () => {
 const random1 = contacts.splice(Math.floor(Math.random() * contacts.length),1)[0]
})