function calculateTip() {
  const amount = document.getElementById("amount").value;
  //   console.log(amount);
  const service = document.getElementById("services").value;
  const person = document.getElementById("persons").value;

  if (!amount || service == "select") {
    alert("Please Enter amount or services");
    return;
  }

  let totalAmount = (amount * service) / person;
  //   console.log(totalAmount);
  let alltotalAmount = totalAmount * person;
  //   console.log(alltotalAmount);

  document.getElementById("tipAmount").textContent = alltotalAmount;
  alltotalAmount = alltotalAmount.toFixed(2);
}
