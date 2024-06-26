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

threeContacts.forEach(contact => {
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

  tableBody.appendChild(row);
})



// ITERATION 2 - Delete Buttons

// Your code goes here ...

const deleteButtons = document.querySelectorAll(".btn-delete")

deleteButtons.forEach(button => {
  button.onclick = function () {
    const row = this.parentElement.parentElement;
    row.remove();

    console.log("button clicked on row:", row.textContent);
  }
})



// ITERATION 3 - Like Buttons

// Your code goes here ...


const likeButtons = document.querySelectorAll(".btn-like");

likeButtons.forEach(button => {
  button.onclick = function () {
    button.classList.toggle("selected")
  }
})


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...


const addRandomButton = document.querySelector("#btn-add-random");

addRandomButton.onclick = function () {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const splicedArr = contacts.splice(randomIndex, 1);
  const randomContact = splicedArr[0];

  const row = document.createElement("tr");
  row.innerHTML = `
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

  tableBody.appendChild(row);

  console.log("Added random contact:", randomContact.name);
}

tableBody.addEventListener('click', function (event) {
  if (event.target.classList.contains('btn-delete')) {
    const row = event.target.parentElement.parentElement;
    row.remove();
    console.log("button clicked on row: ", row.textContent);
  }

  if (event.target.classList.contains('btn-like')) {
    event.target.classList.toggle('selected');
  }
});