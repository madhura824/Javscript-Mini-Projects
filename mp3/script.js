const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    const now = performance.now();
    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  };
};

document.querySelector("#box").addEventListener("mousemove", throttleFunction((event) => {
  var div = document.createElement("div");
  div.classList.add("imagediv");
  div.style.position = "fixed"; // Set the position to "fixed"
  div.style.left = event.clientX + 'px'; // Use event.pageX
  div.style.top = event.clientY + 'px'; // Use event.pageY
  document.body.appendChild(div);
  var img=document.createElement("img");
// how to add image in img tag in javascript
  img.setAttribute("src", "https://images.unsplash.com/photo-1694125398686-fdbce8ca1054?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60");

  // put image in the div
  div.appendChild(img);

  gsap.to(img,{
    y:"0",
    ease: Power2.easeout,
  })
  setTimeout(function () {
    div.remove();
  }, 5000);
}, 500));