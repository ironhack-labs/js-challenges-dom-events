// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);



const threeContacts = contacts.splice(0, 4);

 threeContacts.forEach(contact => {
  
  const exampleRow = document.createElement("tr");
  exampleRow.innerHTML = `
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

  const $deleteButton = exampleRow.querySelector('.btn-delete');
  $deleteButton.addEventListener('click', () => {
    exampleRow.remove();
  });

  const $likeButton = exampleRow.querySelector('.btn-like');
    $likeButton.addEventListener('click', () => {
      $likeButton.classList.toggle('selected');
    });

  tableBody.appendChild(exampleRow);
  });
  
  

  
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
