
  
function toggle_navbar() {
    var x = document.getElementById("navbar");
    var y=document.getElementById("icon");
  
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }