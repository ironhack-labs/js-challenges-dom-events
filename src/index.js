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
threeContacts.forEach(element => {
  const newsContacts1 = document.createElement('tr')
  newsContacts1.innerHTML=`
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
`
tableBody.appendChild(newsContacts1)
 // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
const button = newsContacts1.querySelector('.btn-delete')
  button.onclick = () => {
    newsContacts1.remove()
  }
  // ITERATION 3 - Like Buttons

  // Your code goes here ...
  const likeButton = newsContacts1.querySelector('.btn-like')
  likeButton.onclick = () => { likeButton.classList.toggle('selected')    
  }
});

 
// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

const randomButton = document.querySelector('#btn-add-random')
  randomButton.onclick = () => {
    
const randomPj = Math.floor(Math.random() * contacts.length);
const splicedArr1 = contacts.splice(randomPj, 1);
const randomPj1 = splicedArr1[0];
    const randomNpc = document.createElement("tr");
randomNpc.innerHTML = `
  <td>
    <img src="${randomPj1.pictureUrl}" />
  </td>
  <td> ${randomPj1.name} </td>
  <td> ${randomPj1.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(randomNpc);
  }