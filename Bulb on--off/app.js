let image = document.querySelector(".bulb");
let body = document.getElementsByTagName("body")[0];
/*
setInterval(() => {
  let src = image.getAttribute("src");
//   let bor = body.classList.contains("shadow");
  if (src === "images/light-on.png") {
    // body.classList.add("shadow");
    body.style.backgroundColor = "#1c1c1c";
    image.setAttribute("src", "images/light-off.png");
  }else {
    // body.classList.remove("shadow");
    body.style.backgroundColor = "yellow"
    image.setAttribute("src", "images/light-on.png");
  }
}, 2000);
*/
let src = image.getAttribute("src");
document.getElementById('on').onclick = function(){
  body.style.backgroundColor = "yellow";
  image.setAttribute("src", "images/light-on.png");
}
document.getElementById('off').onclick = function(){
  body.style.backgroundColor = "#1c1c1c";
  image.setAttribute("src", "images/light-off.png");
}
/*
let on = document.getElementsByTagName("button")[0];

on.addEventListener("click", function onClick() {
  on.style.backgroundColor = "blue";
  on.style.color = "white";
});
let off = document.getElementsByTagName("button")[1];

off.addEventListener("click", function onClick() {
  off.style.backgroundColor = "blue";
  off.style.color = "white";
});
*/