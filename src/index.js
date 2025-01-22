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
for (i = 0; i < threeContacts.length; i++) {
  const otherRow = document.createElement("tr");
  otherRow.innerHTML = `
    <td>
      <img src="${threeContacts[i].pictureUrl}" />
    </td>
    <td> ${threeContacts[i].name} </td>
    <td> ${threeContacts[i].popularity.toFixed(2)} </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;

  tableBody.appendChild(otherRow);
}
// ITERATION 2 - Delete Buttons

const deleteBtns = document.getElementsByClassName("btn-delete");

for (let btn of deleteBtns) {
  btn.addEventListener("click", function (event) {
    const rowToDelete = event.target.closest("tr");
    rowToDelete.remove();
  });
}

// ITERATION 3 - Like Buttons

const likeBtns = document.getElementsByClassName("btn-like");

//likeBtns.forEach((btn) =>
// btn.addEventListener("click", () => btn.classList.toggle("selected")) option with forEach and minimized sytax
//);

// const selectedBtns = document.getElementsByClassName("btn-like.selected");
for (let btn of likeBtns) {
  btn.addEventListener("click",function () {btn.classList.toggle("selected")}); // for of (cleaner) but with longer syntax 
}
// if (btn.className === "btn-like") {

// event.target.classList.remove("btn-like");
// event.target.style.backgroundColor = "red";

// } else {

//   event.target.classList.add("btn-like");
//   event.target.classList.remove("btn-like.selected");
//   event.target.style.backgroundColor = "grey";
// }

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...


buttonAddRandom.addEventListener("click", () => {
  const otherRow1 = document.createElement("tr");
  otherRow1.innerHTML = `
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

  tableBody.appendChild(otherRow1);
})
