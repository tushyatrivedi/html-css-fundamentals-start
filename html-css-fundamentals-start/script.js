let orange = document.getElementById("orange");
orange.addEventListener("change", Calculate);
let peach = document.getElementById("peach");
peach.addEventListener("change", Calculate);
let mango = document.getElementById("mango");
mango.addEventListener("change", Calculate);

let total = document.getElementById("total-container");

function Calculate(e) {
  let total_value = 0;
  console.log("Calculate function got called");
  total_value += parseInt(orange.value == "" ? 0 : orange.value) * 14;
  total_value += parseInt(peach.value == "" ? 0 : peach.value) * 16;
  total_value += parseInt(mango.value == "" ? 0 : mango.value) * 20;

  total.innerHTML = `$${total_value}.00`;
}
