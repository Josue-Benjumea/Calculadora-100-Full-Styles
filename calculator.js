function numbers(valor) {
  document.getElementById("result").value += valor;
}
function operation() {
  let opera = document.getElementById("result").value;
  if (opera == 0) {
    document.getElementById("result").value = " No hay operacion ";
  } else {
    document.getElementById("result").value = eval(opera);
  }
}
function reset() {
  document.getElementById("result").value = " ";
}
