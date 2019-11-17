const user = {
  name: "Vinicius",
  age: 21,
  technologies: [
    { name: "C ++", specialty: "Desktop" },
    { name: "Python", specialty: "Data Science" },
    { name: "JavaScript", specialty: "Web / Mobile" }
  ]
};
for (let i = 0; i < user.technologies.length; i++) {
  console.log(
    `User ${user.name} is ${user.age} years old and uses ${user.technologies[i].name} technology with ${user.technologies[i].specialty} expertise`
  );
}
