// HTML ELEMENTS
const buttonAddRandom = document.querySelector('#btn-add-random')
const tableBody = document.querySelector('tbody#contacts')

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length)
const splicedArr = contacts.splice(randomIndex)

// Get the element from the spliced array
const randomContact = splicedArr[0]

const exampleRow = document.createElement('tr')
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
let nuevaLinea
threeContacts.forEach((contact) => {
  const nuevaLinea = document.createElement('tr')
  nuevaLinea.innerHTML = `
    <td>
      <img src="${contact.pictureUrl}" />
    </td>
    <td>${contact.name}</td>
    <td>${contact.popularity.toFixed(2)}</td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `
  tableBody.appendChild(nuevaLinea)
  const botonBorrar = nuevaLinea.querySelector('.btn-delete')
  botonBorrar.addEventListener('click', () => {
    console.log('clickando btn delete')
    nuevaLinea.remove()
  })
  const botonLike = nuevaLinea.querySelector('.btn-like')
  botonLike.addEventListener('click', () => {
    botonLike.classList.toggle('selected')
  })
})
buttonAddRandom.addEventListener('click', () => {
  const nuevaFila = document.createElement('tr')
  nuevaFila.innerHTML = exampleRow.innerHTML

  tableBody.appendChild(nuevaFila)
})

// Your code goes here ...

// ITERATION 2 - Delete Buttons

// Your code goes here ...

// ITERATION 3 - Like Buttons

// Your code goes here ...

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
