const togglebutton = document.getElementsByClassName("toggle-button")[0]
const navnav = document.getElementsByClassName("navnav")[0]

togglebutton.addEventListener("click", () => {
  navnav.classList.toggle("active")
})