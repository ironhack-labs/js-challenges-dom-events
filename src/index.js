// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length); // esto nos dá un indice random del array contacts
const splicedArr = contacts.splice(randomIndex, 1);              // splice devuelve un array con el elemento eliminado,            

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
const threeContacts = contacts.splice(0, 3); // se eliminan los elementos en las posiciones 0,1,2

// Your code goes here ...

threeContacts.forEach(artist => {  // hacemos lo mismo que hicimos arriba pero con tres artistas, ayudandonos con forEach para repetirlo en cada iteracion
  const exampleRow2 = document.createElement("tr");
  exampleRow2.innerHTML = `
  <td>
    <img src="${artist.pictureUrl}" />
  </td>
  <td> ${artist.name} </td>
  <td> ${artist.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;
tableBody.appendChild(exampleRow2);

// ITERATION 2 - Delete Buttons
const deleteButton = exampleRow2.querySelector(".btn-delete");

  deleteButton.addEventListener("click", ()=> {
    exampleRow2.remove();
  })


  // ITERATION 3 - Like Buttons
  const likeButton = exampleRow2.querySelector(".btn-like");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("selected");
  });
})



  
  
  
  
  
  



  
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
