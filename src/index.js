// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// ITERATION 0 | Example Row
const randomIndex = Math.floor(Math.random() * contacts.length);
const randomContact = contacts.splice(randomIndex, 1)[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
    <td><img src="${randomContact.pictureUrl}" /></td>
    <td>${randomContact.name}</td>
    <td>${randomContact.popularity.toFixed(2)}</td>
    <td><button class="btn-delete">Delete</button></td>
    <td><button class="btn-like"><img src="./images/icon.png" alt="like" /></button></td>
`;
tableBody.appendChild(exampleRow);

// ITERATION 1 - Display 3 Contacts
const threeContacts = contacts.splice(0, 3);
for (const contact of threeContacts) {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td><img src="${contact.pictureUrl}" /></td>
        <td>${contact.name}</td>
        <td>${contact.popularity.toFixed(2)}</td>
        <td><button class="btn-delete">Delete</button></td>
        <td><button class="btn-like"><img src="./images/icon.png" alt="like" /></button></td>
    `;
    
    // Add Delete and Like button functionality
    const deleteButton = newRow.querySelector('.btn-delete');
    deleteButton.addEventListener('click', () => newRow.remove());

    const likeButton = newRow.querySelector('.btn-like');
likeButton.addEventListener('click', () => likeButton.classList.toggle('selected'));



    tableBody.appendChild(newRow);
}

// BONUS: Add Random Contacts Button
buttonAddRandom.addEventListener('click', () => {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td><img src="${randomContact.pictureUrl}" /></td>
        <td>${randomContact.name}</td>
        <td>${randomContact.popularity.toFixed(2)}</td>
        <td><button class="btn-delete">Delete</button></td>
        <td><button class="btn-like"><img src="./images/icon.png" alt="like" /></button></td>
    `;

    // Add Delete and Like button functionality
    const deleteButton = newRow.querySelector('.btn-delete');
    deleteButton.addEventListener('click', () => newRow.remove());

    const likeButton = newRow.querySelector('.btn-like');
    likeButton.addEventListener('click', () => newRow.classList.toggle('selected'));

    tableBody.appendChild(newRow);
});