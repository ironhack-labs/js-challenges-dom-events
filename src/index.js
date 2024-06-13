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

threeContacts.forEach(currentContact => {
  const newRow = document.createElement("tr");
newRow.innerHTML = `
  <td>
    <img src="${currentContact.pictureUrl}" />
  </td>
  <td> ${currentContact.name} </td>
  <td> ${currentContact.popularity.toFixed(2)} </td>
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




const deleteButtons = document.querySelectorAll(".btn-delete");

// Add event listeners to each delete button
deleteButtons.forEach(function(button) {
  button.addEventListener("click", function(event) {
    // Find the row that contains the clicked delete button
    const row = event.target.closest("tr");
    if (row) {
      row.remove(); // Remove the row from the table
    }
  });

  const likeButton = document.querySelectorAll(".btn-like");


// Add event listeners to each delete button
likeButton.forEach(function(like) {
  like.addEventListener("click", function() {
    // Find the row that contains the clicked delete button
    like.classList.toggle("selected")
  });
});
});



});

  
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...

  // ITERATION 3 - Like Buttons

  // Your code goes here ...



 

buttonAddRandom.addEventListener("click", function(event){
 const newRandomContact2 = contacts[randomIndex]

const newRandomContact = document.createElement("tr")
newRandomContact.innerHTML = `<td>
<img src="${newRandomContact2.pictureUrl}">
</td>
<td> ${newRandomContact2.name}</td> 
<td>${newRandomContact2.popularity.toFixed(2)}</td>
<td> <button class="btn-delete"> Delete </button> </td>
<td> <button class="btn-like"> <img src="./images/icon.png"> </button> </td>`

tableBody.appendChild(newRandomContact);

});

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...


const deleteButtons = document.querySelectorAll(".btn-delete");

// Add event listeners to each delete button
deleteButtons.forEach(function(button) {
  button.addEventListener("click", function(event) {
    // Find the row that contains the clicked delete button
    const row = event.target.closest("tr");
    if (row) {
      row.remove(); // Remove the row from the table
    }
  });

  const likeButton = document.querySelectorAll(".btn-like");


// Add event listeners to each delete button
likeButton.forEach(function(like) {
  like.addEventListener("click", function() {
    // Find the row that contains the clicked delete button
    like.classList.toggle("selected")
  });
});
})

console.log(buttonAddRandom);
