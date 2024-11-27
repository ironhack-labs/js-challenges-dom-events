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

threeContacts.forEach((currentContact) => {
  const threeRows = document.createElement('tr');
  threeRows.innerHTML = `
  <td>
  <img src = "${currentContact.pictureUrl}" alt="picture" />
  </td>
  <td>${currentContact.name}</td>
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
  tableBody.appendChild(threeRows);
})

  
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
  
  let deleteBtn = document.querySelectorAll('.btn-delete').forEach((deleteBtn)=> {deleteBtn.addEventListener('click', ()  => {
    deleteBtn.closest('tr').remove();
  });
  });

  // ITERATION 3 - Like Buttons

  // Your code goes here ...

  let likeBtn = document.querySelectorAll('.btn-like').forEach((likeBtn)=> {likeBtn.addEventListener('click', ()  => {
    likeBtn.classList.toggle('selected')
  })
  })
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
const randBtn = document.getElementById('btn-add-random');
randBtn.addEventListener('click', ()=>{
  const randIndex2 = Math.floor(Math.random() * contacts.length)
  const randomContact2 = contacts.splice(randIndex2, 1)[0];

  const randRow = document.createElement('tr');
  randRow.innerHTML = `
  <td>
  <img src = "${randomContact2.pictureUrl}" alt="picture" />
  </td>
  <td>${randomContact2.name}</td>
   <td> ${randomContact2.popularity.toFixed(2)} </td>
   <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
  `

  tableBody.appendChild(randRow);
  
  randRow.querySelector('.btn-delete').addEventListener('click', () => {
    randRow.remove(); 
  });
//it's too late and I need some sleep, sorry
}) 
