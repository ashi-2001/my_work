//payments
fetch("paymentmode.json")
  .then((response) => response.json())
  .then((data) => {
    const selectElement = document.getElementById("paymentMode");
    // Iterate over each payment method in the JSON
    Object.keys(data).forEach((key) => {
      const method = data[key];
      //Create an option element for each payment method
      const option = document.createElement("option");
      option.value = key;
      option.textContent = `${method.name}`;
      selectElement.appendChild(option);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
// Handle form submission
document
  .getElementById("paymentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const selectedOption = document.getElementById("paymentOption").value;
    const paymentMethods = { 1: "PayPal", 2: "UPI", 3: "Cash on Delivery" };
    alert`(Selected payment method: ${paymentMethods[selectedOption]})`;
  });

  // roi
fetch("rateOfInterest.json")
.then((response) => response.json())
.then((data) => {
  const selectElement = document.getElementById("rateOfInterest");
  // Iterate over each payment method in the JSON
  Object.keys(data).forEach((key) => {
    const method = data[key];
    //Create an option element for each payment method
    const option = document.createElement("option");
    option.value = key;
    option.textContent = `${method.name}`;
    selectElement.appendChild(option);
  });
})
.catch((error) => {
  console.error("Error fetching data:", error);
});
// Handle form submission
document
.getElementById("paymentForm")
.addEventListener("submit", function (event) {
  event.preventDefault();
  const selectedOption = document.getElementById("paymentOption").value;
  const paymentMethods = { 1: "PayPal", 2: "UPI", 3: "Cash on Delivery" };
  alert`(Selected payment method: ${paymentMethods[selectedOption]})`;
});

//currency

fetch("currency.json")
.then((response) => response.json())
.then((data) => {
  const selectElement = document.getElementById("currency");
  // Iterate over each payment method in the JSON
  Object.keys(data).forEach((key) => {
    const method = data[key];
    //Create an option element for each payment method
    const option = document.createElement("option");
    option.value = key;
    option.textContent = `${method.name}`;
    selectElement.appendChild(option);
  });
})
.catch((error) => {
  console.error("Error fetching data:", error);
});
// Handle form submission
document
.getElementById("paymentForm")
.addEventListener("submit", function (event) {
  event.preventDefault();
  const selectedOption = document.getElementById("paymentOption").value;
  const paymentMethods = { 1: "PayPal", 2: "UPI", 3: "Cash on Delivery" };
  alert`(Selected payment method: ${paymentMethods[selectedOption]})`;
});

//time period

fetch("timeperiod.json")
.then((response) => response.json())
.then((data) => {
  const selectElement = document.getElementById("timeDuration");
  // Iterate over each payment method in the JSON
  Object.keys(data).forEach((key) => {
    const method = data[key];
    //Create an option element for each payment method
    const option = document.createElement("option");
    option.value = key;
    option.textContent = `${method.name}`;
    selectElement.appendChild(option);
  });
})
.catch((error) => {
  console.error("Error fetching data:", error);
});
// Handle form submission
document
.getElementById("paymentForm")
.addEventListener("submit", function (event) {
  event.preventDefault();
  const selectedOption = document.getElementById("paymentOption").value;
  const paymentMethods = { 1: "PayPal", 2: "UPI", 3: "Cash on Delivery" };
  alert`(Selected payment method: ${paymentMethods[selectedOption]})`;
});


