// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

/* // Get the element from the spliced array
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

tableBody.appendChild(exampleRow); */





// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3); // Remove os 3 primeiros contatos do array

// Your code goes here ...
// Para cada contato, cria uma linha na tabela
threeContacts.forEach((contact) => {
  const row = document.createElement("tr"); // Cria uma nova linha de tabela
  row.innerHTML = `
  <td>
    <img src="${contact.pictureUrl}" />
  </td>
  <td> ${contact.name} </td>
  <td> ${contact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(row); // Adiciona a linha á tabela


  
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
  // Ativar o botão de delete
  const deleteBtn = row.querySelector(".btn-delete");

  deleteBtn.addEventListener("click", () => {
    row.remove(); // Remove a linha da tabela quando o clicar no botão
  });
  // ITERATION 3 - Like Buttons

  // Your code goes here ...
  // Ativar o botão do Like
  const likeBtn = row.querySelector(".btn-like");

  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("selected"); // Se o botão não tiver a classe "selected", adiciona-a. Se já tiver, remove-a.
  })
});
  
// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
buttonAddRandom.onclick = () => {  //Clique do botão
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const newContact = contacts[randomIndex]; 

  const row = document.createElement("tr"); // Cria uma nova linha para a tabela
  row.innerHTML = `
  <td>
    <img src="${newContact.pictureUrl}" />
  </td>
  <td> ${newContact.name} </td>
  <td> ${newContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

  tableBody.appendChild(row);

  
  const deleteBtn = row.querySelector(".btn-delete");
  deleteBtn.addEventListener("click", () => {
    row.remove(); 
  });

  const likeBtn = row.querySelector(".btn-like");
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("selected");
  });
};
