// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random"); // button (Add Random Contact)
const tableBody = document.querySelector("tbody#contacts"); // etiqueta <tbody> con id= "contacts"


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length); // genera un numero aleatorio basado en la cantidad de elementos que existan en la array contacts
const splicedArr = contacts.splice(randomIndex, 1); // corta, de forma aleatoria, un contacto de la array contacts

// Get the element from the spliced array
const randomContact = splicedArr[0]; // agarra el primer elemento de la splicedArr utilizando indice 0

const exampleRow = document.createElement("tr"); //crea una variable para el ejemplo que percorre todo el documento y crea un elemento "tr"
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
`; //aqui forma toda la estructura HTML que será creada a la hora de crear el elemento una vez se dê la acción.

tableBody.appendChild(exampleRow);
//.appendChild( )  se utiliza para añadir un nodo hijo al final de la lista de hijos de un nodo padre. Es una forma de construir y manipular dinámicamente el DOM en una página web.
// sintaxis => parentNode.appendChild(childNode);
  // parentNode: el nodo padre que deseas añadir el hijo
  // childnode: el nodo que será añadido como hijo




// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...
threeContacts.forEach((eachContact) => {
  const newRow = document.createElement("tr");
    newRow.innerHTML = `
    <td id="${eachContact}">
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
    // console.log("test")
    tableBody.appendChild(newRow);

  
  
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
  const deleteBtn = newRow.querySelector(".btn-delete");

    deleteBtn.addEventListener('click', () => {
      newRow.remove();
    });

  // ITERATION 3 - Like Buttons

  // Your code goes here ...
  const likeBtn = newRow.querySelector(".btn-like");

  likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle("selected");
  });

  
});

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
