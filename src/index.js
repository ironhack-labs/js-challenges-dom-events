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
/*Let's start by displaying the first 3 contacts in the table. To do so, you will need to:

Get the first 3 contacts from the contacts array.
You can use the splice() method for this. Remember that the splice() method modifies the original array, and returns the results as a new array.
Iterate over the newly obtained array of 3 contacts and, for each contact, create a new table row and append it to the table body.
You can use the Iteration 0 code as an example of how to create a new table row and what its structure should be.
Append each new table row to the table body. You can use the appendChild() method for this.
*/
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3); //SELECCIONA LOS TRES PRIMEROS CONTACTOS CONTANDO DESDE EL PRIMERO DEL ARRAY CONTACS. 

// Your code goes here ...

for (let i = 0; i < threeContacts.length; i++) { //Con FOR recorro el array de tres contactos. Puedo probar con ForEach. 

  threeContacts[i]; //CADA UNO DE LOS ELEMENTOS DEL ARRAY. 

  const newThreeRows = document.createElement("tr"); 

  newThreeRows.innerHTML = `
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

  tableBody.appendChild(newThreeRows); //COLOCO LOS TRES NUEVOS ELEMENTOS. 


  
  
  // ITERATION 2 - Delete Buttons
  /*
  As you can see, each row has a Delete button. However, the buttons don't do anything yet. Let's fix that! Your task in this iteration is to add an event listener to each Delete button so that, when clicked, the corresponding row is removed from the table. You will need to do this in the same loop where you are creating the new table rows. As soon as you create a new table row, you should also add an event listener to the delete button of that row. Here are the steps you should follow:

  Get the Delete button element from a newly created row.
  After creating a new table row, you can call the querySelector() method on the newly created table row to search for the Delete button only inside that row, like this: newRow.querySelector(...).
  Add an event listener to the Delete button element, for the click event.
  You can use the addEventListener() method for this.
  When the Delete button is clicked, the row element should be removed from the table.
  You can use the remove() method for this.
  */
  // Your code goes here ...
  
  const deleteButton = newThreeRows.querySelector(".btn-delete"); //CON ESTO CAPTURO EL ELEMENTO DEL BOTÓN DE BORRADO. SI EMPLEO GETELEMENTSBYCLASSNAME SOLAMENTE ME MUESTRA UN ELEMENTO NUEVO Y NO FUNCIONA EL BOTÓN DE BORRADO.

  
  deleteButton.addEventListener("click", function() {
    newThreeRows.remove(); 
  });



  // ITERATION 3 - Like Buttons
  /*
  Now that you have the Delete buttons working, let's move on to the Like buttons. Your task in this iteration is to repeat the process you followed in the previous iteration, but for the Like buttons. When clicked the Like button should toggle (add or remove) the class "selected" on the corresponding row. You will need to do this in the same loop where you are creating the new table rows. As soon as you create a new table row, you should also add an event listener to the Like button of that row. Here are the steps you should follow:

  Get the Like button element from a newly created row.
  Add an event listener to the Like button element, for the click event.
  When the Like button is clicked, the class of the row element should be toggled between class="btn-like" and class="btn-like selected". You can use the element.classList.toggle() method for this.
  The class selected will make the button appear red when clicked and gray (original color) when clicked again. You can see the CSS styles for the selected class in the style.css file.
  */
  // Your code goes here ...

  const likeButton = newThreeRows.querySelector(".btn-like");

  likeButton.addEventListener("click", function() {

      newThreeRows.classList.toggle(".btn-like.selected"); //NO FUNCIONA 

  }); 

}
 



// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

