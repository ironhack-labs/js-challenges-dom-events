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
threeContacts.forEach(element => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
      <td>
        <img src="${element.pictureUrl}" />
      </td>
      <td> ${element.name} </td>
      <td> ${element.popularity.toFixed(2)} </td>
      <td>
        <button class="btn-delete">Delete</button>
      </td>
      <td>
        <button class="btn-like">
          <img src="./images/icon.png" alt="like" />
        </button>
      </td>
    `;
  tableBody.appendChild(newRow);

  let deleteButton = newRow.querySelector(".btn-delete")
  deleteButton.addEventListener("click", function () {
    newRow.remove();
  })

  let likeButton = newRow.querySelector(".btn-like")
  likeButton.addEventListener("click", function() {
    likeButton.classList.toggle("selected") 

  })
});

// Bonus: ITERATION 4 - Add Random Contacts
let randomButton = document.getElementById("btn-add-random")
randomButton.addEventListener("click", ()=> {
  let randomIndex = Math.floor(Math.random() * contacts.length)
  let arrayFixed = contacts.splice(randomIndex,1)
  let newContact = arrayFixed[0];  

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
      <td>
        <img src="${newContact.pictureUrl}" />
      </td>
      <td> ${newContact.name} </td>
      <td> ${newContact.popularity.toFixed(2)} </td>
      <td>
        <button class="btn-delete">Delete</button>
      </td>
      <td>
        <button class="btn-like">
          <img src="./images/icon.png" alt="like" />
        </button>
      </td>
    `;
  tableBody.appendChild(newRow);

  let deleteButton = newRow.querySelector(".btn-delete")
  deleteButton.addEventListener("click", function () {
    newRow.remove();
  })

  let likeButton = newRow.querySelector(".btn-like")
  likeButton.addEventListener("click", function() {
    likeButton.classList.toggle("selected") 
  })

}
)