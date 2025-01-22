// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts"); // tablebody has an empty node with table html content


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1); // this is saving an array with one object. randomindex is giving where to splice and 1 where to end.

// Get the element from the spliced array
const randomContact = splicedArr[0]; // here is the object.

const exampleRow = document.createElement("tr"); // all the documet functions are pre defined
// innerhtml is part of createElement
// with innerhtml we are putting the following string as a property of the exampleRow Object.
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

tableBody.appendChild(exampleRow); // appendChilds adds our obj to tableBody node



// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3); // threContacts is an array with 3 objs

// Your code goes here ...

threeContacts.forEach((e) => {
  // with innerhtml we are putting the following string as a property of the exampleRow Object.
  const newRow = document.createElement("tr"); // all the documet functions are pre defined
  newRow.innerHTML = ` 
    <td>
      <img src="${e.pictureUrl}" />
    </td>
    <td> ${e.name} </td>
    <td> ${e.popularity.toFixed(2)} </td>
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
  const deletBtn = newRow.querySelector('.btn-delete');

  deletBtn.addEventListener('click', (e) => { // e is the delete btn
    console.log(e);
    newRow.remove();
  });
  const likeBtn = newRow.querySelector('.btn-like');

  likeBtn.addEventListener('click', (e) => {
    console.log(likeBtn.classList)
    likeBtn.classList.toggle("selected")
  });



})



// ITERATION 2 - Delete Buttons

// Your code goes here ...

const deletBtn = document.querySelector('.btn-delete');

deletBtn.addEventListener('click', (e) => { // e is the delete btn

  exampleRow.remove();

});



// ITERATION 3 - Like Buttons

// Your code goes here ...


const likeBtn = document.querySelector('.btn-like');

likeBtn.addEventListener('click', (e) => { // e is the like btn
  console.log(likeBtn.classList)
  likeBtn.classList.toggle("selected")
  //When the Like button is clicked, 
  // the class of the row element should be toggled between class="btn-like" and class="btn-like selected". You can use the element.classList.toggle() method for this.


});



// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...


buttonAddRandom.addEventListener('click', (e) => { // e is the buttonAddRandom
  // Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1); // this is saving an array with one object. randomindex is giving where to splice and 1 where to end.

// Get the element from the spliced array
const randomContact = splicedArr[0]; // here is the object.

const exampleRow = document.createElement("tr"); // all the documet functions are pre defined
// innerhtml is part of createElement
// with innerhtml we are putting the following string as a property of the exampleRow Object.
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

tableBody.appendChild(exampleRow); // appendChilds adds our obj to tableBody node  
});