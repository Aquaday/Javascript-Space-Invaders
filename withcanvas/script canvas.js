let board = document.querySelector('.board');
const resultDisplay = document.querySelector('.results');

const blockSize = 25
const rows = 25
const columns = 25

let context

let shooterX = blockSize * 5
let shootherY = blockSize * 5

let velocityX = 0

let alienInvaderX = 0
let alienInvaderY = 0

const alienInvaders = 2
let xDirection = 0
let yDirection = 0

let gameOver = false


document.addEventListener("DOMContentLoaded", () => {

  board.height = rows * blockSize
  board.width = columns * blockSize

  context = board.getContext("2d")

  update()
  setInterval(update, 1000)

})


function update() {

  console.log("updating")
  if (gameOver) {
    return
  }

  context.fillStyle = "white"
  context.fillRect(0, 0, board.width, board.height)

  context.fillStyle= "blue"
  for (let i = 0; i < alienInvaders; i++) {
    
    context.fillRect(alienInvaderX, alienInvaderY, blockSize, blockSize)
    alienInvaderX += blockSize
    
    if (alienInvaderX === blockSize * columns) {
      alienInvaderY += blockSize
    }
    
    console.log(alienInvaderX, alienInvaderY, alienInvaderX % board.width)
  }

  // const rightEdge = alienInvaders[alienInvaders.length - 1] % width === width -1

  if (alienInvaderX === board.width){
  alienInvaderY += 25
  alienInvaderX = 0
  }

}






// for (let i = 0; i < width * width; i++) {
//   const square = document.createElement('div');
//   grid.appendChild(square);
// }

// const squares = Array.from(document.querySelectorAll('.grid div'));

// const alienInvaders = [
//   0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 30, 31, 32,
//   33, 34, 35, 36, 37,38,39
// ];

// function draw() {
//   for (let i = 0; i < alienInvaders.length; i++) {
//     if (!aliensRemoved.includes(i)) {
//     squares[alienInvaders[i]].classList.add('invader');
//   }
//   }
// }

// draw();

// squares[currentShooterIndex].classList.add("shooter")

// function moveShooter(e) {
//   squares[currentShooterIndex].classList.remove("shooter")
//   switch(e.key) {
//     case "ArrowLeft": 
//       if (currentShooterIndex % width !==0) currentShooterIndex -= 1
//       break
//     case "ArrowRight": 
//       if (currentShooterIndex % width < width - 1) currentShooterIndex += 1
//       break
//   }
//   squares[currentShooterIndex].classList.add("shooter")
// }

// document.addEventListener("keydown", moveShooter)

// function moveInvaders() {
//   const leftEdge = alienInvaders[0] % width === 0
//   const rightEdge = alienInvaders[alienInvaders.length - 1] % width === width -1
//   remove()

//   if (rightEdge && isGoingRight) {
//     for (let i = 0; i < alienInvaders.length; i++) {
//       alienInvaders[i] += width + 1
//       direction = -1
//       isGoingRight = false
//     }
//   } 

//   if (leftEdge && !isGoingRight) {
//     for (let i = 0; i < alienInvaders.length; i++) {
//       alienInvaders[i] += width - 1
//       direction = 1
//       isGoingRight = true
//     }
//   }

//   for (let i = 0; i < alienInvaders.length; i++) {
//     alienInvaders[i] += direction
//   }
//   draw()

//   if (squares[currentShooterIndex].classList.contains("invader")){
//     resultDisplay.innerHTML = "GAME OVER"
//     clearInterval(invadersID)
//   }
// if (aliensRemoved.length === alienInvaders.length) {
//   resultDisplay.innerHTML = "YOU WIN"
//     clearInterval(invadersID)
// }

// }


// invadersID = setInterval(moveInvaders, 400)

// function remove() {
//   for(let i= 0; i < alienInvaders.length; i++) {
//     squares[alienInvaders[i]].classList.remove("invader")
//   }
// }

// function shoot(e) {
//   let laserID
//   let currentLaserIndex = currentShooterIndex

// function moveLaser() {
//   if (currentLaserIndex < 0){
//     clearInterval(laserID)
//   } else {
//   squares[currentLaserIndex].classList.remove("laser")

//   currentLaserIndex -= width

//   squares[currentLaserIndex].classList.add("laser")

//   if (squares[currentLaserIndex].classList.contains("invader")) {
//       squares[currentLaserIndex].classList.remove("laser")
//       squares[currentLaserIndex].classList.remove("invader")
//       squares[currentLaserIndex].classList.add("boom")
      
      
//       setTimeout(() => {
//         squares[currentLaserIndex].classList.remove("boom")
//       }, 300);
      
//       clearInterval(laserID)
//       const alienRemoved = alienInvaders.indexOf(currentLaserIndex)
//       aliensRemoved.push(alienRemoved)
//       results++
//       resultDisplay.innerHTML = results
      
//     }
    
// }
// }
// if (e.key === "ArrowUp") {
//   laserID = setInterval(moveLaser, 100)
// }


// }

// document.addEventListener("keydown", shoot)