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
threeContacts.forEach((individual) =>{
  let individualRow = document.createElement("tr");
  individualRow.innerHTML = `
    <td>
      <img src="${individual.pictureUrl}" />
    </td>
    <td> ${individual.name} </td>
    <td> ${individual.popularity.toFixed(2)} </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;
  
  tableBody.appendChild(individualRow);  
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
const deleteBtn = individualRow.querySelectorAll(".btn-delete");
deleteBtn.forEach((item) => {
  item.addEventListener("click", () => {
    individualRow.remove();
  })
 });

 const likeBtn = individualRow.querySelectorAll(".btn-like");
likeBtn.forEach((like) => {
  like.addEventListener("click", () => {
    like.classList.toggle("selected");
  })
 });
const randomBtn = document.getElementById("btn-add-random");
randomBtn.addEventListener("click", () => {
  document.createElement(individualRow);
})

tableBody.appendChild(individualRow);

})







  
  

  // ITERATION 3 - Like Buttons

  // Your code goes here ...

  
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
