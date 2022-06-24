const binary = document.getElementById('binary');
let binaryString = '';

binary.addEventListener('keyup', (event) => {
    if (!isNaN(binary.value)) {
        if (Number(binary.value.at(binary.value.length - 1)) >= 2 || Number(binary.value.at(binary.value.length) - 1) <= 9) {
            alert('Número inválido. Digite apenas 0 ou 1.');
            binary.value = binaryString;
        } else {
            binaryString = binary.value;
        }
    } else if (binary.value == "") {
        binaryString = binary.value;
    } else {
        alert('Caractere inválido. Digite apenas 0 ou 1.');
        binary.value = binaryString;
    }
});

const convert = document.getElementById('convert');
const decimal = document.getElementById('decimal');

convert.addEventListener('click', (event) => {
    let numDec = 0;
    let expo = binary.value.length - 1;
    for (let i = 0; i <= (binary.value.length - 1); i++) {
        console.log(`numDec:${numDec} | bin:${binary.value[i]} | expo:${expo}`)
        numDec += (binary.value[i] * Math.pow(2, expo));
        console.log(`numDec: ${numDec}`);
        console.log(`-----------------------`);
        expo--;
    } decimal.value = numDec;
})