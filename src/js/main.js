const binary = document.getElementById("binary");
let binaryString = "";

binary.addEventListener("keyup", (event) => {
  if (!isNaN(binary.value)) {
    if (
      Number(binary.value.at(binary.value.length - 1)) >= 2 ||
      Number(binary.value.at(binary.value.length) - 1) <= 9
    ) {
      alert("Número inválido. Digite apenas 0 ou 1.");
      binary.value = binaryString;
    } else if (binary.value.at(binary.value.length - 1) == ".") {
      alert("Caractere inválido. Digite apenas 0 ou 1.");
      binary.value = binaryString;
    } else {
      binaryString = binary.value;
    }
  } else if (binary.value == "") {
    binaryString = binary.value;
  } else {
    alert("Caractere inválido. Digite apenas 0 ou 1.");
    binary.value = binaryString;
  }
});

const convert = document.getElementById("convert");
const decimal = document.getElementById("decimal");

convert.addEventListener("click", (event) => {
  if (binary.value == "") {
    alert("Digite o número binário.");
  } else {
    let numDec = 0;
    let expo = binary.value.length - 1;
    for (let i = 0; i <= binary.value.length - 1; i++) {
      numDec += binary.value[i] * Math.pow(2, expo);
      expo--;
    }
    decimal.value = numDec;
  }
});

const clean = document.getElementById("clean");

clean.addEventListener("click", (event) => {
  event.preventDefault();
  binary.value = "";
  decimal.value = "";
});

// código para implementar conversão de decimal para binário
// let decimal = 4
// let binario = []
//
// while (decimal > 0) {
//   binario.unshift(decimal % 2)
//   decimal = Math.trunc(decimal / 2)
// }

// console.log("resultado final: " + binario.join(""))
