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

// Your code goes here ...

threeContacts.forEach(contac => {
  const newContacts = document.createElement("tr");
  newContacts.innerHTML = `
  <td>
    <img src="${contac.pictureUrl}" />
  </td>
  <td> ${contac.name} </td>
  <td> ${contac.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
  `;
  tableBody.appendChild(newContacts);

  // ITERATION 2 - Delete Buttons

  // Your code goes here ...
  const clickRemove = newContacts.querySelector('.btn-delete')

  clickRemove.onclick = () => newContacts.remove()

  // ITERATION 3 - Like Buttons

  // Your code goes here ...
  const clickLike = newContacts.querySelector('.btn-like')

  clickLike.onclick = () => clickLike.classList.toggle('selected')

}

)


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
//const buttonAddRandom = document.querySelector("#btn-add-random");

buttonAddRandom.onclick = () => {
  // Splice 1 element from the contacts array at the random index
  const randomIndexAdd = Math.floor(Math.random() * contacts.length);
  const splicedArrAdd = contacts.splice(randomIndexAdd, 1);
  
  // Get the element from the spliced array
  const randomContactAdd = splicedArrAdd[0];
  
  const exampleRowAdd = document.createElement("tr");
  exampleRowAdd.innerHTML = `
    <td>
      <img src="${randomContactAdd.pictureUrl}" />
    </td>
    <td> ${randomContactAdd.name} </td>
    <td> ${randomContactAdd.popularity.toFixed(2)} </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;
  
  tableBody.appendChild(exampleRowAdd);

  const clickRemove = exampleRowAdd.querySelector('.btn-delete')

  clickRemove.onclick = () => exampleRowAdd.remove()

  const clickLike = exampleRowAdd.querySelector('.btn-like')

  clickLike.onclick = () => clickLike.classList.toggle('selected')


}
