function solve() {
  let accessToken = localStorage.getItem("accessToken");
  if (!accessToken) {
    window.location.pathname = "/home.html";
  } else {
    window.location.pathname = "/homeLogged.html";
  }
}
