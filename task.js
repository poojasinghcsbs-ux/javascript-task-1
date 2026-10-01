const link = document.getElementById("task");
    const extraText = document.getElementById("extraText");

    link.addEventListener("click", function() {
      if (extraText.style.display === "none") {
        extraText.style.display = "block";
        link.textContent = "Read Less";
      } else {
        extraText.style.display = "none";
        link.textContent = "Read More";
      }
   
    });
