console.log("Tax Calculator");

const form = document.querySelector(".form-container");
const income = document.querySelector("#income");

const incomeText = document.querySelector(".income");
const taxText = document.querySelector(".result");
const percentageText = document.querySelector(".percentage");
const afterTaxText = document.querySelector(".after-tax");

const resetBtn = document.querySelector(".reset-btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const amount = Number(income.value);

  // Validation
  if (income.value.trim() === "" || amount <= 0) {
    alert("Please enter a valid income.");
    income.focus();
    return;
  }

  let totalTax = 0;

  // ==========================
  // SAME TAX LOGIC
  // ==========================

  if (amount <= 1200000) {
    totalTax = 0;
  } else if (amount <= 1600000) {
    totalTax = (amount - 1200000) * 0.15;
  } else if (amount <= 2000000) {
    totalTax = (amount - 1600000) * 0.2 + 60000;
  } else if (amount <= 2400000) {
    totalTax = (amount - 2000000) * 0.25 + 140000;
  } else {
    totalTax = (amount - 2400000) * 0.3 + 240000;
  }

  // ==========================
  // Calculations
  // ==========================

  const taxRate = ((totalTax / amount) * 100).toFixed(2);

  const remainingIncome = amount - totalTax;

  // ==========================
  // Show Result
  // ==========================

  incomeText.innerText = `₹${amount.toLocaleString("en-IN")}`;

  taxText.innerText = `₹${totalTax.toLocaleString("en-IN")}`;

  percentageText.innerText = `${taxRate}%`;

  afterTaxText.innerText = `₹${remainingIncome.toLocaleString("en-IN")}`;

  // ==========================
  // Color Change
  // ==========================

  taxText.style.color = totalTax === 0 ? "green" : "red";

  // ==========================
  // Animation
  // ==========================

  document.querySelectorAll(".result-item").forEach((card) => {
    card.animate(
      [
        {
          opacity: 0,
          transform: "translateY(20px)",
        },
        {
          opacity: 1,
          transform: "translateY(0)",
        },
      ],
      {
        duration: 500,
        easing: "ease",
      },
    );
  });
});

// ==========================
// Reset Button
// ==========================

resetBtn.addEventListener("click", () => {
  income.value = "";

  incomeText.innerText = "₹0";
  taxText.innerText = "₹0";
  percentageText.innerText = "0%";
  afterTaxText.innerText = "₹0";

  taxText.style.color = "#2563eb";

  income.focus();
});
