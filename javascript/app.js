buttonElement = document.getElementById("darkButton")
body = document.getElementById("body")


buttonElement.addEventListener('click', () => {
  body.classList.toggle('darkStyle')
})


// function toggleDark() {
//   var element = document.getElementById("body");
//   element.classList.toggle("darkStyle");
// }

// export default {toggleDark}
