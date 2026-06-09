// ============================================================
// game.js: Game Logic (Example 2)
// ============================================================
// This file contains all game logic for Rock Paper Scissors
// Best of 3. It does not draw anything — drawing is handled
// by scenes.js. Variables defined here are available in
// sketch.js and scenes.js because all files share the same
// global scope.
// ============================================================

// ------------------------------------------------------------
// CHOICES
// We define the three choices as constants so we never have
// to type the strings "rock", "paper", "scissors" manually
// and risk a typo causing a bug.
// CHOICES is an array used to pick a random NPC move.
// ------------------------------------------------------------
const NODE_INTRO = "intro";

const NODE_A = "A";
const NODE_B = "B";

const NODE_A1 = "A1";
const NODE_A2 = "A2";
const NODE_B1 = "B1";
const NODE_B2 = "B2";

const NODE_A1a = "A1a";
const NODE_A1b = "A1b";
const NODE_A2a = "A2a";
const NODE_A2b = "A2b";

const NODE_B1a = "B1a";
const NODE_B1b = "B1b";
const NODE_B2a = "B2a";
const NODE_B2b = "B2b";

// Story nodes
let currentNode = NODE_INTRO; // Opening screen

// ------------------------------------------------------------
// storyChoose(choice)
// Called from sketch.js when the player clicks a button.
// Sets choices and result, then leads to next scene.
// ------------------------------------------------------------

function storyChoose(choice) {
  if (currentNode === NODE_INTRO)
    currentNode = choice === CHOICE_1 ? NODE_A : NODE_B;
  else if (currentNode === NODE_A)
    currentNode = choice === CHOICE_1 ? NODE_A1 : NODE_A2;
  else if (currentNode === NODE_A1)
    currentNode = choice === CHOICE_1 ? NODE_A1a : NODE_A1b;
  else if (currentNode === NODE_A2)
    currentNode = choice === CHOICE_1 ? NODE_A2a : NODE_A2b;
  else if (currentNode === NODE_B)
    currentNode = choice === CHOICE_1 ? NODE_B1 : NODE_B2;
  else if (currentNode === NODE_B1)
    currentNode = choice === CHOICE_1 ? NODE_B1a : NODE_B1b;
  else if (currentNode === NODE_B2)
    currentNode = choice === CHOICE_1 ? NODE_B2a : NODE_B2b;
}

function resetGame() {
  currentNode = NODE_INTRO;
  gameState = STATE_START;
}
