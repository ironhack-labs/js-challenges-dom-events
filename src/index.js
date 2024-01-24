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

tableBody.appendChild(exampleRow)





// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3)


// Your code goes here ...
threeContacts.forEach((contacts) => {
  const rows = document.createElement("tr")
  rows.innerHTML = `
  <td>
    <img src="${contacts.pictureUrl}" />
  </td>
  <td> ${contacts.name} </td>
  <td> ${contacts.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>`

  tableBody.appendChild(rows)
})


// ITERATION 2 - Delete Buttons

// Your code goes here ...

const deleteButtons = document.querySelectorAll(".btn-delete")
deleteButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    tableBody.removeChild(tableBody.children[index])
  })

})


// ITERATION 3 - Like Buttons

// Your code goes here ...

const likeButton = document.querySelectorAll(".btn-like")
if (likeButton) {
  likeButton.forEach((button, index) => {
    button.addEventListener("click", () => {
      button.classList.toggle("selected")
    })
  })
}








// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

// ITERATION 4 - Add Random Contacts
const buttonAddRandom2 = document.querySelector("#btn-add-random")
buttonAddRandom2.addEventListener("click", () => {

  const randomContactIndex = Math.floor(Math.random() * contacts.length)
  const randomContact = contacts[randomContactIndex]

  const newRow = document.createElement("tr")
  newRow.innerHTML = `
    <td>
      <img src="${randomContact.pictureUrl}" />
    </td>
    <td>${randomContact.name}</td>
    <td>${randomContact.popularity.toFixed(2)}</td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>`

  tableBody.appendChild(newRow)

})





