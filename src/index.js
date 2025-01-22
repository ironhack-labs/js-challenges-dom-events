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
threeContacts.forEach((contact) => {
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
});
// const firstContact = document.createElement("tr");
// firstContact.innerHTML = `
//   <td>
//     <img src="${contacts."https://image.tmdb.org/t/p/w500/sOkCXc9xuSr6v7mdAq9LwEBje68.jpg" />
//   </td>
//   <td> ${randomContact.name} </td>
//   <td> ${randomContact.popularity.toFixed(2)} </td>
//   <td>
//     <button class="btn-delete">Delete</button>
//   </td>
//   <td>
//     <button class="btn-like">
//       <img src="./images/icon.png" alt="like" />
//     </button>
//   </td>
// `;

// ITERATION 2 - Delete Buttons

// Your code goes here ...
const deleteBtnList = document.querySelectorAll(".btn-delete");
deleteBtnList.forEach((element) => {
  element.addEventListener("click", () => {
    const parentRow = element.closest("tr");
    parentRow.remove();
  });
});
// ITERATION 3 - Like Buttons

// Your code goes here ...
const likeButton = document.querySelector(".btn-like");
likeButton.addEventListener("click";(element) => {
const Row = likeButton?.closest("tr");
Row?.classList.toggle("selected")
});

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
