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
  const oneRow = document.createElement("tr");
  oneRow.innerHTML = `
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

tableBody.appendChild(oneRow);

const BtnLike = oneRow.querySelector(".btn-like")
BtnLike.addEventListener("click", () => {

  BtnLike.classList.toggle("selected")

})
console.log(BtnLike)
const removeBtnDelete = oneRow.querySelector(".btn-delete")
  removeBtnDelete.addEventListener("click", () => {
  
    oneRow.remove()
  
  })
 
});




  
  // ITERATION 2 - Delete Buttons
  
  const removeBtnDelete = exampleRow.querySelector(".btn-delete")
  removeBtnDelete.addEventListener("click", () => {
  
    exampleRow.remove()
  
  })
  
  

  // ITERATION 3 - Like Buttons

  const BtnLike = exampleRow.querySelector(".btn-like")
  BtnLike.addEventListener("click", () => {
  
    BtnLike.classList.toggle("selected")
  
  })
  
  


// Bonus: ITERATION 4 - Add Random Contacts
 const btnAddRandom = document.querySelector("#btn-add-random")
  btnAddRandom.addEventListener("click", () => {
    const buttom = Math.floor(Math.random() * contacts.length);
    const splicedArr = contacts.splice(randomIndex, 1);
    

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
    
})
