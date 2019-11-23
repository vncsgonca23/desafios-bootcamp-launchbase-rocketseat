const name = "Vinicius";
const gender = "male";
const age = 21;
const contribution = 0;

if (gender === "male" && contribution >= 35) {
  const retirement = age + contribution;
  if (retirement >= 95) {
    console.log(`${name}, can you retire`);
  } else {
    console.log(`${name}, you can't retire`);
  }
} else if (gender === "women" && contribution >= 30) {
  const retirement = age + contribution;
  if (retirement >= 85) {
    console.log(`${name}, can you retire`);
  } else {
    console.log(`${name}, you can't retire`);
  }
} else {
  console.log(`${name}, you can't retire`);
}
