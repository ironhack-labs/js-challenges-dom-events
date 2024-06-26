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

// Your code goes here ...
console.log(threeContacts)
threeContacts.forEach(e=>{
  const row = document.createElement("tr")
  row.innerHTML=`
    <td><img src=" ${e.pictureUrl}"></td>
    <td> ${e.name}</td>
    <td> ${e.popularity}</td>
    <td><button class="btn-delete">Delete</button></td>
    <td><button class="btn-like"><img src="./images/icon.png" alt="like" /></button></td>
  `
  tableBody.appendChild(row)
  
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
  const eliminar = row.querySelector(".btn-delete")
  eliminar.addEventListener("click",()=>{
    row.remove(row)
  })
  

  // ITERATION 3 - gustarLike Buttons

  // Your code goes here ...
  const gustar = row.querySelector(".btn-like")
  gustar.addEventListener("click",()=>{
    gustar.classList.toggle("selected")
  })
  

})
  
  


// Bonus: ITERATION 4 - Add Random Contacts
const aleatorio = document.querySelector("#btn-add-random")
aleatorio.addEventListener("click",()=>{
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

})
// Your code goes here ...
