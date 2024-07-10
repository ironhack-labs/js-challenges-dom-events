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
Get the first 3 contacts from the contacts array.
You can use the splice() method for this.Remember that the splice() method modifies the original array, and returns the results as a new array.
Iterate over the newly obtained array of 3 contacts and, for each contact, create a new table row and append it to the table body.
You can use the Iteration 0 code as an example of how to create a new table row and what its structure should be.
Append each new table row to the table body.You can use the appendChild() method for this.

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

//})



// Your code goes here ...


  
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
  
  

  // ITERATION 3 - Like Buttons

  // Your code goes here ...

  
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
