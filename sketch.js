// ============================================================
// Week 4 Example 2: Full Rock Paper Scissors (Best of 3)
// ============================================================

// ------------------------------------------------------------
// ABOUT THIS FILE
// This project is split across three JavaScript files:
//
//   sketch.js — p5.js entry point: setup(), draw(), mousePressed()
//   game.js   — game logic: choices, scores, round tracking
//   scenes.js — drawing helpers: blobs, buttons, screens
//
// All three files are loaded in index.html in that order.
// Variables and functions defined in one file are available
// in all others because they share the same global scope.
// ------------------------------------------------------------

// ------------------------------------------------------------
// GAME STATES
// The game moves through these states in order.
// Storing states as constants prevents typos — if you mistype
// STATE_PLAY, JavaScript will throw an error instead of
// silently using the wrong string.
// ------------------------------------------------------------
const CHOICE_1 = "choice1";
const CHOICE_2 = "choice2";

const STATE_START = "start";
const STATE_PLAY = "play";
const STATE_OVER = "over";

let gameState = STATE_START;

const MAX_WIDTH = 600;

// ------------------------------------------------------------
// BUTTON LAYOUT
// Shared constants for button positions and size.
// Defined once here so sketch.js and scenes.js stay in sync.
// ------------------------------------------------------------
const BTN_POSITIONS = [190, 600];
const BTN_W = 250;
const BTN_H = 52;
const BTN_Y = 360;

// ============================================================
// setup()
// Runs once at the very start of the sketch.
// Sets up the canvas and font.
// ============================================================
function setup() {
  createCanvas(800, 450);
  textFont("monospace");
}

// ============================================================
// draw()
// Runs repeatedly in a loop after setup() finishes.
// Calls drawing functions from scenes.js and reads game
// state variables from game.js to decide what to show.
// ============================================================
function draw() {
  drawBackground();

  if (gameState === STATE_START) {
    drawStartScreen();
  } else if (gameState === STATE_PLAY) {
    drawGameScreen();
  } else if (gameState === STATE_OVER) {
    drawGameOverScreen();
  }
}

function mousePressed() {
  // ============================
  // START → INTRO
  // ============================
  if (gameState === STATE_START) {
    if (isMouseOver(width / 2, 390, 200, 52)) {
      currentNode = NODE_INTRO;
      gameState = STATE_PLAY;
    }
    return;
  }

  // ============================
  // PLAY STATE
  // ============================
  if (gameState === STATE_PLAY) {
    // --------------------------------
    // INTRO SCENE → A or B
    // --------------------------------
    if (currentNode === NODE_INTRO) {
      // Button 1 → NODE_A
      if (isMouseOver(BTN_POSITIONS[0], BTN_Y, BTN_W, BTN_H)) {
        currentNode = NODE_A;
        return;
      }

      // Button 2 → NODE_B
      if (isMouseOver(BTN_POSITIONS[1], BTN_Y, BTN_W, BTN_H)) {
        currentNode = NODE_B;
        return;
      }

      return;
    }

    // --------------------------------
    // ALL OTHER SCENES → CHOICE_1 or CHOICE_2
    // --------------------------------
    let choices = [CHOICE_1, CHOICE_2];

    for (let i = 0; i < 2; i++) {
      if (isMouseOver(BTN_POSITIONS[i], BTN_Y, BTN_W, BTN_H)) {
        storyChoose(choices[i]);
        return;
      }
    }

    return;
  }

  // ============================
  // GAME OVER → RESTART
  // ============================
  if (gameState === STATE_OVER) {
    if (isMouseOver(width / 2, 390, 220, 52)) {
      resetGame();
    }
  }
}
