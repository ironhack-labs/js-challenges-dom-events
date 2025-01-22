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

const btn = document.getElementById("btn-add-random");
btn.addEventListener("click", () => {
console.log("you clicked");

  const randomIndex1 = Math.floor(Math.random() * contacts.length);
  
const newArr = contacts.splice(randomIndex1,1);
const newArrContact = newArr[0];
  const addRow= document.createElement("tr");
  addRow.innerHTML = `
    <td>
      <img src="${newArrContact.pictureUrl}" />
    </td>
    <td> ${newArrContact.name} </td>
    <td> ${newArrContact.popularity.toFixed(2)} </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;

  tableBody.appendChild(addRow);


}); 




// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...

threeContacts.forEach(contact => {
  const newRow = document.createElement ("tr");

  newRow.innerHTML = ` 
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
  tableBody.appendChild(newRow);

    
  const allBtn = newRow.querySelector(".btn-delete");
allBtn.addEventListener("click" , () => {
  newRow.remove();
  console.log(`${contact.name} was removed from Table`);
      });
      
    const likeBtn = newRow.querySelector(".btn-like");
      likeBtn.addEventListener("click" , () => {
        likeBtn.classList.toggle("selected");


      });

 

});


  
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
 
  
   
  

  // ITERATION 3 - Like Buttons

  // Your code goes here ...

  
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
