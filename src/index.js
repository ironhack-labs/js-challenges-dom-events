// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
function addRandomContact () {
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
}

function addThreeItemsToTable(item){
  const newContactRow = document.createElement("tr");
  newContactRow.innerHTML = `
    <td>
      <img src="${item.pictureUrl}" />
    </td>
    <td> ${item.name} </td>
    <td> ${item.popularity.toFixed(2)} </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;
  return newContactRow;
}

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
function displayThreeContacts(){
  const threeContacts = contacts.splice(0, 3);

// Your code goes here ...
// 1. threeContacts - loop and add to table
  let newRow = "";
  for(let i=0; i<threeContacts.length; i++){
    newRow = addThreeItemsToTable(threeContacts[i]);
    tableBody.appendChild(newRow);
  }
}



  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
function addDelete(){
  console.log("deleting");
  const deleteButtons = document.querySelectorAll(".btn-delete");
  for(let i=0;i<deleteButtons.length;i++){
    deleteButtons[i].addEventListener('click', e => {
      let tr = e.target.closest('tr');
      if (tr) {
        console.log(tr, 'was clicked');
        tr.remove();
      }
    });
  }
}


  // ITERATION 3 - Like Buttons
function addLike(){
  // Your code goes here ...
  console.log("liking");
  const likeButtons = document.querySelectorAll(".btn-like");
  for(let k=0;k<likeButtons.length;k++){
    likeButtons[k].addEventListener('click', e => {
      let btnTarget = e.target.closest('button');
      if(!btnTarget.classList.contains("selected")){
        console.log(btnTarget);
        btnTarget.classList.toggle("selected");
      }
    });
  }
}

function addOneWithLikeAndDelete(){
  console.log("adding one");
  addRandomContact();
  addLike();
  addDelete();
}

function addManyWithLikeAndDelete(){
  displayThreeContacts();
  addLike();
  addDelete();
}


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
document.getElementById("btn-add-random").addEventListener('click', addOneWithLikeAndDelete);

addOneWithLikeAndDelete();
addManyWithLikeAndDelete();



