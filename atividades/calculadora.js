
document.body.style.margin = "0"
document.body.style.height = "100vh"
document.body.style.display = "flex"
document.body.style.justifyContent = "center"
document.body.style.alignItems = "center"
document.body.style.backgroundColor = "#121212"
document.body.style.fontFamily = "Arial, sans-serif"


const calc = document.createElement("div")
calc.style.width = "300px"
calc.style.background = "#1e1e1e"
calc.style.borderRadius = "10px"
calc.style.boxShadow = "0 0 10px #000"
calc.style.padding = "20px"
document.body.appendChild(calc)


const display = document.createElement("input")
display.type = "text"
display.disabled = true
display.style.width = "100%"
display.style.height = "50px"
display.style.fontSize = "24px"
display.style.padding = "10px"
display.style.borderRadius = "8px"
display.style.border = "none"
display.style.backgroundColor = "#2a2a2a"
display.style.color = "#fff"
display.style.marginBottom = "10px"
display.style.textAlign = "right"
calc.appendChild(display)


const buttons = [
  "7", "8", "9", "/",
  "4", "5", "6", "*",
  "1", "2", "3", "-",
  "0", ".", "=", "+",
  "C"
]

const grid = document.createElement("div")
grid.style.display = "grid"
grid.style.gridTemplateColumns = "repeat(4, 1fr)"
grid.style.gap = "10px"
calc.appendChild(grid)

buttons.forEach(text => {
  const btn = document.createElement("button")
  btn.textContent = text
  btn.style.padding = "20px"
  btn.style.fontSize = "18px"
  btn.style.border = "none"
  btn.style.borderRadius = "8px"
  btn.style.backgroundColor = "#333"
  btn.style.color = "#fff"
  btn.style.cursor = "pointer"
  btn.onmouseover = () => btn.style.backgroundColor = "#444"
  btn.onmouseout = () => btn.style.backgroundColor = "#333"

  btn.onclick = () => {
    if (text === "=") {
      try {
        display.value = eval(display.value)
      } catch {
        display.value = "Erro"
      }
    } else if (text === "C") {
      display.value = ""
    } else {
      display.value += text
    }
  }

  grid.appendChild(btn)
})
