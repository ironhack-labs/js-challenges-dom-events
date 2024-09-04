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

tableBody.appendChild(exampleRow);





// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3); // dins aquesta variable hi ha els 3

// Your code goes here ...


  
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
  
  

  // ITERATION 3 - Like Buttons

  // Your code goes here ...

  
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
