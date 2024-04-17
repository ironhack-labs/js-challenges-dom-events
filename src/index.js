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
const threeContacts = contacts.splice(0, 3)

// Your code goes here ...
const rngIndex = Math.floor(Math.random() * contacts.length)
const rngConArr = contacts.splice(rngIndex, 3)
console.log(rngIndex)
console.log(rngConArr)

rngConArr.forEach((element, index) => {
  let newRow = document.createElement("tr")
  newRow.innerHTML = `
  <td>
    <img src="${rngConArr[index].pictureUrl}" />
  </td>
  <td> ${rngConArr[index].name} </td>
  <td> ${rngConArr[index].popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>`

  // ITERATION 2 - Delete Buttons
  let btnDelete = newRow.querySelector(".btn-delete")
  console.log(btnDelete)
  btnDelete.addEventListener("click", deleteRow)
    function deleteRow(){
      console.log('boton clickado')
      newRow.remove()
    }
  // ITERATION 3 - Like Buttons
  let btnLike = newRow.querySelector(".btn-like")
  console.log(btnLike)
  btnLike.addEventListener("click", like)
    function like(){
      console.log(btnLike)
      console.log('boton like clickado')
      btnLike.classList.toggle("selected")
    }
   
  tableBody.appendChild(newRow)//crea la nueva fila
});

// Bonus: ITERATION 4 - Add Random Contacts
buttonAddRandom.addEventListener("click", addRandom)
function addRandom() {
const aleatorio = Math.floor(Math.random() * contacts.length)
const addRow = document.createElement("tr");
addRow.innerHTML = `
  <td>
    <img src="${contacts[aleatorio].pictureUrl}" />
  </td>
  <td> ${contacts[aleatorio].name} </td>
  <td> ${contacts[aleatorio].popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;
// ITERATION 2 - Delete Buttons
let btnDelete = addRow.querySelector(".btn-delete")
console.log(btnDelete)
btnDelete.addEventListener("click", deleteRow)
  function deleteRow(){
    console.log('boton clickado')
    addRow.remove()
  }
// ITERATION 3 - Like Buttons
let btnLike = addRow.querySelector(".btn-like")
console.log(btnLike)
btnLike.addEventListener("click", like)
  function like(){
    console.log(btnLike)
    console.log('boton like clickado')
    btnLike.classList.toggle("selected")
  }
tableBody.appendChild(addRow);
}