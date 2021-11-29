var firstcolor = document.querySelector("#color-a");
var secondcolor = document.querySelector("#color-b");
var currentDirection = "to bottom";
var output = document.getElementById("code");
var copy = document.getElementById("copy");

function dirction(value, _this) {
  var Direction = document.querySelectorAll(".buttons button");
  for (const i of Direction) {
    i.classList.remove("active");
  }
  _this.classList.add("active");
  currentDirection = value;
}

firstcolor.addEventListener("input", function (e) {
  // console.log(e.target.value);
  firstcolor.value = e.target.value;
});

secondcolor.addEventListener("input", function (e) {
  // console.log(e.target.value);
  secondcolor.value = e.target.value;
});

function genrate() {
  output.value = `background-image: linear-gradient(${currentDirection},${secondcolor.value},${firstcolor.value})`;

  let gr = (document.querySelector(
    ".container"
  ).style.backgroundImage = `linear-gradient(${currentDirection},${secondcolor.value},${firstcolor.value})`);
  console.log(gr);
}

copy.addEventListener("click", function () {
  output.select();
  document.execCommand("Copy");
  // navigator.clipboard.writeText() = output.value;
});
