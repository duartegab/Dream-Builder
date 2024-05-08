document.addEventListener("DOMContentLoaded", function() {
    var paragraphs = document.querySelectorAll("#textAnimation p");
  
    paragraphs.forEach(function(paragraph, index) {
      setTimeout(function() {
        paragraph.style.opacity = 1;
      }, index * 5000); // Delay each paragraph by 1 second
    });
  });
  