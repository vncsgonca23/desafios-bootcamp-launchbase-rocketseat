const users = [
  { name: "Carlos", technologies: ["html", "css"] },
  { name: "Jasmine", technologies: ["javascript", "css"] },
  { name: "Tuane", technologies: ["html", "node"] }
];

function checkIfUserUsesCSS(user) {
  for (let i = 0; i < user.technologies.length; i++) {
    if (user.technologies[i] === "css") {
      return true;
    }
  }
}

for (let i = 0; i < users.length; i++) {
  const userWorkingWithCSS = checkIfUserUsesCSS(users[i]);

  if (userWorkingWithCSS) {
    console.log(`User ${users[i].name} works with CSS`);
  }
}
