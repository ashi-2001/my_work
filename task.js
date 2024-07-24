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
    option.textContent = `${method.value}`;
    selectElement.appendChild(option);
  });
})
.catch((error) => {
  console.error("Error fetching data:", error);
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


//time period

fetch("timeperiod.json")
.then((response) => response.json())
.then((data) => {
  const selectElement = document.getElementById("emi");
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


function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    firstName = data.get("firstname");
    lastName = data.get("lastname");
    dateOfBirth = data.get("dob");
    place = data.get("place");
    amount = (Number)(data.get("amount"));
    paymentMode = data.get("paymentmode");
    currency = data.get("currency");
    rateOfInterest = (Number)(data.get("roi"));
    timePeriod = data.get("timeperiod");
    EMI = data.get("emi");
    year = (Number)(data.get("roi"));
    
    const interest = (amount * rateOfInterest * year) / 100
    const total = amount + interest

    let EMI_VALUE = 0
    if(EMI == '1') {
        EMI_VALUE = total/(year * 12)
    } else if (EMI === '2') {
        EMI_VALUE = total / (year * 4)
    } else if(EMI === '3') {
        EMI_VALUE = total / year
    }
    console.log(EMI_VALUE);



}
const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);



