const buttonToggle = document.querySelector("#toggle-mode")
let darkMode = true

buttonToggle.addEventListener("click", handleClick)

function handleClick(event) {
  document.documentElement.classList.toggle("light")
  let mode = darkMode ? "Light" : "Dark"

  event.currentTarget.querySelector(
    "span"
  ).textContent = `Modo ${mode} ativado!`
  darkMode = !darkMode
}
