const pacArray = [
  ['PacMan1.png', 'PacMan2.png'],
  ['PacMan3.png', 'PacMan4.png']
  ];


let posX = 0;
let posY = 0;
let direction = 0;
let focus = 0;

function Run() {
  let img = document.getElementById("PacMan");
  focus = (focus + 1) % 2;
  img.src = pacArray[direction][focus];
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
        Run();
        break;

      case "Up":
      case "ArrowUp":
      case "w":
        moveUp();
        Run();
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
  posY += 10;
  if(posY > Math.max(document.documentElement.clientHeight, window.innerHeight)){
    posY = 0;
  }
  img.style.top = posY + 'px';
}

function moveUp() {
  let img = document.getElementById("PacMan")
  posY -= 10;
  if(posY < 0){
    posY = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  }
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
  Run();
}

function moveRight() {
  let img = document.getElementById("PacMan");
  posX += 20;
  if(posX + 200 >= Math.max(document.documentElement.clientWidth, window.innerWidth || 0)){
    posX = 0;
  }
  direction = 0;
  img.style.left = posX + "px";
  Run();
}

  