// Função para alternar o modo
function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    localStorage.setItem("theme", "light") // Salva o modo light no localStorage
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    localStorage.setItem("theme", "dark") // Salva o modo dark no localStorage
  }
}

// Função para carregar o tema salvo
function loadTheme() {
  const savedTheme = localStorage.getItem("theme") // Verifica se há um tema salvo no localStorage
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  if (savedTheme) {
    html.classList.toggle("light", savedTheme === "light") // Define o tema de acordo com o valor salvo
    if (savedTheme === "light") {
      img.setAttribute("src", "./assets/avatar-light.png")
    } else {
      img.setAttribute("src", "./assets/avatar.png")
    }
  }
}

// Chama a função ao carregar a página para definir o tema corretamente
loadTheme()
