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
if (contacts.length > 0) {
  const threeContacts = contacts.splice(0, 3);

  threeContacts.forEach((contact) => {
    const clone = document.querySelector("template").content.cloneNode(true);
    const img = clone.querySelector("td > img");
    img.src = contact.pictureUrl;
    clone.querySelector(".contact-name").textContent = contact.name;
    clone.querySelector(".contact-popularity").textContent =
      contact.popularity.toFixed(2);
    const deleteButton = clone.querySelector(".btn-delete");
    const tr = clone.querySelector("tr");
    deleteButton.addEventListener("click", () => handleDeleteContact(tr));

    tableBody.append(clone);

    //   const tr = document.createElement("tr");
    //   tr.innerHTML = `
    //   <td>
    //     <img src="${contact.pictureUrl}" />
    //   </td>
    //   <td> ${contact.name} </td>
    //   <td> ${contact.popularity.toFixed(2)} </td>
    //   <td>
    //     <button class="btn-delete">Delete</button>
    //   </td>
    //   <td>
    //     <button class="btn-like">
    //       <img src="./images/icon.png" alt="like" />
    //     </button>
    //   </td>
    // `;
    //   tableBody.append(tr);
    // });
  });
}

// ITERATION 3 - Like Buttons
function handleLike(event) {
  event.currentTarget.classList.toggle("selected");
}

function handleDeleteContact(row) {
  return () => {
    row.remove();
  };
  const button = event.target;
  const row = button.closest("tr");
  row.remove();
}

// Bonus: ITERATION 4 - Add Random Contacts
function slectARandomContact() {
  const randomIndex = Math.floor;
}

// Your code goes here ...

// ITERATION 2 - Delete Buttons

// Your code goes here ...

// Your code goes here ...

// Your code goes here ...
