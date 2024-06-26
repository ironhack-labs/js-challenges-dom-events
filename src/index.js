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

  tableBody.appendChild(eachRow); // a la tabla se le añade la fila

  const deleteBtnCurrentRow = eachRow.querySelector(".btn-delete");

  deleteBtnCurrentRow.addEventListener("click", () => {
    eachRow.remove();

    
  });
  const selectedLikeBtn = exampleRow.querySelector(".btn-like");
  selectedLikeBtn.addEventListener("click", () => {
  selectedLikeBtn.style.backgroundColor = "#fd9a9a"
  })
});

// ITERATION 2 - Delete Buttons

const deleteBtnFirstRow = exampleRow.querySelector(".btn-delete");

deleteBtnFirstRow.addEventListener("click", () => {
  exampleRow.remove();
});

// ITERATION 3 - Like Buttons

const likeBtns = document.querySelectorAll(".btn-like");

likeBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.currentTarget.style.backgroundColor = "#fd9a9a";
  });
});

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
