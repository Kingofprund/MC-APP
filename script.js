"use strict";

const welcomeButton = document.querySelector(".welcome-button");
const selectLocationButton = document.querySelectorAll(".button-photo");
const selectMeal = document.querySelectorAll(".menu-item");
const selectMealFirst = document.querySelectorAll(".menu-first-img");
const selectMealSecond = document.querySelectorAll(".menu-second-img");
const selectMealThird = document.querySelectorAll(".menu-third-img");
const selectMealForth = document.querySelectorAll(".menu-fourth-img");
const firstPage = document.querySelector(".first-page");
const secondPage = document.querySelector(".second-page");
const thirdPage = document.querySelector(".third-page");
const fourthPage = document.querySelector(".fourth-page");
const fifthPage = document.querySelector(".fifth-page");
const sixthPage = document.querySelector(".sixth-page");
const seventhPage = document.querySelector(".seventh-page");
const lastPage = document.querySelector(".total");

// Buttons

const hiddenFunction = function (page) {
  page.classList.toggle("hidden");
};
const hiddenFunction2 = function (pageName) {
  const page = document.querySelector(`.${pageName}`);
  if (page) {
    page.classList.toggle("hidden");
  }
};
welcomeButton.addEventListener("click", function () {
  hiddenFunction(firstPage);
  hiddenFunction(secondPage);
});
selectLocationButton.forEach(button => {
  button.addEventListener("click", () => {
    hiddenFunction(secondPage);
    hiddenFunction(thirdPage);
  });
});

// Menu

const menuItems = {
  bigmac: 20,
  doublecheeseburger: 28,
  spicymccrispy: 32,
  happymeal: 15,
  fries: 17,
  dippingfries: 18,
  ketchup: 6,
  garlic: 8,
  bbq: 10,
  cocacola: 100,
  fanta: 9,
  sprite: 12,
  water: 2,
};

const selectedItems = [];
const takeOrder = function (e) {
  const button = e.target;
  const itemName = button.textContent.toLowerCase().replaceAll(" ", "");
  const itemPrice = menuItems[itemName];
  if (itemPrice !== undefined) {
    const order = {
      name: itemName,
      price: itemPrice,
    };
    selectedItems.push(order);
  }
};

// selectMeal.forEach(button => {
//   button.addEventListener("click", e => {
//     const parentElement = button.parentElement;
//     console.log(parentElement.classList);
//     if (parentElement.classList.contains("menu-first")) {
//       hiddenFunction(thirdPage);
//       hiddenFunction(fourthPage);
//     } else if (parentElement.classList.contains("menu-second")) {
//       hiddenFunction(fourthPage);
//     }
//     takeOrder(e);
//   });
// });

// selectMeal.forEach(button => {
//   button.addEventListener("click", e => {
//     const targetPage = button.parentElement.getAttribute("data-show");
//     if (targetPage) {
//       console.log(targetPage);
//       console.log(hiddenFunction(targetPage));
//       takeOrder(e);
//     }
//   });
// });

selectMealFirst.forEach(button => {
  button.addEventListener("click", e => {
    hiddenFunction(thirdPage);
    hiddenFunction(fourthPage);
    takeOrder(e);
  });
});
selectMealSecond.forEach(button => {
  button.addEventListener("click", e => {
    hiddenFunction(fourthPage);
    hiddenFunction(fifthPage);
    takeOrder(e);
  });
});
selectMealThird.forEach(button => {
  button.addEventListener("click", e => {
    hiddenFunction(fifthPage);
    hiddenFunction(sixthPage);
    takeOrder(e);
  });
});
selectMealForth.forEach(button => {
  button.addEventListener("click", e => {
    hiddenFunction(sixthPage);
    hiddenFunction(seventhPage);
    takeOrder(e);
    totalPayment(selectedItems);
  });
});
const totalPayment = function (arr) {
  const mealNames = arr.map(mov => mov.name);
  const mealPrices = arr.map(mov => mov.price);
  lastPage.innerHTML = "";
  console.log(mealNames);
  console.log(mealPrices);
  mealNames.forEach(function (mov, i) {
    const html = `
    <div class="flex">
    <div class="mealName">${i + 1}: ${mov}</div>
    <div class="mealPrice">${mealPrices[i]}$</div>
    </div>
    `;
    lastPage.insertAdjacentHTML("beforeend", html);
  });

  const totalPrice = mealPrices.reduce((acc, mov) => (acc += mov));
  console.log(totalPrice);
  const htmlPrice = `
  <div class="flex">
    <div class="mealName">Total:</div>
    <div class="mealPrice">${totalPrice}$</div>
    </div>`;
  lastPage.insertAdjacentHTML("beforeend", htmlPrice);
};
