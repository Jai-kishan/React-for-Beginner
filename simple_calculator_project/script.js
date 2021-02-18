"use strict";

document.querySelector(".submit").addEventListener("click", function () {
  const amount = Number(document.querySelector("#bill_amount").value);

  if (amount === 0) {
    alert("Please enter the bill amount");
  }

  let ser = document.getElementById("service").selectedIndex;
  if (ser === 0) {
    alert("Please select the service type");
  }

  const service = Number(document.getElementsByTagName("option")[ser].value);
  const sharing_bill = Number(document.querySelector("#sharing_bill").value);
  const commission = Number(
    (((service / 100) * amount) / sharing_bill).toFixed(2)
  );
  const roundValue = Math.round(commission);

  if (typeof commission == "number") {
    document.querySelector(
      ".comission"
    ).textContent = `Each person comission:- ₹ ${roundValue}`;
  }

  console.log(
    `commission value is :- ${commission}, round value of comission ${roundValue}`
  );
});
