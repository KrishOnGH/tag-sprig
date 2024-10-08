const playerOneRunningRight = ">"
const playerOneRunningLeft = "<"
const playerOneIdle = ":"
const playerTwoRunningRight = "("
const playerTwoRunningLeft = ")"
const playerTwoIdle = "*"
const taggedPlayerOneRunningRight = "r"
const taggedPlayerOneRunningLeft = "l"
const taggedPlayerOneIdle = "j"
const taggedPlayerTwoRunningRight = "R"
const taggedPlayerTwoRunningLeft = "L"
const taggedPlayerTwoIdle = "J"

const grass = "1"
const flowerPurple = "2"
const flowerBlue = "3"
const flowerRed = "4"

setLegend(
  [ playerOneRunningRight, bitmap`
................
.....0000000....
....0.......0...
...0..3..3..0...
...0..3..3..0...
...0........0...
...0........0...
....0......0....
.....0....0.....
.....0....0.....
.....0....0.....
....0......0....
...0...00...0...
..0...0..0..0...
...000....0.0...
...........0....` ],
  [ playerOneRunningLeft, bitmap`
................
....0000000.....
...0.......0....
...0..3..3..0...
...0..3..3..0...
...0........0...
...0........0...
....0......0....
.....0....0.....
.....0....0.....
.....0....0.....
....0......0....
...0...00...0...
...0..0..0...0..
...0.0....000...
....0...........` ],
  [ playerOneIdle, bitmap`
................
.....0000000....
....0.......0...
...0..3...3..0..
...0..3...3..0..
...0.........0..
...0.........0..
....0.......0...
.....0.....0....
.....0.....0....
.....0.....0....
.....0.....0....
.....0.....0....
.....0..0..0....
.....0.0.0.0....
.....00..00.....` ],
  [ playerTwoRunningRight, bitmap`
................
.....0000000....
....0.......0...
...0..5..5..0...
...0..5..5..0...
...0........0...
...0........0...
....0......0....
.....0....0.....
.....0....0.....
.....0....0.....
....0......0....
...0...00...0...
..0...0..0..0...
...000....0.0...
...........0....` ],
  [ playerTwoRunningLeft, bitmap`
................
....0000000.....
...0.......0....
...0..5..5..0...
...0..5..5..0...
...0........0...
...0........0...
....0......0....
.....0....0.....
.....0....0.....
.....0....0.....
....0......0....
...0...00...0...
...0..0..0...0..
...0.0....000...
....0...........` ],
  [ playerTwoIdle, bitmap`
................
.....0000000....
....0.......0...
...0..5...5..0..
...0..5...5..0..
...0.........0..
...0.........0..
....0.......0...
.....0.....0....
.....0.....0....
.....0.....0....
.....0.....0....
.....0.....0....
.....0..0..0....
.....0.0.0.0....
.....00..00.....` ],
  [ taggedPlayerOneRunningRight, bitmap`
................
.....9999999....
....9.......9...
...9..3..3..9...
...9..3..3..9...
...9........9...
...9........9...
....9......9....
.....9....9.....
.....9....9.....
.....9....9.....
....9......9....
...9...99...9...
..9...9..9..9...
...999....9.9...
...........9....` ],
  [ taggedPlayerOneRunningLeft, bitmap`
................
....9999999.....
...9.......9....
...9..3..3..9...
...9..3..3..9...
...9........9...
...9........9...
....9......9....
.....9....9.....
.....9....9.....
.....9....9.....
....9......9....
...9...99...9...
...9..9..9...9..
...9.9....999...
....9...........` ],
  [ taggedPlayerOneIdle, bitmap`
................
.....9999999....
....9.......9...
...9..3...3..9..
...9..3...3..9..
...9.........9..
...9.........9..
....9.......9...
.....9.....9....
.....9.....9....
.....9.....9....
.....9.....9....
.....9.....9....
.....9..9..9....
.....9.9.9.9....
.....99..99.....` ],
  [ taggedPlayerTwoRunningRight, bitmap`
................
.....9999999....
....9.......9...
...9..5..5..9...
...9..5..5..9...
...9........9...
...9........9...
....9......9....
.....9....9.....
.....9....9.....
.....9....9.....
....9......9....
...9...99...9...
..9...9..9..9...
...999....9.9...
...........9....` ],
  [ taggedPlayerTwoRunningLeft, bitmap`
................
....9999999.....
...9.......9....
...9..5..5..9...
...9..5..5..9...
...9........9...
...9........9...
....9......9....
.....9....9.....
.....9....9.....
.....9....9.....
....9......9....
...9...99...9...
...9..9..9...9..
...9.9....999...
....9...........` ],
  [ taggedPlayerTwoIdle, bitmap`
................
.....9999999....
....9.......9...
...9..5...5..9..
...9..5...5..9..
...9.........9..
...9.........9..
....9.......9...
.....9.....9....
.....9.....9....
.....9.....9....
.....9.....9....
.....9.....9....
.....9..9..9....
.....9.9.9.9....
.....99..99.....` ],
  [ grass, bitmap`
................
4.44.4..44444..4
4DC4DC4D44D4D44D
DCDCDDD4DCDDDDD4
DCCDCCDCDDCDCCDD
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
................
................
................
................
................` ],
  [ flowerPurple, bitmap`
................
................
.......88.......
......8HH8......
.....8H66H8.....
.....8H66H8.....
......8HH8......
.......DD.......
......4D........
.....4.D4.......
.......D.4......
....4D.D........
.....44DD.D.....
.......DDDD.....
.......D4.......
......DDD.......` ],
  [ flowerBlue, bitmap`
................
................
.......77.......
......7557......
.....759957.....
.....759957.....
......7557......
.......DD.......
.......D........
.......DDD......
.......D.D......
......DD........
.....D.D........
.......D........
.......D........
......DDD.......` ],
  [ flowerRed, bitmap`
................
................
.......33.......
......3993......
.....396693.....
.....396693.....
......3993......
.......DD.......
.......D........
.......D4.......
.......D........
.....D.D4.......
.....D4D........
.......D........
.......D........
......DDD.......` ],
)

