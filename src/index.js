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

// Add event listener to the Delete button
const deleteButton = exampleRow.querySelector(".btn-delete");
deleteButton.addEventListener("click", () => {
  exampleRow.remove();
});

// Add event listener to the Like button
const likeButton = exampleRow.querySelector(".btn-like");
likeButton.addEventListener("click", () => {
  if(likeButton.className == "btn-like") {
    likeButton.setAttribute("class", "btn-like selected")
  } else {
    likeButton.setAttribute("class", "btn-like")
  }
  
});




// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...

threeContacts.forEach(newRow => {
  

  const fila = document.createElement("tr");
  fila.innerHTML = `
      <td>
      <img src="${newRow.pictureUrl}" />
      </td>
      <td> ${newRow.name} </td>
      <td> ${newRow.popularity.toFixed(2)} </td>
      <td>
      <button class="btn-delete">Delete</button>
      </td>
      <td>
      <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
      </button>
      </td>
      `;

    tableBody.appendChild(fila);

    // Add event listener to the Delete button
    const deleteButton = fila.querySelector(".btn-delete");
    deleteButton.addEventListener("click", () => {
    fila.remove();
    });

    // Add event listener to the Like button
    const likeButton = fila.querySelector(".btn-like");
    likeButton.addEventListener("click", () => {
      if(likeButton.className == "btn-like") {
        likeButton.setAttribute("class", "btn-like selected")
      } else {
        likeButton.setAttribute("class", "btn-like")
      }
      
    });

  });

  
    buttonAddRandom.addEventListener("click", () => {
    
      const randomIndex = Math.floor(Math.random() * contacts.length);
      const splicedArr = contacts.splice(randomIndex, 1);

      // Get the element from the spliced array
      const randomContact = splicedArr[0];

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

      tableBody.appendChild(randomRow);
    
    });