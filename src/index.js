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

// Your code goes here ...

const splicedArray = contacts.splice(0, 3);
splicedArray.forEach((contact) => {
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
});

const newRow = document.createwElement("tr");
newRow.classList.add("tr");

const buttonCell = document.createAttribute("td");

const removeButton = newRow.querySelectorAll("#contact button");
removeButton.textContent = "Remove";
removeButton.addEventListener("click", function () {
  newRow.remove();
});
buttonCell.appendChild(removeButton);
newRow.appendChild(buttonCell);
tableBody.appendChild(newRow);

// Your code goes here ...

// ITERATION 3 - Like Buttons

// Your code goes here ...
function createLikeRow() {
  var newLikeRow = document.createElement("tr");
  var likeButton = document.createElement("button");
  likeButton.textContent = "Like";
  likeButton.className = "btn-like";
  likeButton.addEventListener("click", function () {
    newLikeRow.classList.toggle("selected");
  });
  newLikeRow.appendChild(likeButton);
  table.appendChild(newLikeRow);
}
// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