let state = 0
const levels = [
  map`
...............
.........2.....
.1...1.111..1..
...4..........2
..111........11
......111..3...
.11.......111..
2..:..3.......3
1111.11.....111
.........4*....
....1...11111..
...............`,
  map`
..............
..............
..............
..............
..............
..............
..............
..............
..............
..............
..............`
]
setMap(levels[state])

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getSprite(x, y) {
  if (x > 14 || x < 0 || y > 11 || y < 0) {
    return '_'
  }
  if (getTile(x, y).length == 0) {
    return '.'
  }
  return getTile(x, y)[0]['_type']
}

function tag(player) {
  if (player == 1) {
    let x = getFirst(playerOne).x
    let y = getFirst(playerOne).y
    playerOne = taggedPlayerOneIdle
    clearTile(x, y)
    addSprite(x, y, 'j')

    x = getFirst(playerTwo).x
    y = getFirst(playerTwo).y
    playerTwo = playerTwoIdle
    clearTile(x, y)
    addSprite(x, y, '*')
  } else if (player == 2) {
    let x = getFirst(playerTwo).x
    let y = getFirst(playerTwo).y
    playerTwo = taggedPlayerTwoIdle
    clearTile(x, y)
    addSprite(x, y, 'J')

    x = getFirst(playerOne).x
    y = getFirst(playerOne).y
    playerOne = playerOneIdle
    clearTile(x, y)
    addSprite(x, y, ':')
  }
  it = player
}

function startTimer() {
  startTime = performance.now();
}

function getElapsedTime() {
  const currentTime = performance.now();
  const elapsedTime = currentTime - startTime;
  return elapsedTime;
}

function endscreen(winner) {
  clearText(),
  state = 1
  setMap(levels[state])
  addText("Player " + winner + " Wins", {x: 4, y: 6, color: color`3`})
  addText("Press K to restart", {x: 1, y: 8, color: color`3`})
}

function startgame() {
  state = 0
  setMap(levels[state])
  clearText()
  it = 0
  playerOne = playerOneIdle
  playerTwo = playerTwoIdle
  timer = 120
  
  tag(1)
  startTimer();
  
  setInterval(() => {
    const elapsedSeconds = Math.floor(getElapsedTime() / 1000);
    
    if (elapsedSeconds > timer) {
      let winner = 1
      if (it == 1) {
        winner = 2
      }
      
      endscreen(winner)
      return 0
    }
    
    const timeRemaining = timer-elapsedSeconds
    const displayMinutesRemaining = Math.floor(timeRemaining/60)
    let displaySecondsRemaining = Math.floor(timeRemaining%60)
    if (displaySecondsRemaining < 10) {
      displaySecondsRemaining = "0" + String(displaySecondsRemaining)
    }
    let textColor
  
    if (timeRemaining > 2*timer/3) {
      textColor = 4
    } else if (timeRemaining > timer/3) {
      textColor = 9
    } else if (timeRemaining > 0) {
      textColor = 3
    }
    
    clearText()
    addText(displayMinutesRemaining + ':' + displaySecondsRemaining, { 
      x: 15,
      y: 1,
      color: color `${textColor}`
    })
  }, 1000);
}

let it
let playerOne
let playerTwo
let timer
let startTime
startgame()

onInput("w", () => {
  if (state == 0) {
    if (getSprite(getFirst(playerOne).x, getFirst(playerOne).y-1) == '.' && !(getSprite(getFirst(playerOne).x, getFirst(playerOne).y+1) == '.' && getSprite(getFirst(playerOne).x, getFirst(playerOne).y+2) == '.')) {
      getFirst(playerOne).y -= 1
    } else if (getSprite(getFirst(playerOne).x, getFirst(playerOne).y-1) == playerTwo) {
      tag(2)
    }
  }
})

