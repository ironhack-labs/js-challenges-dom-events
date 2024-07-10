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
threeContacts.forEach((eachContact)=>{
const newRow = document.createElement("tr");
newRow.innerHTML=`
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
`

;
tableBody.appendChild(newRow);
 
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
  
const deleteButtonElement = newRow.querySelector(".btn-delete");
deleteButtonElement.onclick = function () {
  console.log("the button delete has been pressed");
newRow.remove();
}

  
  // ITERATION 3 - Like Buttons

  // Your code goes here ...

 
const likeButtonElement = newRow.querySelector(".btn-like");
likeButtonElement.onclick = function(){
  console.log("the like button has been pressed");
  likeButtonElement.classList.toggle("selected");
}
})

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

buttonAddRandom.onclick = function(){
  const randomRow = document.createElement("tr");
  const randomIndex2 = Math.floor(Math.random() * contacts.length);
  const randomContact2 = contacts[randomIndex2];
  randomRow.innerHTML = `
    <td>
      <img src="${randomContact2.pictureUrl}" />
    </td>
    <td> ${randomContact2.name} </td>
    <td> ${randomContact2.popularity.toFixed(2)} </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;
  
  tableBody.appendChild(randomRow);
  const deleteButtonElement = randomRow.querySelector(".btn-delete");
  deleteButtonElement.onclick = function () {
    console.log("the button delete has been pressed");
  randomRow.remove();
  }

  const likeButtonElement = randomRow.querySelector(".btn-like");
  likeButtonElement.onclick = function(){
    console.log("the like button has been pressed");
    likeButtonElement.classList.toggle("selected");
  }    
}
