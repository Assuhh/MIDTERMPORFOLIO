document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("dynamic-text");
    const text = "PORTFOLIO";
    let index = 0;
    let isDeleting = false;
  
    function typeEffect() {
      if (!isDeleting) {
        if (index < text.length) {
          textElement.innerHTML = text.substring(0, index + 1);
          index++;
          setTimeout(typeEffect, 150);
        } else {
          isDeleting = true;
          setTimeout(typeEffect, 1000);
        }
      } else {
        if (index > 0) {
          textElement.innerHTML = text.substring(0, index - 1);
          index--;
          setTimeout(typeEffect, 100);
        } else {
          isDeleting = false;
          setTimeout(typeEffect, 500);
        }
      }
    }
  
    typeEffect();
  });
  