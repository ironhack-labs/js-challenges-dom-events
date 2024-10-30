// HTML ELEMENTS
const buttonAddRandom = document.querySelector('#btn-add-random')
const tableBody = document.querySelector('tbody#contacts')

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length)
const splicedArr = contacts.splice(randomIndex, 1)

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
let btnExample = exampleRow.querySelector('.btn-delete')
let btnLike = exampleRow.querySelector('.btn-like')
btnExample.addEventListener('click', () => {
	exampleRow.remove()
})
btnLike.addEventListener('click', () => {
	btnLike.classList.toggle('selected')
})
tableBody.appendChild(exampleRow)

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3)

// Your code goes here ...
threeContacts.forEach((contact, i) => {
	let contactRow = document.createElement('tr')
	contactRow.innerHTML = `
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
`
	let btn = contactRow.querySelector('.btn-delete')
	let like = contactRow.querySelector('.btn-like')
	btn.addEventListener('click', () => {
		contactRow.remove()
	})
	like.addEventListener('click', () => {
		like.classList.toggle('selected')
	})
	tableBody.appendChild(contactRow)
})
// ITERATION 2 - Delete Buttons

// Your code goes here ...

// ITERATION 3 - Like Buttons

// Your code goes here ...

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
buttonAddRandom.addEventListener('click', () => {
	let rand = Math.floor(Math.random() * contacts.length)
	let contArr = contacts.splice(contacts[rand], 1)
	let contact = contArr[0]
	let newConRow = document.createElement('tr')
	newConRow.innerHTML = `
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
  `

	let likeBtn = newConRow.querySelector('.btn-like')
	likeBtn.addEventListener('click', () => {
		likeBtn.classList.toggle('selected')
	})
	let deleteBtn = newConRow.querySelector('.btn-delete')
	deleteBtn.addEventListener('click', () => {
		newConRow.remove()
	})
	tableBody.appendChild(newConRow)
})
