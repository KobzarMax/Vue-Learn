const addButton = document.querySelector(".add");
const minusButton = document.querySelector(".minus");
const countHeader = document.querySelector(".count");
const currentCount = document.querySelector(".current");

let count = 0;

countHeader.innerText = count;
currentCount.innerText = `Current count is ${count}`;

addButton.addEventListener("click", () => {
    count++;
    countHeader.innerText = count;
    currentCount.innerText = `Current count is ${count}`;
});

minusButton.addEventListener("click", () => {
    count--;
    countHeader.innerText = count;
    currentCount.innerText = `Current count is ${count}`;
});