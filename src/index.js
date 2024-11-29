// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

function createRow(contact){
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

  tableBody.appendChild(exampleRow);
    // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
  exampleRow.querySelector('.btn-delete').addEventListener("click", () => {
    exampleRow.remove(); });
  // ITERATION 3 - Like Buttons

  // Your code goes here ...
let  buttonLike = exampleRow.getElementsByTagName('button')[1]
    buttonLike.addEventListener(`click`, () => {
   // console.log( exampleRow.getElementsByTagName('button'))
    buttonLike.classList.toggle('selected');
  });

}

// Get the element from the spliced array
const randomContact = splicedArr[0];
createRow(randomContact);





// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);
// Your code goes here ...
threeContacts.forEach(function (currentContact){
  createRow(currentContact);  

})

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
buttonAddRandom.addEventListener('click', () => {
   let randomContactElement = contacts[Math.floor(Math.random() * contacts.length)]
   createRow(randomContactElement);
  });