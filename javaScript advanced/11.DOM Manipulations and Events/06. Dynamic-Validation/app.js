function validate() {
  const inputElement = document.getElementById("email");
  const reg = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/;
  let value = inputElement.value;
  inputElement.addEventListener("change", checkEmail);

  function checkEmail(event) {
    if (reg.test(event.target.value)) {
      event.target.removeAttribute("class");
      return;
    }
    event.target.className = "error";
  }
}
