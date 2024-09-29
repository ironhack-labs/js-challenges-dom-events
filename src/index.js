// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
function randomIndex(contacts)
{return Math.floor(Math.random() * contacts.length)}


//const randomIndex = Math.floor(Math.random() * contacts.length);
//const splicedArr = contacts.splice(randomIndex, 1);

//const splicedArr = contacts.splice(randomIndex(contacts),1);

function splicedArray(contacts) 
{let splicedArr = contacts.splice(randomIndex(contacts),1);
return splicedArr
}



// Get the element from the spliced array
//const randomContact = splicedArr[0];

const randomContact = splicedArray(contacts)[0]

function makeRow(contact) {
  const row = document.createElement("tr");
    row.innerHTML = `
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
    `;
  return row;
}

tableBody.appendChild(makeRow(randomContact));

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...

const threeRows = threeContacts.map((contact) => makeRow(contact))

tableBody.append(...threeRows) //[0, 1, 2] ...0, 1, 2


/*
const row1 = document.createElement("tr");
row1.innerHTML = `
  <td>
    <img src="${threeContacts[0].pictureUrl}" />
  </td>
  <td> ${threeContacts[0].name} </td>
  <td> ${threeContacts[0].popularity.toFixed(2)} </td>
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
*/
  
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
 
  let deleteButtons = document.querySelectorAll('.btn-delete');
  console.log(deleteButtons)
  let deleteButtonsArray = [...deleteButtons]
console.log(deleteButtonsArray)
  //deleteButtonsArray[0].addEventListener("click", () => {console.log("hello world")})

//deleteButtonsArray.forEach((element) => element.addEventListener("click", () => {console.log("hello world")}))
  
//remove the tr (table row) for that button. Parent of button is TD. Parent of TD is TR (table row)
console.log(deleteButtonsArray[0].parentElement);
//console.log((deleteButtonsArray[0].parentElement).parentElement)
//(deleteButtonsArray[0].parentElement).parentElement.remove()

deleteButtonsArray.forEach((element) => element.addEventListener("click", () => {(element.parentElement).parentElement.remove()}))

  // ITERATION 3 - Like Buttons

  // Your code goes here ...

  let likeButtons = document.querySelectorAll('.btn-like');
  let likeButtonsArray = [...likeButtons]
  //likeButtonsArray.forEach((element) => element.addEventListener("click", () => {(element.classList.toggle("btn-like.selected"))}))
  //likeButtonsArray.forEach((element) => element.addEventListener("click", () => {console.log("hey hey")}))
  likeButtonsArray.forEach((element) => element.addEventListener("click", () => {element.classList.toggle("selected")}))

//element.classList.toggle()
// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...


//const finalrandomContact = splicedArray(contacts)[1].map((contact) => makeRow(()))
//let buttonAddRandom = document.getElementById("btn-add-random") 
buttonAddRandom.addEventListener("click", () => {element.classList.toggle("active")})

buttonAddRandom.addEventListener("click", () => makeRow(contacts))

//const finalRandomContact = threeContacts.map((contact) => makeRow(contact))

tableBody.append(...finalRandomContact) //[0, 1, 2] ...0, 1, 2