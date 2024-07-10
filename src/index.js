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
const button = document.querySelector("button");

let idGenerator = 0
// Your code goes here ...

threeContacts.forEach(element => {
  const numberId = threeContacts.indexOf(element)
  const threeContactsTr = document.createElement("tr");
  threeContactsTr.id = numberId

  threeContactsTr.innerHTML = `
  <td>
    <img src="${element.pictureUrl}" />
  </td>
  <td> ${element.name} </td>
  <td> ${element.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like" >
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;
  tableBody.appendChild(threeContactsTr);
});

// ITERATION 2 - Delete Buttons

// Your code goes here ...
const deleteArr = document.querySelectorAll(".btn-delete")
deleteArr.forEach(element => {
  element.onclick = (e) => {
    e.target.parentNode.parentNode.remove()
  }
});

// ITERATION 3 - Like Buttons

// Your code goes here ...
const likeArr = document.querySelectorAll(".btn-like")
likeArr.forEach(element => {
  element.onclick = (e) => {
    element.classList.toggle("selected")
  }
});

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
buttonAddRandom.onclick = (e) => {
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


  const deleteArr1 = document.querySelectorAll(".btn-delete")
  const likeArr1 = document.querySelectorAll(".btn-like")

  deleteArr1.forEach(element => {
    element.onclick = (e) => {
      e.target.parentNode.parentNode.remove()
    }

  })

  likeArr1.forEach(element => {
    element.onclick = (e) => {
      element.classList.toggle("selected")
    }
  });
}

// ITERATION 3 - Like Buttons

// Your code goes here ...
