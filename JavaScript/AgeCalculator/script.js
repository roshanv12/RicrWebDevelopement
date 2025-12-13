const dobEl = document.getElementById("dob");
const curEl = document.getElementById("curDate");
const btn = document.getElementById("calc");
const out = document.getElementById("output");

function toInputDateString(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}
curEl.value = toInputDateString(new Date());
function formatDDMMYYYY(date) {
  const d = String(date.getDate()).padStart(2, "0");
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const y = date.getFullYear();
  return `${d} - ${m} - ${y}`;
}

function calculateYearsOnly(birthDate, currentDate) {
  if (birthDate > currentDate)
    return { error: "Janam tareekh bhavishya me hai." };
  let years = currentDate.getFullYear() - birthDate.getFullYear();

  const curMonth = currentDate.getMonth();
  const birthMonth = birthDate.getMonth();
  if (
    curMonth < birthMonth ||
    (curMonth === birthMonth && currentDate.getDate() < birthDate.getDate())
  ) {
    years -= 1;
  }
  return { years };
}

btn.addEventListener("click", () => {
  out.textContent = "";
  if (!dobEl.value) {
    out.textContent = "Kripya Date of Birth select karein.";
    return;
  }
  if (!curEl.value) {
    out.textContent = "Kripya Current Date select karein.";
    return;
  }

  const dob = new Date(dobEl.value + "T00:00:00");
  const cur = new Date(curEl.value + "T00:00:00");

  const res = calculateYearsOnly(dob, cur);
  if (res.error) {
    out.textContent = res.error;
    return;
  }

  // Output like: Your age is 23 years.
  out.textContent = `Your age is ${res.years} years.`;
});

// Optional: Enter key on DOB triggers calculate
dobEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") btn.click();
});
curEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") btn.click();
});
