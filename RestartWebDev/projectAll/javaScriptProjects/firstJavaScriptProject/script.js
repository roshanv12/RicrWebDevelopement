// const checkBoxList = document.querySelectorAll(".custom-checkBox");

// const inputFields = document.querySelectorAll(".goal-input")

// checkBoxList.forEach((checkBox) => {
//   checkBox.addEventListener("click", () => {
//     const allFieldsFilled = [...inputFields].every(function (input) {
//       return input.value;
//     });

//     const icon = checkBox.querySelector("i");
//     icon.classList.toggle("show");
//     const input = checkBox.parentElement.querySelector(".goal-input");
//     input.classList.toggle("completed");
//   });
// });

const checkBoxList = document.querySelectorAll(".custom-checkBox");
const inputFields = document.querySelectorAll(".goal-input");
const error = document.querySelector(".error");

checkBoxList.forEach((checkBox) => {
  checkBox.addEventListener("click", () => {
    const allFieldsFilled = [...inputFields].every((input) => {
      return input.value.trim() !== "";
    });

    if (!allFieldsFilled) {
      error.style.display = "block";
      return;
    }

    error.style.display = "none";

    const icon = checkBox.querySelector("i");
    icon.classList.toggle("show");

    const input = checkBox.parentElement.querySelector(".goal-input");
    input.classList.toggle("completed");
  });
});
