document.addEventListener("DOMContentLoaded", function () {
    var flag = 0;
    var textt = document.querySelector("h5");
    var buttonn = document.querySelector("#buttonn"); // Corrected selector
    buttonn.addEventListener("click", function () {
      if (flag == 0) {
        textt.innerHTML = "Friends";
        textt.style.color = "green";
        flag = 1;
      } else {
        textt.innerHTML = "Stranger";
        textt.style.color = "red";
        flag = 0;
      }
    });
  });