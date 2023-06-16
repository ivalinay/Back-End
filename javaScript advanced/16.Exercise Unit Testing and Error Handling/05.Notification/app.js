function notify(message) {
  var notificationDiv = document.getElementById("notification");
  notificationDiv.textContent = message;
  notificationDiv.style.display = "block";

  notificationDiv.addEventListener("click", function () {
    notificationDiv.style.display = "none";
  });
}
