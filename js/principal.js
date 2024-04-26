/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function menu() {
    let paginas = document.querySelector(".paginas");

    if (paginas.style.display === "block") {
      paginas.style.display = "none";
    } else {
      paginas.style.display = "block";
    }
  }