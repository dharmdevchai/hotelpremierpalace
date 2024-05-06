var x=document.getElementsByTagName("a");
x[11].className += " active";
function toggle_navbar() {
    var x = document.getElementById("navbar");
    var y=document.getElementById("icon");
  
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }
  
  window.addEventListener("scroll", function(){
    var navbar =document.getElementById("navbar");
    navbar.classList.toggle("sticky",window.scrollY>0);
  })