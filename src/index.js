// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const multiplier = document.querySelector('#how-many');
const tableBody = document.querySelector("tbody#contacts");


// Create a function to get a random contact object from the contacts array
const getRandomContact = () => {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const splicedArr = contacts.splice(randomIndex, 1);
  
  // Get the element from the spliced array
  const randomContact = splicedArr[0];
  return randomContact;
}

// create a function to generate a tr for a new contact
const generateNewRow = (newContact) => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>
      <img src="${newContact.pictureUrl}" />
    </td>
    <td> ${newContact.name} </td>
    <td> ${newContact.popularity} </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;

  let deleteButton = newRow.querySelector(".btn-delete");
  deleteButton.addEventListener("click", () => {
    const contactIndex = Contact.allContacts.indexOf(newContact);
    Contact.allContacts.splice(contactIndex, 1);
    newRow.remove();
  });

  let likeButton = newRow.querySelector(".btn-like");
  likeButton.addEventListener("click", () => likeButton.classList.toggle("selected"));

  tableBody.appendChild(newRow);
};

// ITERATION 1 - Display X contacts
// Crete a function to get the first X contacts from the 'contacts' array.

const getFirstContacts = (numberOfContacts) => {
  const contactsArr = contacts.splice(0, numberOfContacts);
  contactsArr.forEach(contact => {
    const newContact = new Contact(contact);
    generateNewRow(newContact);
  })
}

// getFirstContacts(5);

// ITERATION 1.2 - Display X contacts randomly
// Crete a function to get X random contacts from the 'contacts' array.

const getRandomContacts = (numberOfContacts) => {
  for (let i = 0; i < numberOfContacts; i++) {
    // create an instance of a new random contact
    const randomContact = getRandomContact();
    const newContact = new Contact(randomContact);
    generateNewRow(newContact);
  }
}

// Bonus: ITERATION 4 - Add Random Contacts

buttonAddRandom.addEventListener("click", () => {
  getRandomContacts(multiplier.value);
});

// Bonus: ITERATION 5 - Sort Contacts by Name

// Your code goes here ...

// 1. Create a new button with the text 'Sort by Name'.
const body = document.querySelector("body");
const sortButton = document.createElement("button");
sortButton.innerHTML = "Sort by Name";
body.appendChild(sortButton);

// 2. Create a new array with the contacts for the table. The array should contain all the contacts to be displayed in the table.

/* 3. Create a helper function `showContacts()` that will display the contacts in the table. This function should take an array of contacts as an argument and display them in the table. When called the function should:
    - Remove the existing rows from the table.
    - Iterate over the array of contacts and, for each contact, create a new table row and append it to the table body.
    - Add event listeners to the *Delete* and *Like* buttons of the new rows. 
*/

const showContacts = (contactsArr) => {
  // - Remove the existing rows from the table.
  tableBody.innerHTML = "";

  // - Iterate over the array of contacts and, for each contact, create a new table row and append it to the table body.
  for (let i = 0; i < contactsArr.length; i++) {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
    <td>
    <img src="${contactsArr[i].pictureUrl}" />
    </td>
    <td> ${contactsArr[i].name} </td>
    <td> ${contactsArr[i].popularity} </td>
    <td>
    <button class="btn-delete">Delete</button>
    </td>
    <td>
    <button class="btn-like">
    <img src="./images/icon.png" alt="like" />
    </button>
    </td>
    `;

    tableBody.appendChild(newRow);

    // - Add event listeners to the *Delete* and *Like* buttons of the new rows.
    let deleteButton = newRow.querySelector(".btn-delete");
    deleteButton.addEventListener("click", () => newRow.remove());

    let likeButton = newRow.querySelector(".btn-like");
    likeButton.addEventListener("click", () =>
      likeButton.classList.toggle("selected")
    );
  }
};

sortButton.addEventListener("click", () => {
  /*  const arrayContactList = [];
  const myContacts = tableBody.querySelectorAll('tr');
  myContacts.forEach(contact => {
    const contactData = contact.querySelectorAll('td');
    const contactObject = {
      contactImage: contactData[0].getElementsByTagName('img')[0].src,
      contactName: contactData[1].textContent,
      popularityScore: contactData[2].textContent,
    };
    arrayContactList.push(contactObject);
  })
  console.log(allContacts); */

  allContacts.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    } else if (a.name === b.name) {
      return 0;
    } else {
      return -1;
    }
  });
  console.log("después del sort", allContacts);

  showContacts(allContacts);
});



