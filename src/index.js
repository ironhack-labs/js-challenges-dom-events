
// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...
const tbody = document.getElementById('contacts');
threeContacts.forEach(contact => {
const tr = document.createElement('tr');
  
 
  const pictureCell = document.createElement('td');
  const nameCell = document.createElement('td');
  const popularityCell = document.createElement('td');
  const favoriteCell = document.createElement('td');
  const actionCell = document.createElement('td');
  const likeCell = document.createElement('td');

  pictureCell.innerHTML = `<img src="${contact.pictureUrl}" alt="${contact.name}" />`;
  nameCell.textContent = contact.name;
  popularityCell.textContent = contact.popularity;
  favoriteCell.textContent = contact.favorite ? 'Yes' : 'No';
  
const deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete';
actionCell.appendChild(deleteButton);

const likeButton = document.createElement('button');
likeButton.textContent = 'Like';
likeButton.classList.add('btn-like');
likeCell.appendChild(likeButton);
  
  tr.appendChild(pictureCell);
  tr.appendChild(nameCell);
  tr.appendChild(popularityCell);
  tr.appendChild(favoriteCell);
  tr.appendChild(likeCell);
  tr.appendChild(actionCell);
  tbody.appendChild(tr);

  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
  deleteButton.addEventListener('click', () => {
    tr.remove();
  });



  // ITERATION 3 - Like Buttons

  // Your code goes here ...
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('selected');
  });
  
  tbody.appendChild(tr); 
});
  
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
