const url = "https://635538c3483f5d2df3afaee4.mockapi.io";

async function getMockApi(url) {
  const response = await fetch(url);

  const result = response.json();

  return result;
}

async function postMockApi(url, payload) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(payload),
  });

  const result = response.json();

  return result;
}

document.getElementById("formSignUp").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (username && password) {
    getMockApi(`${url}/users`).then(function (users) {
      console.log("users", users);
      const isUserExists = users.find(function (user) {
        return user.username === username;
      });
      console.log("isUserExists", isUserExists);

      if (isUserExists) {
        alert("username sudah dipakai");
      } else {
        postMockApi(`${url}/users`, {
          username,
          email,
          password,
        }).then((result) => {
          document.getElementById("email").value = "";
          document.getElementById("username").value = "";
          document.getElementById("password").value = "";
          alert("berhasil register");
          window.location = "/assets/signin.html";
        });
      }
    });
  }
});
