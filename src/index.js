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

splicedArr.push(...threeContacts)

// Your code goes here ...
console.log("starting conditon of arrays", splicedArr, contacts)

hreeContacts.forEach((contact) => {
  
  let newRow = document.createElement("tr")
  
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
`
tableBody.appendChild(newRow)

})


  
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
  let tableRows = tableBody.getElementsByTagName('tr')
  console.log("These are the table rows", tableRows)

  let tableRowArray = [...tableRows]

  console.log("This is the splice Array", splicedArr)

  console.log("this is the array", tableRowArray)

  let deleteButtons = tableBody.getElementsByClassName('btn-delete')

  let deleteButtonsArray = [...deleteButtons]

  console.log("These are our delete buttons", deleteButtons)

  deleteButtonsArray.forEach((button, index) => {


      button.addEventListener('click', () => {
        let thisRow = button.parentNode.parentNode
        thisRow.remove()
        console.log("Before delete", contacts, splicedArr)
        contacts.push(splicedArr.splice(index, 1)[0])
        console.log("After delete", contacts, splicedArr)

        deleteButtonsArray.splice(index, 1)
      })
    
     })
  
        
  
  // ITERATION 3 - Like Buttons

  // Your code goes here ...
  let likeButtons = tableBody.getElementsByClassName('btn-like')

  let likeButtonsArray = [...likeButtons]

  likeButtonsArray.forEach((button) => {

    button.addEventListener('click', () => {
      console.log("Hitting like button!!!")
      button.classList.toggle('selected')
    })
  })
  



// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

buttonAddRandom.addEventListener('click', () => {
  if (contacts.length) {

    const thisRandomIndex = Math.floor(Math.random() * contacts.length);
    console.log("Before", splicedArr, contacts)
    const splicedCopy = [...splicedArr]
    splicedArr = [contacts.splice(thisRandomIndex, 1)[0], ...splicedCopy];
    console.log("After", splicedArr, contacts)
    tableBody.innerHTML = ''
  
    splicedArr.forEach(((contact) => {
  
      let newRow = document.createElement("tr")
    
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
    `
    tableBody.appendChild(newRow)

  }))
  let deleteButtons = tableBody.getElementsByClassName('btn-delete')
  
  deleteButtonsArray = [...deleteButtons]
  
  deleteButtonsArray.forEach((button, index) => {
    button.addEventListener('click', () => {

      // setTimeout(() => {
        let thisRow = button.parentNode.parentNode
        thisRow.remove()
    
        //removing object from spliced array and adding back to contacts array
        console.log("Before delete", index, contacts, splicedArr)
        let thisContact = splicedArr.splice(index, 1)[0]
        contacts.push(thisContact)
        console.log("After delete", index, thisContact, contacts.length, splicedArr.length)
        deleteButtonsArray.splice(index, 1)
        
        console.log("Delete buttons array length", deleteButtonsArray.length)
        //reassigning value of deleteButtonsArray so their index positions continue to correspond with the splicedArr
        // setTimeout(() => {
        //   let newDeleteButtons = tableBody.getElementsByClassName('btn-delete')
        //   deleteButtonsArray = [...newDeleteButtons]

        // }, 50)
      // }, 100)
      // locating element to delete(this row), and removing element from DPM
    })
  })
  
  let likeButtons = tableBody.getElementsByClassName('btn-like')
  
  let likeButtonsArray = [...likeButtons]

  likeButtonsArray.forEach((button) => {
  
    button.addEventListener('click', () => {
      console.log("Hitting like button!!!")
      button.classList.toggle('selected')
    })
  })
  } else {
    alert("Out of contacts to add!")
  }

})