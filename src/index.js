// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");// crea una table, 
// innerHTML es lo que quiero crear en el HtML, todo el html que va a estar dentro del elemento 
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

//tableBody.appendChild(exampleRow); // sirve para agregar un nuevo hijo desde js a una etiqueta html





// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);
console.log (threeContacts)
// Your code goes here ...

for (let i = 0; i < threeContacts.length; i++){

  const contactoRow = document.createElement("tr");
contactoRow.innerHTML = `
  <td>
    <img src="${threeContacts[i].pictureUrl}" /> 
  </td>
  <td> ${threeContacts[i].name} </td>
  <td> ${threeContacts[i].popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;
tableBody.appendChild(contactoRow);


const botonEliminar = contactoRow.querySelector(".btn-delete")

botonEliminar.addEventListener("click", () => {
 contactoRow.remove()
})

const botonMeGusta = contactoRow.querySelector(".btn-like")

botonMeGusta.addEventListener("click", () => {
  botonMeGusta.classList.toggle(`selected`)
 })
 
}




  
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
  
  

  // ITERATION 3 - Like Buttons

  // Your code goes here ...

  
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
