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



threeContacts.forEach((contact) => {
  const constNewRow = document.createElement("tr")
  constNewRow.innerHTML = `
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

tableBody.appendChild(constNewRow);

const removeBtn = constNewRow.querySelector(".btn-delete")
removeBtn.addEventListener("click", ()=>{
  constNewRow.remove()
})


const likeButton = constNewRow.querySelector(".btn-like")

likeButton.addEventListener("click",() => {
  likeButton.classList.toggle("selected")
})





})

// ITERATION 2 - Delete Buttons

// Your code goes here ...


  // ITERATION 3 - Like Buttons

  // Your code goes here ...

  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
const randomNode = document.querySelector("#btn-add-random")
randomNode.addEventListener("click", () => {

  const randomSplicedArr = contacts.splice(randomIndex, 1) 
  const randomContact = randomSplicedArr[0];
  const randomContactNode = document.createElement("tr")
  randomContactNode.innerHTML = `
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
  
  tableBody.appendChild(randomContactNode);
  
  const removeBtn = randomContactNode.querySelector(".btn-delete")
  removeBtn.addEventListener("click", ()=>{
    randomContactNode.remove()
  })
  
  
  const likeButton = randomContactNode.querySelector(".btn-like")
  
  likeButton.addEventListener("click",() => {
    likeButton.classList.toggle("selected")
  })
  
})
  
