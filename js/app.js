// QUERY SELECTOR EXAMPLES

// const navBar = document.querySelector("#navbar-main");
// navBar.style.borderBottom = "5px solid #EEA73C";

// // QUERY SELECTOR ALL EXAMPLES

// const titles = document.querySelectorAll(".title");

// console.log(titles);
// titles[0].textContent = "Hello";

// const odd = document.querySelectorAll("li:nth-child(odd)");
// const even = document.querySelectorAll("li:nth-child(even)");

// for (let i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = "#f4f4f4";
//   even[i].style.backgroundColor = "#ccc";
// }

// //TRAVERSING THE DOM

// const itemList = document.querySelector("#items");

// // parent node
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentNode.parentNode);

// // parent node
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentElement.parentElement);

// // //children
// // console.log(itemList.children)
// console.log(itemList.children[1]);
// itemList.children.style.backgroundColor = "yellow";

// //First Child
// //console.log(itemList.firstChild)

// //firstElementChild

// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "Hello 1";

// //lastElementChild

// console.log(item.lastElementChild);
// // itemList.lastElementChild.textContent = "hello 2";
// const schedule = [
//   "wake up",
//   "Eat",
//   "filming a video",
//   "watching things on netflix",
// ];

// console.log();

// let myImage = document.querySelector("#img1");

// myImage.onclick = function () {
//   let mySrc = myImage.getAttribute("src");
//   if (mySrc === "./img/news1.jpg") {
//     myImage.setAttribute("src", "./img/news2.jpg");
//   } else {
//     myImage.setAttribute("src", "./img/news1.jpg");
//   }
// };

// let image = document.querySelector("#img2");

// image.onclick = function () {
//   let src = image.getAttribute("src");
//   if (src === "./img/news2.jpg") {
//     image.setAttribute("src", "./img/news3.jpg");
//   } else {
//     image.setAttribute("src", "./img/news2.jpg");
//   }
// };

// let myButton = document.querySelector("button");
// myButton.onclick = function () {
//   setUserName();
// };

// let myHeading = document.querySelector("h1");

// function setUserName() {
//   let myName = prompt("Enter your name");
//   localStorage.setItem("name", myName);
//   myHeading.textContent = "mozzila is cool" + myName;
// }

// if (!localStorage.getItem("name")) {
//   setUserName();
// } else {
//   let storedName = localStorage.getItem("name");
//   myHeading.textContent = "Mozilla is cool" + storedName;
// }

// const button = document.querySelector(".btn");

// button.onclick = function () {
//   let name = prompt("Enter your name");
//   document.write(`Hello ${name}, nice to see you!`);
// };
