console.clear();

const circleElement = document.querySelector('.circle');

const mouse = { x: 0, y: 0 };
const previousMouse = { x: 0, y: 0 };
const circle = { x: 0, y: 0 };

let currentScale = 0;
let currentAngle = 0;

window.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

const speed = 0.17;

const tick = () => {
  circle.x += (mouse.x - circle.x) * speed;
  circle.y += (mouse.y - circle.y) * speed;

  const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

  const deltaMouseX = mouse.x - previousMouse.x;
  const deltaMouseY = mouse.y - previousMouse.y;

  previousMouse.x = mouse.x;
  previousMouse.y = mouse.y;

  const mouseVelocity = Math.min(Math.sqrt(deltaMouseX**2 + deltaMouseY**2)*5, 200); 

  const scaleValue = (mouseVelocity / 150) * 0.5;

  currentScale += (scaleValue - currentScale) * speed;

  const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;

  const angle = Math.atan2(deltaMouseY, deltaMouseX) * 180 / Math.PI;

  if (mouseVelocity > 20) {
    currentAngle = angle;
  }

  const rotateTransform = `rotate(${currentAngle}deg)`;

  circleElement.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;

  window.requestAnimationFrame(tick);
}
//mouse circle colour change
document.addEventListener("DOMContentLoaded", function () {
  var elements = document.querySelectorAll(".boxtitle, .headfont, .cimg, .headfont, .formblock, .topright-typer, .btnac, .slide-btn, .subserb");
var mouseelement = document.querySelector(".circle");
if(!mouseelement){
  console.log("mouse not found");
}
elements.forEach(function(element) {
  element.addEventListener("mouseover",function() {
    if(element){
      console.log(element+" notfound");
    }
  mouseelement.style.border = "2px solid rgb(220, 20, 60)";
  })
element.addEventListener("mouseleave", function () {
  mouseelement.style.border = "2px solid white";
}
)
  
})
})
//mouse circle colour change

tick();


