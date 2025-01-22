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

/* const splicedArr2 = contacts.splice(0, 1);

const contact2 = splicedArr2[0];

const row1 = document.createElement("tr");
row1.innerHTML = `
  <td>
    <img src="${contact2.pictureUrl}" />
  </td>
  <td> ${contact2.name} </td>
  <td> ${contact2.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(row1);

const splicedArr3 = contacts.splice(0, 1);

const contact3 = splicedArr3[0];

const row2 = document.createElement("tr");
row2.innerHTML = `
  <td>
    <img src="${contact3.pictureUrl}" />
  </td>
  <td> ${contact3.name} </td>
  <td> ${contact3.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(row2);

const splicedArr4 = contacts.splice(0, 1);

const contact4 = splicedArr4[0];

const row3 = document.createElement("tr");
row3.innerHTML = `
  <td>
    <img src="${contact4.pictureUrl}" />
  </td>
  <td> ${contact4.name} </td>
  <td> ${contact4.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(row3);
 */


const threeContacts = contacts.splice(0, 3)
/* const allContacts = threeContacts[0] */
/* const rows = document.createElement("tr")

  for (i=0; i< threeContacts.length; i++) {
    let row = document.createElement("td")
    td.setAttribute()
if (threeContatc[i] !== threeContacts.length) {

}
  } */
 
threeContacts.forEach(contact => {
  
  const rows = document.createElement("tr")
  rows.innerHTML = `
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
  console.log(rows)
  
  const deletebutton = rows.querySelector(".btn-delete")
  deletebutton.onclick = function() {
    rows.remove()
  }
  const likebutton = rows.querySelector(".btn-like")
  likebutton.onclick = function() {
    this.classList.toggle("btn-like.selected")
    
  }


  tableBody.appendChild(rows)
})


 /*   const imagen = document.createElement("td")
   imagen.textContent =`
  <td>
    <img src="${contact.pictureUrl}" />
  </td>`
  rows.appendChild(imagen)

  const name = document.createElement("td")
  name.textContent =`<td> ${contact.name} </td>`
  rows.appendChild(name)

  const contactt = document.createElement("td")
   contactt.textContent =`<td> ${contact.popularity.toFixed(2)} </td>
  <td>`
  rows.appendChild(contactt) 

  const button1 = document.createElement("td")
  button1.textContent =`<button class="btn-delete">Delete</button>
  </td>`
  rows.appendChild(button1)

  const class1 = document.createElement("td")
  class1.textContent =`<td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>`
  rows.appendChild(class1)
  tableBody.appendChild(rows)
}); */


// Your code goes here ...


  
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
  
  

  // ITERATION 3 - Like Buttons

  // Your code goes here ...

  
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
