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
// Iteration 1 - Display 3 contacts
const threeContacts = contacts.splice(0, 3); 

threeContacts.forEach(contact => {
  let tr = document.createElement('tr'); // Create a new row for each contact


  let tdPicture = document.createElement('td');
  tdPicture.innerHTML = `<img src="${contact.pictureUrl}" style="height:100px;">`; // Adjust the size as necessary
  tr.appendChild(tdPicture);

  
  let tdName = document.createElement('td');
  tdName.textContent = contact.name;
  tr.appendChild(tdName);

  
  let tdPopularity = document.createElement('td');
  tdPopularity.textContent = contact.popularity.toFixed(2);
  tr.appendChild(tdPopularity);

 
  let tdDelete = document.createElement('td');
  tdDelete.innerHTML = `<button class="btn-delete">Delete</button>`;
  tr.appendChild(tdDelete);
  const deleteButton = tdDelete.querySelector(".btn-delete");
  console.log(deleteButton);
  deleteButton.addEventListener('click', function() {
    
    this.parentNode.parentNode.remove();
  });

  
  let tdLike = document.createElement('td');
  tdLike.innerHTML = `<button class="btn-like"><img src="./images/icon.png" alt="like"/></button>`;
  tr.appendChild(tdLike);

  const favoriteButton = tdLike.querySelector(".btn-like");
  console.log(favoriteButton);
  favoriteButton.addEventListener('click', function() {
    this.classList.toggle('selected');
  });

  

  
  let tbody = document.querySelector("tbody#contacts");
  tbody.appendChild(tr);
});


  
  // ITERATION 2 - Delete Buttons
  const deleteButton = document.querySelector(".btn-delete");
  console.log(deleteButton);
  deleteButton.addEventListener('click', function() {
    
    this.parentNode.parentNode.remove();
  });

  // ITERATION 3 - Like Buttons

  const favoriteButton = document.querySelector(".btn-like");
  console.log(favoriteButton);
  favoriteButton.addEventListener('click', function() {
    this.classList.toggle('selected');
  });

  // Your code goes here ...

  
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...


const choices = document.querySelectorAll('input[name="choice"]');
console.log(choices);
choices.forEach((choice) => {
  if(choice.checked) {
    selectedAnswer = choice.value;
  }
});