//check if your mouse is in the rectangle
var rect=document.querySelector("#rect");
rect.addEventListener("mousemove",function(details){
    //get the location of the rectangle
    var rectlocation=rect.getBoundingClientRect();
   var insiderect=details.clientX-rectlocation.left;
   if (insiderect < rectlocation.width / 2) {
    // change the red color
    var red = gsap.utils.mapRange(0, rectlocation.width / 2, 255, 0, insiderect);
    gsap.to(rect, { color: `rgb(${red},0,0)`, ease: Power4.easeOut }); // Change "power4" to "Power4.easeOut"
} else {
    // change to blue color
    var green = gsap.utils.mapRange(rectlocation.width / 2, rectlocation.width, 0, 255, insiderect);
    gsap.to(rect, { color: `rgb(0,0,${green})`, ease: Power4.easeOut }); // Change "power4" to "Power4.easeOut"
}

}

)