let registerForm = document.getElementById("register-form");
registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  let formData = new FormData(registerForm);
  let email = formData.get("email");
  let password = formData.get("password");
  let rePass = formData.get("rePass");

  if (email === "" || password === "" || rePass === "") {
    return;
  }

  await sendRequest("register", email, password);
});

let loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  let formData = new FormData(loginForm);
  let email = formData.get("email");
  let password = formData.get("password");

  if (email === "" || password === "") {
    return;
  }

  await sendRequest("login", email, password);
});

async function sendRequest(path, email, password) {
  let response = await fetch(`http://localhost:3030/users/${path}`, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  let json = await response.json();

  if (!response.ok) {
    return;
  }

  let accessToken = json.accessToken;
  let id = json._id;

  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("id", id);

  window.location.pathname = "/homeLogged.html";
}
