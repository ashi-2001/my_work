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
    option.textContent = `${method.name} ${method.rate}`;
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

    const firstName = data.get("firstname");
    const lastName = data.get("lastname");
    const dateOfBirth = data.get("dob");
    const place = data.get("place");
    let amount = (Number)(data.get("amount"));
    const paymentMode = data.get("paymentmode");
    const currency = data.get("currency");
    let rateOfInterest = (Number)(data.get("roi"));
    const timePeriod = data.get("timeperiod");
    const EMI = data.get("emi");
    const year = (Number)(data.get("year"));

    if(rateOfInterest == '1') {
      rateOfInterest = 5
    } else if(rateOfInterest === '2') {
      rateOfInterest = 10
    } else if(rateOfInterest == '3') {
      rateOfInterest = 15
    }

    if(currency == '2') {
      amount *= 80 
    } else if(currency === '3') {
      amount *= 55
    } else if(currency === '4') {
      amount *= 100
    }
    
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

    let result = `Hey!! ${firstName}${lastName} 
    born on ${dob}, resident of ${place}. 
    You took a loan of rs. ${amount} 
    You have opted for EMI based on ${emi} basis for ${year} years at the rate of interest of ${rateOfInterest}. 
    Yur calculated emi turns out to be ${EMI_VALUE} 
    Thank you.` 

    document.getElementById('result-paragraph').innerHTML = result
  



}
const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);



