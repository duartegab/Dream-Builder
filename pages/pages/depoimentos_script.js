function toggleSubMenu(id) {
    var submenu = document.getElementById(id);
    if (submenu.style.display === "none") {
        submenu.style.display = "block";
    } else {
        submenu.style.display = "none";
    }
}
function toggleSubSubMenu(id) {
    var submenu = document.getElementById(id);
    if (submenu.style.display === "none") {
        submenu.style.display = "block";
    } else {
        submenu.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var paragraphs = document.querySelectorAll("#textAnimation p");
  
    paragraphs.forEach(function(paragraph, index) {
      setTimeout(function() {
        paragraph.style.opacity = 1;
      }, index * 3000); 
    });
  });