// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// // ITERATION 0 | Example Row
// // Splice 1 element from the contacts array at the random index
// const randomIndex = Math.floor(Math.random() * contacts.length);
// const splicedArr = contacts.splice(randomIndex, 1);

// // Get the element from the spliced array
// const randomContact = splicedArr[0];

// const exampleRow = document.createElement("tr");
// exampleRow.innerHTML = `
  // <td>
  //   <img src="${randomContact.pictureUrl}" />
  // </td>
  // <td> ${randomContact.name} </td>
  // <td> ${randomContact.popularity.toFixed(2)} </td>
  // <td>
  //   <button class="btn-delete">Delete</button>
  // </td>
  // <td>
  //   <button class="btn-like">
  //     <img src="./images/icon.png" alt="like" />
  //   </button>
  // </td>
// `;

// tableBody.appendChild(exampleRow);





// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...
const allContactsNode = document.getElementById("contacts");

threeContacts.forEach((eachContact) => {
  const newRow = document.createElement("tr");

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
  `;

  allContactsNode.appendChild(newRow);

  // ITERATION 2 - Delete Buttons
  const deleteButtonNode = newRow.querySelector(".btn-delete");
  //console.log(deleteButtonNode);
  deleteButtonNode.addEventListener("click", () => {
    newRow.remove(); 
  });

    // ITERATION 3 - Like Buttons

  // Your code goes here ...
  const likeButtonNode = newRow.querySelector(".btn-like");
  //console.log(likeButtonNode);
  likeButtonNode.addEventListener("click", () => {
    likeButtonNode.classList.toggle("selected");
    console.log("like");
  });

});

  // Bonus: ITERATION 4 - Add Random Contacts

  // Your code goes here ...

  buttonAddRandom.addEventListener("click", () => {
    // Obtener un contacto aleatorio del array restante de 'contacts'
    const randomIndex = Math.floor(Math.random() * contacts.length);
    const randomContact = contacts.splice(randomIndex, 1)[0]; // Remueve y obtiene un contacto aleatorio
  
    // Crear una nueva fila para el contacto aleatorio
    const newRow = document.createElement("tr");
  
    newRow.innerHTML = `
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
  
    // Agregar la nueva fila a la tabla
    allContactsNode.appendChild(newRow);
  
    // Añadir event listener al botón "Delete" de la nueva fila
    const deleteButtonNode = newRow.querySelector(".btn-delete");
    deleteButtonNode.addEventListener("click", () => {
      newRow.remove(); // Eliminar la fila
    });
  
    // Añadir event listener al botón "Like" de la nueva fila
    const likeButtonNode = newRow.querySelector(".btn-like");
    likeButtonNode.addEventListener("click", () => {
      likeButtonNode.classList.toggle("selected"); // Alternar la clase "selected"
    });
  });


  


