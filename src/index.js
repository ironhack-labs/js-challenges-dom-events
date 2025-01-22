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

const exampleBtn = exampleRow.querySelectorAll(".btn-delete");
exampleBtn.forEach((btnElm) => {
  btnElm.addEventListener("click", () => {
    exampleRow.remove();
  })
});


const exampleLikeBtn = exampleRow.querySelectorAll(".btn-like")
exampleLikeBtn.forEach((btnLikeElm) => {
  btnLikeElm.addEventListener("click", () => {
    btnLikeElm.classList.toggle("selected");
  })
});





// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
//const randomIndex = Math.floor(Math.random() * contacts.length);
const firstThree = contacts.splice(0, 3);

// Get the element from the spliced array
const firstContact = firstThree[0];

const firstRow = document.createElement("tr");
firstRow.innerHTML = `
  <td>
    <img src="${firstContact.pictureUrl}" />
  </td>
  <td> ${firstContact.name} </td>
  <td> ${firstContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;


tableBody.appendChild(firstRow);

const firstBtn = firstRow.querySelectorAll(".btn-delete");

firstBtn.forEach((btnElm) => {
  btnElm.addEventListener("click", () => {
    firstRow.remove();
  })
});

const firstLikeBtn = firstRow.querySelectorAll(".btn-like")
firstLikeBtn.forEach((btnLikeElm) => {
  btnLikeElm.addEventListener("click", () => {
    btnLikeElm.classList.toggle("selected");
  })
});




const secondContact = firstThree[1];

const secondRow = document.createElement("tr");
secondRow.innerHTML = `
  <td>
    <img src="${secondContact.pictureUrl}" />
  </td>
  <td> ${secondContact.name} </td>
  <td> ${secondContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(secondRow);

const secondBtn = secondRow.querySelectorAll(".btn-delete");
secondBtn.forEach((btnElm) => {
  btnElm.addEventListener("click", () => {
    secondRow.remove();
  })
});

const secondLikeBtn = secondRow.querySelectorAll(".btn-like")
secondLikeBtn.forEach((btnLikeElm) => {
  btnLikeElm.addEventListener("click", () => {
    btnLikeElm.classList.toggle("selected");
  })
});



const thirdContact = firstThree[2];

const thirdRow = document.createElement("tr");
thirdRow.innerHTML = `
  <td>
    <img src="${thirdContact.pictureUrl}" />
  </td>
  <td> ${thirdContact.name} </td>
  <td> ${thirdContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(thirdRow);

const thirdBtn = thirdRow.querySelectorAll(".btn-delete");
thirdBtn.forEach((btnElm) => {
  btnElm.addEventListener("click", () => {
    thirdRow.remove();
  })
});

const thirdLikeBtn = thirdRow.querySelectorAll(".btn-like")
thirdLikeBtn.forEach((btnLikeElm) => {
  btnLikeElm.addEventListener("click", () => {
    btnLikeElm.classList.toggle("selected");
  })
});

