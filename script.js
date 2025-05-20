const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('.results');
const width = 15;
//brukes for å lagre verdiene til de fjernede aliens.
const aliensRemoved = []

//velger hvilken div boks som spilleren begynner på
let currentShooterIndex = 202
let invadersID

let isGoingRight = true
let direction = 1
let results = 0

//lager spill brettet
for (let i = 0; i < width * width; i++) {
  const square = document.createElement('div');
  grid.appendChild(square);
}

const squares = Array.from(document.querySelectorAll('.grid div'));

//velger hvilken div aliens skal begynne på
const alienInvaders = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 30, 31, 32,
  33, 34, 35, 36, 37,38,39
];


//plasserer aliens i valgte divs, så lenge invaders ikke ligger i aliens removed array.
function draw() {
  for (let i = 0; i < alienInvaders.length; i++) {
    if (!aliensRemoved.includes(i)) {
    squares[alienInvaders[i]].classList.add('invader');
  }
  }
}

draw();

squares[currentShooterIndex].classList.add("shooter")

function moveShooter(e) {
  squares[currentShooterIndex].classList.remove("shooter")

  //ser om e.key er venstre eller høyre, og beveger den til høyre eller venstre, så lenge den ikke er ved siden av en vegg.
  switch(e.key) {
    case "ArrowLeft": 
      if (currentShooterIndex % width !==0) currentShooterIndex -= 1
      break
    case "ArrowRight": 
      if (currentShooterIndex % width < width - 1) currentShooterIndex += 1
      break
  }
  squares[currentShooterIndex].classList.add("shooter")
}

document.addEventListener("keydown", moveShooter)

function moveInvaders() {
  const leftEdge = alienInvaders[0] % width === 0
  const rightEdge = alienInvaders[alienInvaders.length - 1] % width === width -1
  remove()

  if (rightEdge && isGoingRight) {
    for (let i = 0; i < alienInvaders.length; i++) {
      alienInvaders[i] += width + 1
      direction = -1
      isGoingRight = false
    }
  } 

  if (leftEdge && !isGoingRight) {
    for (let i = 0; i < alienInvaders.length; i++) {
      alienInvaders[i] += width - 1
      direction = 1
      isGoingRight = true
    }
  }

  for (let i = 0; i < alienInvaders.length; i++) {
    alienInvaders[i] += direction
  }
  draw()

  if (squares[currentShooterIndex].classList.contains("invader")){
    resultDisplay.innerHTML = "GAME OVER"
    clearInterval(invadersID)
  }
if (aliensRemoved.length === alienInvaders.length) {
  resultDisplay.innerHTML = "YOU WIN"
    clearInterval(invadersID)
}

}


invadersID = setInterval(moveInvaders, 400)

function remove() {
  for(let i= 0; i < alienInvaders.length; i++) {
    squares[alienInvaders[i]].classList.remove("invader")
  }
}

function shoot(e) {
  let laserID
  let currentLaserIndex = currentShooterIndex

function moveLaser() {
  if (currentLaserIndex < 0){
    clearInterval(laserID)
  } else {
  squares[currentLaserIndex].classList.remove("laser")

  currentLaserIndex -= width

  squares[currentLaserIndex].classList.add("laser")

  if (squares[currentLaserIndex].classList.contains("invader")) {
      squares[currentLaserIndex].classList.remove("laser")
      squares[currentLaserIndex].classList.remove("invader")
      squares[currentLaserIndex].classList.add("boom")
      
      
      setTimeout(() => {
        squares[currentLaserIndex].classList.remove("boom")
      }, 300);
      
      clearInterval(laserID)
      const alienRemoved = alienInvaders.indexOf(currentLaserIndex)
      aliensRemoved.push(alienRemoved)
      results++
      resultDisplay.innerHTML = results
      
    }
    
}
}
if (e.key === "ArrowUp") {
  laserID = setInterval(moveLaser, 100)
}


}

document.addEventListener("keydown", shoot)