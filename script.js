var body = document.querySelector("body");
var h3 = document.querySelector("h3");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var random_btn = document.getElementById("random_btn");
var btn = document.getElementsByClassName("btn")[0];

const setGradient = () => {
  body.style.background = `linear-gradient(to right,${color1.value},${color2.value})`;
  h3.innerHTML = body.style.background + ";";
  // console.log("button was clicked");
};

const random_hex_color = () => {
  let n = (Math.random() * 0xfffff * 100000).toString(16);
  return "#" + n.slice(0, 6);
};

const set_random_gradient = () => {
  color1.value = random_hex_color();
  color2.value = random_hex_color();
  setGradient();
};

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btn.addEventListener("click", setGradient);
random_btn.addEventListener("click", set_random_gradient);
