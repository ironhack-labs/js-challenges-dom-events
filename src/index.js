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
const firstThreeContacts = contacts.splice(0, 3);


// Your code goes here ...
firstThreeContacts.forEach(contact => {
  const newRow = document.createElement("tr");

  newRow.innerHTML = `
  <td>
  <img src="${contact.pictureUrl}" />
</td>
<td>${contact.name}</td>
<td>${contact.popularity.toFixed(2)}</td>
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

const allDeleteBtn = newRow.querySelector('.btn-delete');
  allDeleteBtn.addEventListener('click', () => {
    newRow.remove();
  });

  const toggleHeart = newRow.querySelector('.btn-like');
  toggleHeart.addEventListener('click', () => {
    toggleHeart.classList.toggle('selected')
    console.log(toggleHeart.classList)
  })

});

  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
const randomBtnElement = document.getElementById('btn-add-random');

randomBtnElement.addEventListener('click', ()=> {
  console.log('der button geht', randomBtnElement)


const newRandom = document.createElement("tr");
newRandom.innerHTML = `
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
  </td>;

  tableBody.appendChild(newRandom);
`});


