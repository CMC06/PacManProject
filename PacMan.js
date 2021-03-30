const pacArray = [
  ['PacMan1.png', 'PacMan2.png'],
  ['PacMan3.png', 'PacMan4.png']
  ];


let pos = 0;
let posY = 0;
let direction = 0;
let focus = 0;

function Run() {
  let img = document.getElementById("PacMan");
  let imgWidth = img.width
    focus = (focus + 1) % 2;
    direction = checkPageBounds(direction, imgWidth);
    img.src = pacArray[direction][focus];
    if (direction) {
      pos -= 20;
      img.style.left = pos + "px";
      } else {
        pos += 20;
        img.style.left = pos + 'px';
      }
     
  setTimeout(Run, 200);
}
//let start = function(){
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

//  Run();
//}
//start();

function checkPageBounds(direction, imgWidth) {
  if(pos + 200 >= Math.max(document.documentElement.clientWidth, window.innerWidth || 0)){
    direction = 1;
  }
  if(pos <= 0){
    direction = 0;
  }
  return direction;
}

    //setInterval(Run, 100);
  