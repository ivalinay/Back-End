function validate() {
  const emailInput = document.getElementById("email");

  emailInput.addEventListener("change", () => {
    const emailValue = emailInput.value.trim();
    const emailRegex = /^[a-z]+@[a-z]+\.[a-z]+$/;

    if (emailRegex.test(emailValue)) {
      emailInput.classList.remove("error");
    } else {
      emailInput.classList.add("error");
    }
  });
}
