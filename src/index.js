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



// ITERATION 1 and 2 and 3 

// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

threeContacts.forEach(oneContact =>{
    const oneRow = document.createElement("tr");
    oneRow.innerHTML = `
    <td>
      <img src="${oneContact.pictureUrl}" />
    </td>
    <td> ${oneContact.name} </td>
    <td> ${oneContact.popularity.toFixed(2)} </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>`

    tableBody.appendChild(oneRow)

    const deleteButton = oneRow.querySelector('.btn-delete')
    deleteButton.addEventListener("click", ()=>{ oneRow.remove() })

    const likeButton = oneRow.querySelector('.btn-like')
    likeButton.addEventListener("click", ()=>{ likeButton.classList.toggle("selected") })
  })

  
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...


const randomButton = document.querySelector('#btn-add-random')
randomButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const splicedArr = contacts.splice(randomIndex, 1);
  const randomContact = splicedArr[0];

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

  const deleteButton = newRow.querySelector('.btn-delete')
  deleteButton.addEventListener("click", ()=>{ newRow.remove() })

  const likeButton = newRow.querySelector('.btn-like')
  likeButton.addEventListener("click", ()=>{ likeButton.classList.toggle("selected") })

  tableBody.appendChild(newRow);

})