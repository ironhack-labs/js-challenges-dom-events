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
const firstContacts = threeContacts;
console.log('Array with three contacts: ', firstContacts);
firstContacts.forEach(elem => {
  const newRow = document.createElement("tr");
  newRow.innerHTML =`
  <td> <img src="${elem.pictureUrl}" />
  </td><td> ${elem.name} </td>
  <td> ${elem.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td> 
    <button class="btn-like"><img src="./images/icon.png" alt="like" />
    </button>
    </td>
  `;
  tableBody.appendChild(newRow);

  // ITERATION 2 - Delete Buttons
  const button = newRow.querySelector(".btn-delete");
  button.addEventListener("click", () => {
    console.log ("button delete clicked");
    newRow.remove(tableBody);

  });

  // ITERATION 3 - Like Buttons
const likeButton = newRow.querySelector (".btn-like");
likeButton.addEventListener("click", () => {
  console.log ("button like clicked");
  const toggleElement = newRow.querySelector(".btn-like")
  if (toggleElement.classList.contains("selected")) {  //classList takes the class within "."
      toggleElement.classList.remove("selected");
} else {
  toggleElement.classList.add("selected");}
});
}); //cierra linea 42


// Bonus: ITERATION 4 - Add Random Contacts
const randomButton = document.querySelector("#btn-add-random");
randomButton.addEventListener("click", () => {
const randomIndex = Math.floor(Math.random()*contacts.length);
const randomContact = (contacts.splice(randomIndex,1))[0];
console.log("Add button clicked");
console.log(randomContact);
const newRow = document.createElement("tr");
newRow.innerHTML =`
  <td> <img src="${randomContact.pictureUrl}" />
  </td><td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td> 
    <button class="btn-like"><img src="./images/icon.png" alt="like" />
    </button>
    </td>
  `;
  tableBody.appendChild(newRow);

  const button = newRow.querySelector(".btn-delete");
  button.addEventListener("click", () => {
    console.log ("button delete clicked");
    newRow.remove(tableBody);
   });

   const likeButton = newRow.querySelector (".btn-like");
   likeButton.addEventListener("click", () => {
     console.log ("button like clicked");
     const toggleElement = newRow.querySelector(".btn-like")
     if (toggleElement.classList.contains("selected")) {  //classList takes the class within "."
         toggleElement.classList.remove("selected");
   } else {
     toggleElement.classList.add("selected");}
   });


}) //closes line 81

