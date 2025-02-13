// HTML ELEMENTS

// El boton donde hacemos click
const buttonAddRandom = document.querySelector("#btn-add-random"); 
// La tabla donde insertamos el nuevo elemento
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1); //Sacamos un contact del array

// Get the element from the spliced array
const randomContact = splicedArr[0]; // Random Contact es lo que meteremos dentro de la tabla

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



const borrarBotonExample = exampleRow.querySelector(".btn-delete");

    borrarBotonExample.addEventListener ("click", () => {
      //console.log("Estamos BORRANDO esta FILA");

      exampleRow.remove();
    })



// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

//const primerContacto = threeContacts[0];

// Your code goes here ...

for (let i=0; i<threeContacts.length; i++) {

    const filaAInsertar = document.createElement("tr");
    filaAInsertar.innerHTML = `
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

    tableBody.appendChild(filaAInsertar);


    // ITERACIÓN 2

    const borrarBoton = filaAInsertar.querySelector(".btn-delete");

    borrarBoton.addEventListener ("click", () => {
      //console.log("Estamos BORRANDO esta FILA");

      filaAInsertar.remove();
    })

    // ITERACIÓN 3

    const likeBoton = filaAInsertar.querySelector(".btn-like");

    likeBoton.addEventListener ("click", () => {

      console.log("Le estás ando al botón LIKE");

      filaAInsertar.classList.toggle(".btn-like");

    })

}



  
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...


  
  

  // ITERATION 3 - Like Buttons

  // Your code goes here ...

  
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
