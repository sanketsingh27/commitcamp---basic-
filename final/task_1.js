const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const counter = document.getElementById("counter");

const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const counter = document.getElementById("counter");

incrementBtn.addEventListener("click", function () {
  console.log("increment clicked");
  const presentCounterValue = counter.innerText;
  const newCounterValue = Number(presentCounterValue) + 1;

  // set new counter value to display
  counter.innerText = newCounterValue;
});

decrementBtn.addEventListener("click", function () {
  console.log("decrement clicked");
  const presentCounterValue = counter.innerText;
  const newCounterValue = Number(presentCounterValue) - 1;

  // set new counter value to display
  counter.innerText = newCounterValue;
});
