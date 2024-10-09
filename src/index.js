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

const deleteBtn = exampleRow.querySelector(".btn-delete");
deleteBtn.addEventListener("click", () => {exampleRow.remove() });

tableBody.appendChild(exampleRow);
const likeBtn=exampleRow.querySelector(".btn-like");
likeBtn.addEventListener("click", () => {likeBtn.classList.toggle("selected")})
likeBtn.style.color= 'red';

tableBody.appendChild(exampleRow);

tableBody.appendChild(exampleRow);





// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);
threeContacts.forEach(function(contact){
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

const deleteBtn = exampleRow.querySelector(".btn-delete");
deleteBtn.addEventListener("click", () => {exampleRow.remove() });

tableBody.appendChild(exampleRow);
const likeBtn=exampleRow.querySelector(".btn-like");
likeBtn.addEventListener("click", () => {likeBtn.classList.toggle("selected")})
likeBtn.style.color= 'red';

tableBody.appendChild(exampleRow);


})

// Your code goes here ...



  
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
  



/*const getallrows = exampleRow.querySelectorAll(".btn-delete");

getallrows.forEach(Function(rows){
  rows.addEventListener("click", () => {rows.remove()})
})*/

  // ITERATION 3 - Like Buttons

  // Your code goes here ...


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
buttonAddRandom.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const randomContact = contacts[randomIndex];
  buttonAddRandom.appendChild(randomContact);

});