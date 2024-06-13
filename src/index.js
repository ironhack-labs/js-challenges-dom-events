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
threeContacts.forEach(currentContact => {
  const newRow = document.createElement("tr");
newRow.innerHTML = `
  <td>
    <img src="${currentContact.pictureUrl}" />
  </td>
  <td> ${currentContact.name} </td>
  <td> ${currentContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(newRow);

newRow.querySelector('.btn-delete').addEventListener('click', function() {
  newRow.remove()
})


})


  
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
  // Inside last forEach
  
  

  // ITERATION 3 - Like Buttons

  // Your code goes here ...
   document.querySelectorAll('tbody tr').forEach(currentRow => {
    const btnLike = currentRow.querySelector('.btn-like')
      btnLike.addEventListener('click', function(){

        btnLike.classList.toggle('selected')
      })
  })
 
  
  
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
const rndBtm = document.querySelector('#btn-add-random')
    rndBtm.addEventListener('click', function(){
      const addRndIndx = Math.floor(Math.random() * contacts.length);
const rndCntct = contacts.splice(addRndIndx, 1);

const finalCntct = rndCntct[0];

const finalRow = document.createElement("tr");
finalRow.innerHTML = `
  <td>
    <img src="${finalCntct.pictureUrl}" />
  </td>
  <td> ${finalCntct.name} </td>
  <td> ${finalCntct.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(finalRow);

finalRow.querySelector('.btn-delete').addEventListener('click', function() {
  finalRow.remove()
})

finalRow.querySelector('.btn-like').addEventListener('click', function() {
  finalRow.querySelector('.btn-like').classList.toggle('selected')
})


      
})


