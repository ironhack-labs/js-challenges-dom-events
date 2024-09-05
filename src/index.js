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

threeContacts.forEach((elem) => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
  <td>
    <img src="${elem.pictureUrl}" />
  </td>
  <td> ${elem.name} </td>
  <td> ${elem.popularity.toFixed(2)} </td>
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
  let deleteButton = document.querySelector("btn-delete");
  deleteButton.addEventListener("click", () => {
    newRow.remove();
  });
  let likeButton = document.querySelector("btn-like");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("btn-like");
    likeButton.classList.toggle("btn-like selected");
  });
});

// Your code goes here ...

// ITERATION 2 - Delete Buttons

// Your code goes here ...

// ITERATION 3 - Like Buttons

// Your code goes here ...

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

Iteración 0: Fila de ejemplo

¡Buen trabajo en la Iteración 0! Ha logrado extraer un contacto aleatorio del array contactsy ha creado una fila en la tabla con él. Además, agregue la funcionalidad para eliminar y agregar el estilo selectedal presionar los botones correspondientes. Sin embargo, asegúrese de usar querySelectorcorrectamente; en tu código actual se busca el botón 'btn-delete'y 'btn-like'globalmente en lugar de solo en la fila recién creada. Intenta hacer que la selección del botón query solo para la fila actual usandoexampleRow.querySelector(...).

¿Fue útil este comentario?
Iteración 1: Mostrar 3 contactos

¡Has avanzado mucho en la Iteración 1! Lograste obtener los primeros tres contactos del array contactsy crea filas con ellos en la tabla. Sin embargo, parece que hay una pequeña confusión al seleccionar los botones 'btn-delete'y 'btn-like'. En lugar de querySelectorseleccionar el primer elemento que coincide en el DOM, deberías usar newRow.querySelectorpara apuntar a los elementos en la fila recién creada. Aquí hay una muestra de cómo podrías mejorar esto:

1
2
3
4
5
6
7
8
let deleteButton = newRow.querySelector('.btn-delete');
deleteButton.addEventListener('click', () => {
  newRow.remove();
});
let likeButton = newRow.querySelector('.btn-like');
likeButton.addEventListener('click', () => {
  newRow.classList.toggle('selected');
});
¡Sigue así!

¿Fue útil este comentario?
Iteración 2: Botones de eliminación

¡Buen intento en la Iteración 2! La funcionalidad del botón eliminar está casi ahí. Al usar querySelectordentro de la fila recién creada (como en el feedback de la Iteración 1), puedes asegurarte de que solo se punte al botón eliminar de esa fila específica. Además, recuerda usar correctamente classListpara manipular las clases de los elementos. Asegúrate de agregar el event listener al botón eliminar dentro del bucle que crea la fila. Revisa el siguiente ejemplo de orientación:

1
2
3
4
const deleteButton = newRow.querySelector('.btn-delete');
deleteButton.addEventListener('click', () => {
  newRow.remove();
});
¡Continúa trabajando, estás casi ahí!

¿Fue útil este comentario?
Iteración 3: Botones "Me gusta"

¡Bien hecho en la Iteración 3! Aunque agregaste funcionalidad para los botones de 'Me gusta', esto no es completamente correcto. La propiedad classList.toggleaquí es clave para asegurarte de que una clase adicional selectedse añada al presionar el botón. Asegúrese de focalizar el botón dentro de la fila correcta y no todos los botones de la página al mismo tiempo. Aquí tienes un pequeño ejemplo para mayor claridad:

1
2
3
4
const likeButton = newRow.querySelector('.btn-like');
likeButton.addEventListener('click', () => {
  likeButton.classList.toggle('selected');
});
¡Buen trabajo hasta ahora! ¡Sigue así!

¿Fue útil este comentario?
Bono: Iteración 4 | Agregar contactos aleatorios

Aún no se ha realizado la Iteración 4. Intenta implementar la funcionalidad para agregar un contacto aleatorio cuando se presiona el botón 'Add Random Contact'. ¡Ánimo!



