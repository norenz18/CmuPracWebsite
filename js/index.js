// const life = 100; // Number data type
// const name = "Renz"; // String data type
// const checkout = true || false; // Boolean data type
// const box = ""; // Undefined
// const bottle = null; // null
// const youtuber = "Traversy";

//console.log(box);

// function toUpper1(text) {
//   const upperCase = text.toUpperCase();
//   console.log(upperCase);
// }
// // toUpper(name);
// // toUpper(youtuber);

// const toUpper2 = function () {
//   console.log(name);
// };
// toUpper2();

// // ARROW FUNCTION ES6 MODERN
// const toUpper3 = () => {
//   console.log(name);
// };
// toUpper3();
// const name = "N'zane";
// const age = 27;
// const combine = name + age;
// //console.log(`Hi I'am ${name} and my age is ${age}`);
// console.log(typeof age);
// console.log(typeof name);

// IF ELSE STATEMENT
// const age = 18;

// if (age === 18) {
//   console.log("You are good to go");
// } else if (age < 15) {
//   console.log("You are Really young");
// } else {
//   console.log("You`re not allowed");
// }

//AND &&
// const dice1 = 6;
// const dice2 = 3;

// if (dice1 === 6 && dice2 === 6) {
//   console.log("You rolled a double!");
// } else {
//   console.log("No! you didn't");
// }

// OR ||
// const dice1 = 8;
// const dice2 = 8;

// if (dice1 === 8 || dice2 === 8) {
//   console.log("You rolled a double!");
// } else {
//   console.log("No! you didn't");
// }

// ARRAY
// const schedule = [
//   "wake up",
//   "Eat",
//   "filming a video",
//   "watching things on netflix",
// ];

// //schedule.unshift("drink coffee");
// console.log(schedule);

// OBJECT AND KEYWORDS

// const user = {
//   name: "Renz",
//   age: 27,
//   married: false,
//   purchases: ["phone", "car", "laptop"],

//   sayName: function () {
//     console.log(this.married);
//   },
// };
// user.sayName();

// console.log(user.purchases);

//FOR LOOP
// const name = ["Renz", "qwerty", "nzane", "norenz", "zane"];

// for (names of name) {
//   console.log(names);
//   if (names === "nzane") {
//     console.log(`${names} is in my list`);
//     break;
//   }
// }

// WHILE LOOP
// let loading = 0;

// while (loading < 100) {
//   console.log("Loading");

//   loading++;
// }

// const text = document.querySelector(".title");
// const changeColor = document.querySelector(".changeColor");
// const userList = document.querySelector(".name-list");
// const listInput = document.querySelector(".list-input");
// const addListBtn = document.querySelector(".addListBtn");
// // for (user of userList) {
// //   user.addEventListener("click", function () {
// //     // this.style.color = "red";
// //   });
// // }
// // text.style.color = "Green";

// addListBtn.addEventListener("click", function () {
//   // create an li out of thin air
//   const newLi = document.createElement("li");
//   const liContent = document.createTextNode(listInput.value);
//   //add the input value inside that nav li
//   newLi.appendChild(liContent);
//   //attaching the li to the user list
//   userList.appendChild(newLi);
// });

// text.classList.add("change");
// changeColor.addEventListener("click", function (e) {
//   e.preventDefault();
//   text.classList.toggle("change");
// });

const openModal = document.querySelector(".modal-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const closeButton = document.querySelector(".close-btn");

openModal.addEventListener("click", function (e) {
  e.preventDefault();

  modalOverlay.classList.add("open-modal");
});

closeButton.addEventListener("click", function () {
  modalOverlay.classList.remove("open-modal");
});

// const menu = [
//   {
//     id: 1,
//     title: "Buttermilk pancakes",
//     category: "Breakfast",
//     price: 15.99,
//     img: "image",
//     desc:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, quis quod! Repellendus, rem ad! Rem eligendi molestias voluptas iusto maxime",
//   },
//   {
//     id: 2,
//     title: "Adobo",
//     category: "Lunch",
//     price: 15.99,
//     img: "image",
//     desc:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, quis quod! Repellendus, rem ad! Rem eligendi molestias voluptas iusto maxime",
//   },
//   {
//     id: 3,
//     title: "Tapa",
//     category: "Breakfast",
//     price: 15.99,
//     img: "image",
//     desc:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, quis quod! Repellendus, rem ad! Rem eligendi molestias voluptas iusto maxime",
//   },
//   {
//     id: 4,
//     title: "Sinigang",
//     category: "Lunch",
//     price: 15.99,
//     img: "image",
//     desc:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, quis quod! Repellendus, rem ad! Rem eligendi molestias voluptas iusto maxime",
//   },
//   {
//     id: 5,
//     title: "Fried Tilapia",
//     category: "Dinner",
//     price: 15.99,
//     img: "image",
//     desc:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, quis quod! Repellendus, rem ad! Rem eligendi molestias voluptas iusto maxime",
//   },
//   {
//     id: 6,
//     title: "Kaldereta",
//     category: "Lunch",
//     price: 15.99,
//     img: "image",
//     desc:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, quis quod! Repellendus, rem ad! Rem eligendi molestias voluptas iusto maxime",
//   },
//   {
//     id: 7,
//     title: "Lechon",
//     category: "Lunch",
//     price: 15.99,
//     img: "/img/bannercmu.png",
//     desc:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, quis quod! Repellendus, rem ad! Rem eligendi molestias voluptas iusto maxime",
//   },
//   {
//     id: 8,
//     title: "Bangus",
//     category: "Dinner",
//     price: 15.99,
//     img: "image",
//     desc:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, quis quod! Repellendus, rem ad! Rem eligendi molestias voluptas iusto maxime",
//   },
//   {
//     id: 9,
//     title: "Fried Chicken",
//     category: "Dinner",
//     price: 15.99,
//     img: "image",
//     desc:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, quis quod! Repellendus, rem ad! Rem eligendi molestias voluptas iusto maxime",
//   },
// ];

// const sectionCenter = document.querySelector(".section-center");

// const filterBtns = document.querySelectorAll(".filter-btn");

// //load items
// window.addEventListener("DOMContentLoaded", function () {
//   displayMenuItems(menu);
// });
// //filter items
// filterBtns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const category = e.currentTarget.dataset.id;

//     const menuCategory = menu.filter(function (menuItem) {
//       return menuItem;
//     });
//     console.log(menuCategory);
//   });
// });

// function displayMenuItems(menuItems) {
//   let displayMenu = menuItems.map(function (item) {
//     return `<div class="menu-item">
//       <img src=${item.img}alt="" class="photo" />
//       <div class="item-info">
//         <header>
//           <h4>${item.title}</h4>
//           <h4 class="price">${item.price}</h4>
//         </header>
//         <p class="item-text">
//         ${item.desc}
//         </p>
//       </div>
//     </div>`;
//   });
//   displayMenu = displayMenu.join("");
//   sectionCenter.innerHTML = displayMenu;
// }
