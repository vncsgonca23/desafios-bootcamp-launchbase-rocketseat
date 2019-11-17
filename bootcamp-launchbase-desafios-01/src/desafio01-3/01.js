const users = [
  { name: "Carlos", technologies: ["html", "css"] },
  { name: "Jasmine", technologies: ["javascript", "css"] },
  { name: "Tuane", technologies: ["html", "node"] }
];

for (let i = 0; i < users.length; i++) {
  for (let j = 1; j < users[i].technologies.length; j++) {
    console.log(
      `${users[i].name} works with ${users[i].technologies[j - 1]}, ${
        users[i].technologies[j]
      }`
    );
  }
}
