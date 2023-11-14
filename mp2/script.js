window.addEventListener("mousemove", function (details) {
    var rect = document.querySelector("#rect");
    
    // Ensure the rect has 'position: absolute;' in its CSS.
    // This allows you to use the 'left' property to move it.

    // Calculate the range for mapping the mouse position to the rectangle's position.
    var mapping = gsap.utils.mapRange(
        0,
        window.innerWidth,
        100 + rect.getBoundingClientRect().width / 2,
        window.innerWidth - (100 + rect.getBoundingClientRect().width / 2),
        details.clientX
    );

    gsap.to("#rect", {
        left: mapping,
        ease: Power3.easeOut,
    });
});
