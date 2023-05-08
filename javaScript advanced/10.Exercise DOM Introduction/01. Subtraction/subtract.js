function subtract() {
  let firstInput = document.getElementById("firstNumber").value;
  let secondInput = document.getElementById("secondNumber").value;
  let resultDiv = document.getElementById("result");
  let finalResult = Number(firstInput) - Number(secondInput);
  resultDiv.textContent = finalResult;
}
