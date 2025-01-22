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

// Get three contacts from the contacts array
const threeContacts = contacts.splice(0, 3);

// Display the three contacts in the table
threeContacts.forEach(element => {
  const newRow = document.createElement(`tr`);
  newRow.innerHTML = `<td>
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
  </td>`;

  // Add the event listener to the delete button
  const deleteButton = newRow.querySelector(".btn-delete");
  deleteButton.addEventListener("click", () => {
    newRow.remove();
  });

  // Add the event listener to the like button
  const likeButton = newRow.querySelector(".btn-like");

  const likeButtonPressed = () => {
    likeButton.classList.toggle("selected");
  };

  likeButton.addEventListener("click", likeButtonPressed);


  // Append the new row to the table body
  tableBody.appendChild(newRow);
});




buttonAddRandom.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const splicedArr = contacts.splice(randomIndex, 1);

  // Get the element from the spliced array
  const randomContact = splicedArr[0];

  // Create a new row
  const randomRow = document.createElement("tr");
  randomRow.innerHTML = `
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
  // Add the event listener to the delete button
  const deleteButton = randomRow.querySelector(".btn-delete");
  deleteButton.addEventListener("click", () => {
    randomRow.remove();
  });

  // Add the event listener to the like button
  const likeButton = randomRow.querySelector(".btn-like");

  const likeButtonPressed = () => {
    likeButton.classList.toggle("selected");
  };

  likeButton.addEventListener("click", likeButtonPressed);

  // Append the new row to the table body
  tableBody.appendChild(randomRow);
})