// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

let createNewRow = () => {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const splicedArr = contacts.splice(randomIndex, 1);

  // Get the element from the spliced array
  const randomContact = splicedArr[0];
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>
      <div class="contact-pic" style="background-image:url('${randomContact.pictureUrl}')">
        &nbsp;
      </div>
    </td>
    <td class="contact-name"> ${randomContact.name} </td>
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

  newRow.querySelector('.btn-delete').addEventListener('click', () => {
    tableBody.removeChild(newRow);
  });
  
  newRow.querySelector('.btn-like').addEventListener('click', () => {
    newRow.querySelector('.btn-like').classList.toggle('selected');
  });

  return newRow
}

  
buttonAddRandom.addEventListener('click', () => {
  tableBody.appendChild(createNewRow());
})

// first contact
tableBody.appendChild(createNewRow());

// first 3 contacts
contacts.splice(0, 3).forEach((e) => {
  tableBody.appendChild(createNewRow())
})