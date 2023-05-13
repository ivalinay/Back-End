function attachGradientEvents() {
  function gradientClick(e) {
    const offset = e.offsetX;
    const percentage = (offset / 300) * 100;
    const result = document.getElementById("result");
    result.innerText = Math.floor(percentage) + "%";
  }
  const gradient = document.getElementById("gradient");

  gradient.addEventListener("mousemove", gradientClick);
}
