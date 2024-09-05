// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");// hi ha el botó dins la variable
const tableBody = document.querySelector("tbody#contacts");//hi ha el cos de la taula que a l'inici del lab esta buida


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);// a la variable hi ha un número aleatori que va del 0 fins a l'úultim num de contactes
const splicedArr = contacts.splice(randomIndex, 1);//sPlice, no slice!! -> elimina el contacte indexat al número aleatori que s'ha generat i el guarda a la variable nova 

// Get the element from the spliced array
const randomContact = splicedArr[0]; // d'aquesta manera tinc accés a l'objecte, no a un array

const exampleRow = document.createElement("tr");// crea una fila i a la línia següent, posa dins d'aquesta línia nova creada (que hem guardat a la variable) diverses cel·les que tenen el seu contingut corresponent
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
//linia 16 és la 1a cel·la (on hi ha la foto), la línia 19 és la 2a (nom actor/actriu)...
//toFixed(2) era perq imprimís només dos decimals
tableBody.appendChild(exampleRow);


// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3); // dins aquesta variable hi ha els 3

// Your code goes here ...
threeContacts.forEach ((eachContact)=>{
  const newRow = document.createElement("tr")
  newRow.innerHTML = `
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
  tableBody.appendChild(newRow)

  // ITERATION 2 - Delete Buttons
  // Your code goes here ...

  const deleteButton = newRow.querySelector(".btn-delete")//si poso document. farà el 1r que trobi, posem newRow per assegurar que soc a la fila que estic creant
    deleteButton.addEventListener("click", ()=>{
      newRow.remove()
    })

    // ITERATION 3 - Like Buttons
    // Your code goes here ...

  const likeButton = newRow.querySelector(".btn-like")
  likeButton.addEventListener("click", ()=>{
    console.log("clicant")
    newRow.classList.toggle("selected")
  })

})

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
