const name = "Vinicius";
const height = 1.88;
const weight = 100;
const gender = "male";

const imc = weight / Math.pow(height, 2);
console.log(`IMC ${imc.toFixed(2)}`);

if (imc >= 30) {
  console.log(`${name}, you are overweight!`);
} else if (imc < 29.9) {
  console.log(`${name}, you aren't overweight!`);
}
