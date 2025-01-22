// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];
addRow(randomContact);


function addRow(contact){
  const exampleRow = document.createElement("tr");
  exampleRow.innerHTML = `
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
  
  tableBody.appendChild(exampleRow);
}

function removeTable(index){

}

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);
threeContacts.forEach(el => addRow(el))


// ITERATION 2 - Delete Buttons
const delBtns = document.querySelectorAll('.btn-delete');
// delBtns.forEach((el, i)=>{
//   el.addEventListener("click",()=>{
//     console.log(i);
//     tableBody.deleteRow(i);
//   })
// })

// delBtns.forEach((btn) => btn.addEventListener("click", (e)=>  e.target.closest("tr").remove()))


// // ITERATION 3 - Like Buttons
// const likeBtns = document.querySelectorAll(".btn-like");
// likeBtns.forEach(el=>{
//   el.addEventListener("click",()=>{
//     console.log("liked");
//     el.classList.toggle("selected")
//   })
// })  

// constantly listening from the table
tableBody.addEventListener("click", event =>{
  // check if the closest thing to target is ".btn-delete" 
  if (event.target.closest(".btn-delete")){
    // remove the closest row 
    event.target.closest("tr").remove();
    console.log("removed");
  // if closest classt is ".btn-like"
  }else if (event.target.closest(".btn-like")){
    // toggle "selected" on closest ".btn-like"
    event.target.closest(".btn-like").classList.toggle("selected");
    console.log("liked");
  }
});



// Bonus: ITERATION 4 - Add Random Contacts
const rndmBtn = document.getElementById("btn-add-random")
rndmBtn.addEventListener("click",()=>{
  console.log("add random")
  const randI = Math.floor(Math.random()* contacts.length);
  addRow(contacts[randI])
})
