let image = document.querySelector(".bulb");
let body = document.getElementsByTagName("body")[0];

setInterval(() => {
  let src = image.getAttribute("src");
//   let bor = body.classList.contains("shadow");
  if (src === "images/light-on.png") {
    // body.classList.add("shadow");
    image.setAttribute("src", "images/light-off.png");
  }else {
    // body.classList.remove("shadow");
    body.style.backgroundColor = "yellow"
    image.setAttribute("src", "images/light-on.png");
  }
}, 2000);
