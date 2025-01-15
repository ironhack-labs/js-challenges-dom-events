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
const likeButton = exampleRow.getElementsByClassName("btn-like")[0];
// console.log(likeButton);
likeButton.onclick = () => {
  likeButton.classList.toggle("selected");
};

// console.log(likeButton);
const deleteButton = exampleRow.querySelector("button");
deleteButton.onclick = () => {
  newRow.remove();
};

tableBody.appendChild(exampleRow);

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...
threeContacts.forEach((contact) => {
  const newRow = document.createElement("tr");
  tableBody.appendChild(newRow);
  newRow.innerHTML = `
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
  </td>`;
  const likeButton = newRow.getElementsByClassName("btn-like")[0];
  // console.log(likeButton);
  likeButton.onclick = () => {
    likeButton.classList.toggle("selected");
  };

  // console.log(likeButton);
  const deleteButton = newRow.querySelector("button");
  deleteButton.onclick = () => {
    newRow.remove();
  };
});

// ITERATION 2 - Delete Buttons

// Your code goes here ...

// ITERATION 3 - Like Buttons

// Your code goes here ...

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

const addRandomContactBtn = document.getElementById("btn-add-random");
addRandomContactBtn.onclick = () => {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const splicedArr = contacts.splice(randomIndex, 1);
  const randomContact = splicedArr[0];
  console.log(randomContact.popularity);


  const newRow = document.createElement("tr");
  tableBody.appendChild(newRow);
  newRow.innerHTML = `
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
const likeButton = newRow.getElementsByClassName("btn-like")[0];
likeButton.addEventListener('click', () => {
  likeButton.classList.toggle('selected');
});

const deleteButton = newRow.querySelector(".btn-delete");
deleteButton.onclick = () => {
  newRow.remove();
};
};
