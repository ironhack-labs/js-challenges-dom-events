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
threeContacts.forEach(element => {
  const iteration1Row = document.createElement("tr");
    iteration1Row.innerHTML = `
      <td>
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
      </td>
      
    `;
    const deleteButton = iteration1Row.querySelector(".btn-delete");

    deleteButton.addEventListener("click", () => {
      iteration1Row.remove();
    })

    const likeButton = iteration1Row.querySelector(".btn-like");

    likeButton.addEventListener("click", () => {
      likeButton.classList.toggle("selected");
    })
     
    tableBody.appendChild(iteration1Row); });
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

    const addRandomContact = document.querySelector("#btn-add-random");

    

    addRandomContact.addEventListener("click", () => {
     
        const randomIndex = Math.floor(Math.random() * contacts.length);
        const splicedArr = contacts.splice(randomIndex, 1);
        const randomContact = splicedArr[0];

        const iterationBonus = document.createElement("tr");
        iterationBonus.innerHTML = `
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

        const deleteButton = iterationBonus.querySelector(".btn-delete");

        deleteButton.addEventListener("click", () => {
          iterationBonus.remove();
        })
    
        const likeButton = iterationBonus.querySelector(".btn-like");
    
        likeButton.addEventListener("click", () => {
          likeButton.classList.toggle("selected");
        })

        tableBody.appendChild(iterationBonus);
              
    })
