const form = document.querySelector(".form-container");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const boy = document.querySelector(".inputBoy").value.length;
  const girl = document.querySelector(".inputGirl").value.length;

  console.log(boy);
  console.log(girl);

  const result = Math.pow(boy + girl, 3) % 101;
  console.log(result);

  document.querySelector("h2").innerText = `Result: ${result}%`;
  form.reset();
});
