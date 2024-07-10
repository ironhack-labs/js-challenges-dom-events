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

/*

 const buttonTags = document.querySelectorAll('button')
        const titleTag = document.querySelector('h1')

        buttonTags.forEach(eachButton => {

            eachButton.onclick = () => {
                titleTag.style.color = 'red'
            }
*/
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);


threeContacts.forEach((eachContact) => {
  const tableContacs = document.createElement("tr");
  
  tableContacs.innerHTML = `
  <td>
    <img src="${eachContact.pictureUrl}" />
  </td>
  <td> ${eachContact.name} </td>
  <td> ${eachContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`

  tableBody.appendChild(tableContacs);
})

  /*
  
As you can see, each row has a Delete button. However, the buttons don't do anything yet. Let's fix that! Your task in this iteration is to add an event listener to each Delete button so that, when clicked, the corresponding row is removed from the table. You will need to do this in the same loop where you are creating the new table rows. As soon as you create a new table row, you should also add an event listener to the delete button of that row. Here are the steps you should follow:

Get the Delete button element from a newly created row.
After creating a new table row, you can call the querySelector() method on the newly created table row to search for the Delete button only inside that row, like this: newRow.querySelector(...).
Add an event listener to the Delete button element, for the click event.
You can use the addEventListener() method for this.
When the Delete button is clicked, the row element should be removed from the table.
You can use the remove() method for this.
  
  */
  
  // Your code goes here ...
threeContacts.forEach((eachContact) => {
  const tableContacs = document.createElement("tr");

  tableContacs.innerHTML = `
  <td>
    <img src="${eachContact.pictureUrl}" />
  </td>
  <td> ${eachContact.name} </td>
  <td> ${eachContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`

  tableBody.appendChild(tableContacs);
})
  
const buttonTags = document.querySelectorAll('button')

buttonTags.forEach((eachButton => {

  eachButton.onclick = () => {
    titleTag.style.color = 'red'
  })
  }
  // ITERATION 3 - Like Buttons

  // Your code goes here ...

  
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
