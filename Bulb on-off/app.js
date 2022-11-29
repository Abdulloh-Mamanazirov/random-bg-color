let body = document.getElementsByTagName('body')[0];
let h1 = document.getElementsByTagName('h1')[0];

setInterval(() => {
    let num1 = Math.floor(Math.random()* 255)
    let num2 = Math.floor(Math.random()* 255)
    let num3 = Math.floor(Math.random()* 255)
    body.style.backgroundColor = `rgb(${num1}, ${num2}, ${num3})`;
    h1.style.color = `rgb(${num2}, ${num3}, ${num1})`;
    h1.style.textShadow = `0 0 5px rgb(${num2}, ${num3}, ${num1})`;
    console.log(num1,num2,num3);
}, 1000);