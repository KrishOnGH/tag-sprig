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
.....99..99.....` ]
)

setSolids([])

let level = 0
const levels = [
  map`
..............
..............
..............
..............
..............
..............
...:......*...
..............
..............
..............
..............`
]
setMap(levels[level])

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getSprite(x, y) {
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
  } else if (player == 2) {
    let x = getFirst(playerTwo).x
    let y = getFirst(playerTwo).y
    playerTwo = taggedPlayerTwoIdle
    clearTile(x, y)
    addSprite(x, y, 'J')
  }
  tag = player
}

let it = 0
let playerOne = playerOneIdle
let playerTwo = playerTwoIdle

tag(1)

onInput("w", () => {
  getFirst(playerOne).y -= 1
})

onInput("a", () => {
  let x = getFirst(playerOne).x
  let y = getFirst(playerOne).y
  if (tag != 1) {
    playerOne = playerOneRunningLeft
    clearTile(x, y)
    addSprite(x, y, '<')
  } else {
    playerOne = taggedPlayerOneRunningLeft
    clearTile(x, y)
    addSprite(x, y, 'l')
  }
  
  getFirst(playerOne).x -= 1
})

onInput("d", () => {
  let x = getFirst(playerOne).x
  let y = getFirst(playerOne).y
  if (tag != 1) {
    playerOne = playerOneRunningRight
    clearTile(x, y)
    addSprite(x, y, '>')
  } else {
    playerOne = taggedPlayerOneRunningRight
    clearTile(x, y)
    addSprite(x, y, 'r')
  }
  
  getFirst(playerOne).x += 1
})

onInput("i", () => {
  getFirst(playerTwo).y -= 1
})

onInput("j", () => {
  let x = getFirst(playerTwo).x
  let y = getFirst(playerTwo).y
  if (tag == 1) {
    playerTwo = playerTwoRunningLeft
    clearTile(x, y)
    addSprite(x, y, ')')
  } else {
    playerTwo =taggedPlayerTwoRunningLeft
    clearTile(x, y)
    addSprite(x, y, 'L')
  }
  
  getFirst(playerTwo).x -= 1
})

onInput("l", () => {
  let x = getFirst(playerTwo).x
  let y = getFirst(playerTwo).y
  if (tag == 1) {
    playerTwo = playerTwoRunningRight
    clearTile(x, y)
    addSprite(x, y, '(')
  } else {
    playerTwo = taggedPlayerTwoRunningRight
    clearTile(x, y)
    addSprite(x, y, 'R')
  }
  
  getFirst(playerTwo).x += 1
})

afterInput(async () => {
  await delay(400);
  let x = getFirst(playerOne).x
  let y = getFirst(playerOne).y
  if (tag != 1) {
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
  if (tag == 1) {
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

    for (let i = y; i <= 10; i++) {
      if (i < 10 && getSprite(x, i+1) == '.') {
        getFirst(sprite).y += 1
        await delay(100)
      } else {
        break
      }
    }
  }
  
  await applyGravityWithDelay(playerOne);

  await applyGravityWithDelay(playerTwo);

  await applyGravityWithDelay(tagged);
})