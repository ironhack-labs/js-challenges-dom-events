// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
// elemento del html de anadir

const tableBody = document.querySelector("tbody#contacts");
// tabla a rellenar


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
//variable para el index

const splicedArr = contacts.splice(randomIndex, 1);
// elemento con la informacion del famoso. Es un objeto, que aparte de un json tiene el prototipo


// Get the element from the spliced array
const randomContact = splicedArr[0];
console.log(splicedArr)
// elemento js aislado con la informacion del famoso
// tiene esta estructura:
// {
// name: "Colin Firth"
// pictureUrl: "https://image.tmdb.org/t/p/w500/lKUq407IhFF6CQoJbUgbEyfS9JA.jpg"
// popularity: 7.994861
// wonOscar: true
// }

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
const buttonDelete = exampleRow.querySelector(".btn-delete");
    buttonDelete.addEventListener("click", ()=>{
    exampleRow.remove()})
const buttonLike = exampleRow.querySelector(".btn-like");
    buttonLike.addEventListener("click", ()=>{
    buttonLike.classList.toggle('btn-like-selected')})

tableBody.appendChild(exampleRow);





// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

threeContacts.forEach(contact => {
  const newRow = document.createElement("tr");
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
      </td>
      `;
      // ITERATION 2 - Delete Buttons
      const buttonDelete = newRow.querySelector(".btn-delete");
      buttonDelete.addEventListener("click", ()=>{
        newRow.remove()
      })
      // ITERATION 3 - Like Buttons
      const buttonLike = newRow.querySelector(".btn-like");
      buttonLike.addEventListener("click", ()=>{
        buttonLike.classList.toggle('btn-like-selected')})

      tableBody.appendChild(newRow);
});

// Bonus: ITERATION 4 - Add Random Contacts
buttonAddRandom.addEventListener("click", ()=>{
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const splicedArr = contacts.splice(randomIndex, 1);
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
  const buttonDelete = exampleRow.querySelector(".btn-delete");
      buttonDelete.addEventListener("click", ()=>{
      exampleRow.remove()})
  const buttonLike = exampleRow.querySelector(".btn-like");
      buttonLike.addEventListener("click", ()=>{
      buttonLike.classList.toggle('btn-like-selected')})

  tableBody.appendChild(exampleRow);
})
