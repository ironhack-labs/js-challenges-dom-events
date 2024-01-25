// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random")
const tableBody = document.querySelector("tbody#contacts")


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length)
const splicedArr = contacts.splice(randomIndex, 1)

// Get the element from the spliced array
const randomContact = splicedArr[0]

const exampleRow = document.createElement("tr")
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
`

tableBody.appendChild(exampleRow);






// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...

threeContacts.forEach(elm => {
  const newRow = document.createElement("tr")
  row.innerHTML = `
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
  </td>`
  tableBody.appendChild(newRow)


  // ITERATION 2 - Delete Buttons
  let deleteButton = newRow.querySelector(".btn-delete")
  deleteButton.onclick = () => {
    newRow.remove(elm)

  }
  let likeButton = newRow.queryselectora(".btn-like")

  likeButton = onclick = () => {
    likeButton.classList.toggle("selected")
  }

})





// ITERATION 3 - Like Buttons

// Your code goes here ...
buttonAddRandom.onclick = () => {
  let buttonAddRandom = Math.floor(Math.random() * contacts - length)

  let newSplicedArr = contacts.splice(newRandomIndex, 1)

  let newRandomContact = newSpliceArr[0]
  let newRandomRow = document.createElement("tr")
  newRandomRow.innerHTML = `<td>
    <img src="${newRandomContact.pictureUrl}" />
  </td>
  <td> ${newRandomContact.name} </td>
  <td> ${newRandomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>`

  tableBody.appendChild(newRandomRow)


}





// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
