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
//const threeContacts = contacts.splice(0, 3);

// Your code goes here ...
const copyContacts = [...contacts];
//console.table(copyContacts);
const pieceContacts = copyContacts.splice(0,3);
pieceContacts.forEach(element => {
  const exampleRow = document.createElement("tr");
  exampleRow.innerHTML = `
    <td>
      <img src="${element.pictureUrl}" />
    </td>
    <td> ${element.name} </td>
    <td> ${element.popularity.toFixed(2)} </td>
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
});

  
// ITERATION 2 - Delete Buttons

// Your code goes here ...
const tableRow = document.querySelectorAll('tr');

for (let i = 1; i < tableRow.length; i++) {
  console.log(tableRow[i]);
  let deleteButtonTarget = tableRow[i].querySelector('.btn-delete');
  deleteButtonTarget.addEventListener("click", () => {
    tableBody.removeChild(tableRow[i]);
  });
}



// ITERATION 3 - Like Buttons

// Your code goes here ...
for (let i = 1; i < tableRow.length; i++) {
  let likeButtonTarget = tableRow[i].querySelector('.btn-like');
  likeButtonTarget.onclick = () => {
    if (likeButtonTarget.className === 'btn-like') {
      likeButtonTarget.classList.add('selected');
    } else {
      likeButtonTarget.classList.remove('selected');
    }
  };
}

  
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
