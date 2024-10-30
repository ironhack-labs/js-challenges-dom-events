// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// By using a class we can have differents lists independents from each other
// Everything works fine as long as two lists dont have the same 'tbody'
class ContactsList {

  constructor(table){
    this.table = table;
    this.lastIndex = 0;
    this.contactsRows = [];
  }


  createIndexedRow(contact){
    const row = document.createElement("tr");
    row.index = this.lastIndex;
    this.lastIndex++;
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
  // I could do a one liner for the buttons but it will be a mess;
    const rowDeleteButton = row.querySelector('.btn-delete');
    rowDeleteButton.addEventListener('click', () => {
      this.deleteIndexedRow(row.index);
      this.render();
    });

    const rowLikeButton = row.querySelector('.btn-like');
    rowLikeButton.addEventListener('click', () => rowLikeButton.classList.toggle('selected'));

    this.contactsRows.push(row);
  }

  deleteIndexedRow(index) {
    this.contactsRows = this.contactsRows.filter(contactRow => contactRow.index !== index);
  }

  render(){
    this.table.innerHTML = '';
    for(let contact of this.contactsRows){
      this.table.appendChild(contact);
    }
  }

  addContact(contact) {
    this.createIndexedRow(contact);
    this.render();
  }
}


const getRandomContact = () => contacts[Math.floor(Math.random() * contacts.length)];
const randomContact = getRandomContact();

const contactList = new ContactsList(tableBody);
contactList.addContact(randomContact);

const threeContacts = contacts.splice(0, 3);
threeContacts.forEach(contact => contactList.addContact(contact));  

buttonAddRandom.addEventListener('click', () => contactList.addContact(getRandomContact()));