onInput("a", () => {
  if (state == 0) {
    let x = getFirst(playerOne).x
    let y = getFirst(playerOne).y
    if (it != 1) {
      playerOne = playerOneRunningLeft
      clearTile(x, y)
      addSprite(x, y, '<')
    } else {
      playerOne = taggedPlayerOneRunningLeft
      clearTile(x, y)
      addSprite(x, y, 'l')
    }
  
    if (getSprite(getFirst(playerOne).x-1, getFirst(playerOne).y) == '.') {
      getFirst(playerOne).x -= 1
    } else if (getSprite(getFirst(playerOne).x-1, getFirst(playerOne).y) == playerTwo) {
      tag(2)
    }
  }
})

onInput("d", () => {
  if (state == 0) {
    let x = getFirst(playerOne).x
    let y = getFirst(playerOne).y
    if (it != 1) {
      playerOne = playerOneRunningRight
      clearTile(x, y)
      addSprite(x, y, '>')
    } else {
      playerOne = taggedPlayerOneRunningRight
      clearTile(x, y)
      addSprite(x, y, 'r')
    }
  
    if (getSprite(getFirst(playerOne).x+1, getFirst(playerOne).y) == '.') {
      getFirst(playerOne).x += 1
    } else if (getSprite(getFirst(playerOne).x+1, getFirst(playerOne).y) == playerTwo) {
      tag(2)
    }
  }
})

onInput("i", () => {
  if (state == 0) {
    if (getSprite(getFirst(playerTwo).x, getFirst(playerTwo).y-1) == '.' && !(getSprite(getFirst(playerTwo).x, getFirst(playerTwo).y+1) == '.' && getSprite(getFirst(playerTwo).x, getFirst(playerTwo).y+2) == '.')) {
      getFirst(playerTwo).y -= 1
    } else if (getSprite(getFirst(playerTwo).x, getFirst(playerTwo).y+1) == playerOne) {
      tag(1)
    }
  }
})

onInput("j", () => {
  if (state == 0) {
    let x = getFirst(playerTwo).x
    let y = getFirst(playerTwo).y
    if (it == 1) {
      playerTwo = playerTwoRunningLeft
      clearTile(x, y)
      addSprite(x, y, ')')
    } else {
      playerTwo =taggedPlayerTwoRunningLeft
      clearTile(x, y)
      addSprite(x, y, 'L')
    }
  
    if (getSprite(getFirst(playerTwo).x-1, getFirst(playerTwo).y) == '.') {
      getFirst(playerTwo).x -= 1
    } else if (getSprite(getFirst(playerTwo).x-1, getFirst(playerTwo).y) == playerOne) {
      tag(1)
    }
  }
})

onInput("l", () => {
  if (state == 0) {
    let x = getFirst(playerTwo).x
    let y = getFirst(playerTwo).y
    if (it == 1) {
      playerTwo = playerTwoRunningRight
      clearTile(x, y)
      addSprite(x, y, '(')
    } else {
      playerTwo = taggedPlayerTwoRunningRight
      clearTile(x, y)
      addSprite(x, y, 'R')
    }
  
    if (getSprite(getFirst(playerTwo).x+1, getFirst(playerTwo).y) == '.') {
      getFirst(playerTwo).x += 1
    } else if (getSprite(getFirst(playerTwo).x+1, getFirst(playerTwo).y) == playerOne) {
      tag(1)
    }
  }
})

onInput("k", () => {
  startgame()
})

afterInput(async () => {
  if (state == 0) {
    await delay(400);
    let x = getFirst(playerOne).x
    let y = getFirst(playerOne).y
    if (it != 1) {
      playerOne = playerOneIdle
      clearTile(x, y)
      addSprite(x, y, ':')
    } else {
      playerOne = taggedPlayerOneIdle
      clearTile(x, y)
      addSprite(x, y, 'j')
    }
    
    x = getFirst(playerTwo).x
    y = getFirst(playerTwo).y
    if (it == 1) {
      playerTwo = playerTwoIdle
      clearTile(x, y)
      addSprite(x, y, '*')
    } else {
      playerTwo = taggedPlayerTwoIdle
      clearTile(x, y)
      addSprite(x, y, 'J')
    }
    
    async function applyGravityWithDelay(sprite) {
      let x = getFirst(sprite).x
      let y = getFirst(sprite).y
  
      for (let i = y; i <= 11; i++) {
        if (i < 11 && getSprite(x, i+1) == '.') {
          getFirst(sprite).y += 1
          await delay(100)
        } else {
          break
        }
      }
    }
    
    await applyGravityWithDelay(playerOne);
  
    await applyGravityWithDelay(playerTwo);
  }
})