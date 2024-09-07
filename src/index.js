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

const deleteButtonNode1 = exampleRow.querySelector(".btn-delete")
deleteButtonNode1.addEventListener("click",() => {
  exampleRow.remove()
})
let likeButtonNode1 = exampleRow.querySelector(".btn-like")
  likeButtonNode1.addEventListener("click",() =>{
    likeButtonNode1.classList.toggle("selected")

})



// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...

threeContacts.forEach((famosos) => {
  console.log(famosos)
  const nuevoContacto = document.createElement("tr");
  nuevoContacto.innerHTML = `
    <td>
      <img src="${famosos.pictureUrl}" />
    </td>
    <td> ${famosos.name} </td>
    <td> ${famosos.popularity.toFixed(2)} </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;
  
  tableBody.appendChild(nuevoContacto);
  const deleteButtonNode = nuevoContacto.querySelector(".btn-delete")
  deleteButtonNode.addEventListener("click",() => {
    nuevoContacto.remove()
  })
  let likeButtonNode = nuevoContacto.querySelector(".btn-like")
  likeButtonNode.addEventListener("click",() =>{
    likeButtonNode.classList.toggle("selected")
  })

});



  
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...


 

  
 



  

  // ITERATION 3 - Like Buttons

  // Your code goes here ...

  
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
addRandomPeopleNode = document.querySelector("#btn-add-random")

addRandomPeopleNode.addEventListener("click",() =>{
  exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>g
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
`
tableBody.appendChild(exampleRow)
;
})
