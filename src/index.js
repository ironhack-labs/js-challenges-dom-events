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
//Created a forEach method to iterate over the 3 contacts array
threeContacts.forEach(contact => {
  const threeRowAdd = document.createElement("tr");
  threeRowAdd.innerHTML = `
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
`
tableBody.appendChild(threeRowAdd);
});

// Your code goes here ...


  
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
function addDeleteFunction (row){
  row.querySelector(".btn-delete").addEventListener("click", () => {
    console.log("deleted");
    //remove is a method that removes that element, so call the element and use .remove()
    row.remove();
  })
  
}
tableBody.querySelectorAll(`tr`).forEach((row)=>{
  addDeleteFunction(row);
 })
  
  

  // ITERATION 3 - Like Buttons

  // Your code goes here ...
  function toggleLikeBtn (row){
    row.querySelector(".btn-like").addEventListener("click", ()=>{
      console.log("toggle clicked");
      row.querySelector(".btn-like").classList.toggle("selected")
    })
  }
  tableBody.querySelectorAll(`tr`).forEach((row)=>{
    toggleLikeBtn(row);
   })


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

buttonAddRandom.addEventListener("click", ()=>{
  const randContactNew = contacts.splice((Math.floor(Math.random() * contacts.length)), 1)[0];
// Creating a new row of contacts
  const randomRow = document.createElement("tr");
  randomRow.innerHTML = `
  <td>
    <img src="${randContactNew.pictureUrl}" />
  </td>
  <td> ${randContactNew.name} </td>
  <td> ${randContactNew.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

//Called the function to delete and toggle like
addDeleteFunction(randomRow);
toggleLikeBtn(randomRow);

tableBody.appendChild(randomRow);
})
