let users = JSON.parse(localStorage.getItem("users")) || [];

const form = document.getElementById("userForm");
const result = document.getElementById("result");

const generateToken = () => {
  return Math.random().toString(36).substring(2) + Date.now();
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const newId =
    users.length > 0
      ? users[users.length - 1].id + 1
      : 1;

  const token = generateToken();

  const newUser = {
    id: newId,
    email: email,
    password: password,
    token: token,
  };

  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));

  result.innerText = `User Created! Token: ${token}`;

  form.reset();

  console.log("Saved Users:", users);
});