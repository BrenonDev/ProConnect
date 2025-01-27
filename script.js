function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    localStorage.setItem("theme", "light")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    localStorage.setItem("theme", "dark")
  }
}

function loadTheme() {
  const savedTheme = localStorage.getItem("theme")
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  if (savedTheme) {
    html.classList.toggle("light", savedTheme === "light")
    if (savedTheme === "light") {
      img.setAttribute("src", "./assets/avatar-light.png")
    } else {
      img.setAttribute("src", "./assets/avatar.png")
    }
  }
}

loadTheme()
