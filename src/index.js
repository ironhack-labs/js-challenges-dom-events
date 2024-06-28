// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);
console.log(splicedArr);

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
const threeContacts = contacts.splice(0, 3); // array con 3 elementos

// Your code goes here ...
threeContacts.forEach((eachContact) => {
  const eachRow = document.createElement("tr");
  eachRow.innerHTML = `
  <td>
    <img src="${eachContact.pictureUrl}" />
  </td>
  <td> ${eachContact.name} </td>
  <td> ${eachContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

  tableBody.appendChild(eachRow); // se usa appen o appenChild para añadir nodos

  const deleteBtn = eachRow.querySelector(".btn-delete");
  deleteBtn.addEventListener("click", () => {
    eachRow.remove();
  });

  const darleLike = eachRow.querySelector(".btn-like");
  darleLike.addEventListener("click", () => {
    darleLike.style.backgroundColor = "#fd9a9a";
  })
});

// ITERATION 2 - Delete Buttons

// Your code goes here ...

const deleteBtnExample = exampleRow.querySelector(".btn-delete");
deleteBtnExample.addEventListener("click", () => {
  exampleRow.remove();
});

// ITERATION 3 - Like Buttons

// Your code goes here ...
const darleLikeExample = exampleRow.querySelector(".btn-like");
darleLikeExample.addEventListener("click", () => {
  darleLikeExample.style.backgroundColor = "#fd9a9a";
  const result = 
  darleLikeExample.classList.toggle("liked")
})
// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
