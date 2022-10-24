const url = "https://635538c3483f5d2df3afaee4.mockapi.io";

async function getMockApi(url) {
  const response = await fetch(url);

  const result = response.json();

  return result;
}

document.getElementById("formSignIn").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password) {
    getMockApi(`${url}/users`).then(function (users) {
      const loggingUser = users.find(function (user) {
        return user.username === username;
      });

      if (loggingUser) {
        if (loggingUser.password === password) {
          alert("login berhasil....");
          localStorage.setItem("token", "user sudah login");
          window.location = "../../home.html";
        } else {
          alert("password salah!!!");
        }
      } else {
        alert("user tidak ditemukan.....");
      }
    });
  }
});
