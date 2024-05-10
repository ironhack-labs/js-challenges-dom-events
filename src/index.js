// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
let splicedArr = contacts.splice(randomIndex, 1);

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

splicedArr.push(...threeContacts);

// Your code goes here ...
threeContacts.forEach((contact) => {
  let newRow = document.createElement("tr");
  newRow.innerHTML = `
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
tableBody.appendChild(newRow);

});



  
  // ITERATION 2 - Delete Buttons
  //Dustins
  let tableRows = tableBody.getElementsByTagName('tr');
  let tableRowArray = [...tableRows];

  let deleteButtons = tableBody.getElementsByClassName('btn-delete');
  let deleteButtonsArray = [...deleteButtons];
  deleteButtonsArray.forEach((button, index) => {
    button.addEventListener('click', () => {
      // locating element to delete(this row), and removing element from DOM
       let thisRow = button.parentNode.parentNode;
       thisRow.remove();

       // removing object from spliced array and adding back to contacts
       contacts.push(splicedArr.splice(index, 1)[0]);

       // reassigning value of deleteButtonsArray so their index positions continue to correspond with the splicedArr
       let newDeleteButtons = tableBody.getElementsByClassName('btn-delete');
        deleteButtonsArray = [...newDeleteButtons];
       })
  })
  
  // Your code goes here ...
  // let tableRows = tableBody.getElementsByTagName('tr');
  // let tableRowArray = [...tableRows];

  // let deleteButtons = tableBody.getElementsByClassName('btn-delete');
  // let deleteButtonsArray = [...deleteButtons];
  // deleteButtonsArray.forEach((button, index) => {
  //   button.onclick = function() {
  //     console.log('Deleting');
  //     tableRowArray[index].innerHTML = "";
  // }



  // })
  

  // ITERATION 3 - Like Buttons
  // Dustins
  let likeButtons = tableBody.getElementsByClassName('btn-like');
  let likeButtonsArray = [...likeButtons];
  likeButtonsArray.forEach((button) => {
    button.addEventListener('click', () => {
      button.classList.toggle('selected');
    })
  })
  // Your code goes here ...

  
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
// buttonAddRandom.addEventListener('click', () => {
//   const thisRandomIndex = Math.floor(Math.random() * contacts.length);
//   splicedArr = [contacts.splice(thisRandomIndex, 1)[0], ...splicedArr];
  
//   tableBody.innerHTML = ''

//   splicedArr.forEach(((contact)) => {
//     let newRow = document.createElement('tr');

//   })
// })