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
threeContacts.forEach(Contact => {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
    <td>
      <img src="${Contact.pictureUrl}" />
    </td>
    <td> ${Contact.name} </td>
    <td> ${Contact.popularity.toFixed(2)} </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;
  tableBody.appendChild(newRow)
})

  
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
  const deleteBtn = document.querySelectorAll(".btn-delete")
  deleteBtn.forEach(btn => {
    btn.addEventListener("click", function() {
      const deleteRow = btn.closest("tr");
      deleteRow.remove();
    })
  })
  
  
  

  // ITERATION 3 - Like Buttons

  // Your code goes here ...
const likeBtn = document.querySelectorAll(".btn-like")
likeBtn.forEach(like => {
  like.addEventListener("click",function(){
    like.classList.toggle("selected")
  })
})
// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
const addrandomContent = document.querySelectorAll("#btn-add-random")
addrandomContent.forEach(add => {
  add.addEventListener("click",function(){


    const contactToAdd = Math.floor(Math.random() * contacts.length);
    const splicedArr = contacts.splice(contactToAdd, 1);
    const rContant = splicedArr[0]


    const newP  = document.createElement("tr");
    newP.innerHTML =`
    <td>
      <img src="${rContant.pictureUrl}" />
    </td>
      <td> ${rContant.name} </td>
      <td> ${rContant.popularity.toFixed(2)} </td>
      <td>
      <button class="btn-delete">Delete</button>
      </td>
      <td>
      <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
      </button>
    </td>
`; tableBody.appendChild(newP)
  })
})
