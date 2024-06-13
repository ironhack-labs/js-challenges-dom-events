
const tableBody = document.querySelector('tbody#contacts');


const threeContacts = contacts.splice(0, 3);


threeContacts.forEach(contact => {

  const newRow = document.createElement('tr');

  
  newRow.innerHTML = `
    <td><img src="${contact.pictureUrl}" /></td>
    <td>${contact.name}</td>
    <td>${contact.popularity.toFixed(2)}</td>
    <td><button class="btn-delete">Delete</button></td>
    <td><button class="btn-like"><img src="./images/icon.png" alt="like" /></button></td>
  `;


  tableBody.appendChild(newRow);


  const deleteButton = newRow.querySelector('.btn-delete');
  deleteButton.addEventListener('click', function() {
    newRow.remove(); // Satırı tablodan kaldır
  });

  
  const likeButton = newRow.querySelector('.btn-like');
  likeButton.addEventListener('click', function() {
    newRow.classList.toggle('selected'); // 'selected' sınıfını değiştir (ekle/kaldır)
  });
});
