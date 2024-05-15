console.log("lets start");

const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const counter = document.getElementById("counter");

incrementBtn.addEventListener("click", function () {
  console.log("increment clicked");
  const presentCounterValue = counter.innerText;
  const newCounterValue = Number(presentCounterValue) + 1;

  // set new counter value to display
  counter.innerText = newCounterValue;

  // change bg color according to new counter value
  changeBackgroundColor(newCounterValue);
});

decrementBtn.addEventListener("click", function () {
  console.log("decrement clicked");
  const presentCounterValue = counter.innerText;
  const newCounterValue = Number(presentCounterValue) - 1;

  // set new counter value to display
  counter.innerText = newCounterValue;

  // change bg color according to new counter value
  changeBackgroundColor(newCounterValue);
});

function changeBackgroundColor(newCounterValue) {
  if (newCounterValue === 0) {
    // new counter value is even
    document.body.style.backgroundColor = "red";
  } else if (newCounterValue % 2 === 0) {
    // new counter value is even
    document.body.style.backgroundColor = "beige";
  } else {
    //// new counter value is odd
    document.body.style.backgroundColor = "skyblue";
  }
}
