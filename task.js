// Fetch JSON data from the file
fetch("paymentmethods.json")
  .then((response) => response.json())
  .then((data) => {
    const selectElement = document.getElementById("paymentOption");
    // Iterate over each payment method in the JSON
    Object.keys(data).forEach((key) => {
      const method = data[key];
      //Create an option element for each payment method
      const option = document.createElement("option");
      option.value = key;
      option.textContent = `${method.name} - ${method.description}`;
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
