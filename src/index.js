// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// Function to create a contact row
function createContactRow(contact) {
  const { pictureUrl, name, popularity } = contact; 
  const exampleRow = document.createElement("tr");

  exampleRow.innerHTML = `
    <td>
      <img src="${pictureUrl}" alt="${name}'s picture" />
    </td>
    <td>${name}</td>
    <td>${popularity.toFixed(2)}</td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;

  // Event listener for Delete button
  exampleRow.querySelector(".btn-delete").addEventListener("click", () => {
    exampleRow.remove(); 
  });

  // Event listener for Like button
  exampleRow.querySelector(".btn-like").addEventListener("click", () => {
    exampleRow.classList.toggle("selected"); 
  });

  return exampleRow; 
}


// ITERATION 0 | Example Row
const randomIndex0 = Math.floor(Math.random() * contacts.length);
const randomContact0 = contacts.splice(randomIndex0, 1)[0]; 
const exampleRow = createContactRow(randomContact0); 
tableBody.appendChild(exampleRow); 

// ITERATION 1 - Display 3 contacts
const threeContacts = contacts.splice(0, 3); 
threeContacts.forEach(contact => {
  const row = createContactRow(contact);  
  tableBody.appendChild(row); 
});

// ITERATION 2 - Delete Buttons
// Line 26 Code

// ITERATION 3 - Like Buttons
// Line 31 Code

// Bonus: ITERATION 4 - Add Random Contacts
buttonAddRandom.addEventListener("click", () => {
  const randomIndex4 = Math.floor(Math.random() * contacts.length); 
  const randomContact4 = contacts.splice(randomIndex4, 1)[0]; 
  const row = createContactRow(randomContact4); 
  tableBody.appendChild(row); 
});
