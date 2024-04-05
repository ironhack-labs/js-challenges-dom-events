// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 4);
console.log(splicedArr);
// Get the element from the spliced array
let button = document.getElementsByClassName("btn-like");
const randomContact = splicedArr;
splicedArr.forEach((e) => {
  const exampleRow = document.createElement("tr");

  exampleRow.innerHTML = `
  <td>
    <img src="${e.pictureUrl}" />
  </td>
  <td> ${e.name} </td>
  <td> ${e.popularity.toFixed(2)} </td>
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
  const btnLike = exampleRow.getElementsByClassName("btn-like")[0];
  btnLike.addEventListener("click", () => {
    if (btnLike.style.backgroundColor !== "red") {
      console.log("colors: red");
      btnLike.style.backgroundColor = "red";
    } else {
      btnLike.style.backgroundColor = "";
    }
  });

  const deleteB = exampleRow.querySelector(".btn-delete");

  deleteB.addEventListener("click", () => {
    tableBody.removeChild(exampleRow);
    console.log("whyyy");
  });
});

// Your code goes here ...

// ITERATION 2 - Delete Buttons

// Your code goes here ...

// ITERATION 3 - Like Buttons

// Your code goes here ...

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
