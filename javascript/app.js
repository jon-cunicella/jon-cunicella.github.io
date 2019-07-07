buttonElement = document.getElementById("darkButton")
body = document.getElementById("body")


buttonElement.addEventListener('click', () => {
  body.classList.toggle('darkStyle')
})

