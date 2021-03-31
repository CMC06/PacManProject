const pacArray = [
  ['PacMan1.png', 'PacMan2.png'],
  ['PacMan3.png', 'PacMan4.png']
  ];

const fruits = ['apple.png', 'banana.png', 'cherries.png', 'lemon.png', 'lime.png', 'strawberry.png'];

let posX = 0;
let posY = 0;
let direction = 0;
let focus = 0;
let score = 0;

function mouth() {
  let img = document.getElementById("PacMan");
  focus = (focus + 1) % 2;
  img.src = pacArray[direction][focus];
  img.style.zIndex = 2
}

window.addEventListener("keydown", function(event){
    if(event.defaultPrevented){
       return;
    }

    switch(event.key){
      case "Down":
      case "ArrowDown":
      case "s":
        moveDown();
        break;

      case "Up":
      case "ArrowUp":
      case "w":
        moveUp();
        break;

      default:
        return;
    }
    event.preventDefault();
  }, true);

window.addEventListener("keydown", function(event){
  if(event.defaultPrevented){
      return;
  }

  switch(event.key){
    case "Left":
    case "ArrowLeft":
    case "a":
      moveLeft();
      break;

    case "Right":
    case "ArrowRight":
    case "d":
      moveRight();
      break;

    default:
      return;
  }
  event.preventDefault();
}, true);


function moveDown() {
  let img = document.getElementById("PacMan")
  posY += 20;
  if(posY > Math.max(document.documentElement.clientHeight, window.innerHeight)){
    posY = 0;
  }
  mouth();
  img.style.top = posY + 'px';
}

function moveUp() {
  let img = document.getElementById("PacMan")
  posY -= 20;
  if(posY < 0){
    posY = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  }
  mouth();
  img.style.top = posY + 'px';
}

function moveLeft() {
  let img = document.getElementById("PacMan");
  posX -= 20;
  if(posX < 0){
    posX = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }
  direction = 1;
  img.style.left = posX + "px";
  mouth();
}

function moveRight() {
  let img = document.getElementById("PacMan");
  posX += 20;
  if(posX + img.width >= Math.max(document.documentElement.clientWidth, window.innerWidth || 0)){
    posX = 0;
  }
  direction = 0;
  img.style.left = posX + "px";
  mouth();
}



function fruitAppear(){
  const fruitDiv = document.getElementById("fruitDiv");
  let currentFruit = fruits[Math.floor(Math.random()*fruits.length)];
  let currentX = Math.floor(Math.random()* (window.innerWidth - 50));
  let currentY = Math.floor(Math.random()* (window.innerHeight - 50));
  
  let fruitImage = document.createElement('img');
  fruitImage.src = currentFruit;
  
  fruitDiv.appendChild(fruitImage);

  fruitImage.style.position = 'absolute';
  fruitImage.style.top = currentY + 'px';
  fruitImage.style.left = currentX + 'px';
  fruitImage.style.width = "50px";
  fruitImage.style.zIndex = 0;
}
fruitAppear();  
//setInterval(fruitAppear, 4000);