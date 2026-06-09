// ============================================================
// scenes.js: Drawing Functions (Example 2)
// ============================================================
// This file contains all drawing helper functions.
// It does not contain any game logic — that lives in game.js.
// Functions defined here are available in sketch.js because
// all files share the same global scope.
// ============================================================

// ------------------------------------------------------------
// drawBackground()
// A simple dark background drawn every frame in draw().
// Calling background() every frame clears the previous frame,
// which is what creates the illusion of animation.
// ------------------------------------------------------------
function preload() {
  forest = loadImage("assets/images/forest.jpg");
}

function drawBackground() {
  background(forest);
}

// ------------------------------------------------------------
// drawButton(x, y, w, h, label, isHovered)
// Draws a rectangular button with a text label.
// isHovered changes the colour when the mouse is over it,
// giving visual feedback that the button is clickable.
//
// x, y        — centre position (uses rectMode(CENTER))
// w, h        — width and height of the button
// label       — text displayed inside the button
// isHovered   — true if the mouse is currently over the button
// ------------------------------------------------------------
function drawButton(x, y, w, h, label, isHovered) {
  push();
  rectMode(CENTER);
  fill(isHovered ? color(80, 80, 100) : color(40, 40, 60));
  stroke(isHovered ? color(180, 180, 220) : color(80, 80, 100));
  strokeWeight(2);
  rect(x, y, w, h, 8);
  fill(255);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(18);
  text(label, x, y);

  pop();
}

// ------------------------------------------------------------
// isMouseOver(x, y, w, h)
// Returns true if the mouse cursor is currently inside the
// rectangle defined by centre (x, y) and dimensions (w, h).
// Used alongside drawButton() to detect clicks.
// ------------------------------------------------------------
function isMouseOver(x, y, w, h) {
  return (
    mouseX > x - w / 2 &&
    mouseX < x + w / 2 &&
    mouseY > y - h / 2 &&
    mouseY < y + h / 2
  );
}

// ------------------------------------------------------------
// drawStartScreen()
// Title screen shown before the game begins.
// Uses frameCount to animate the blobs even before the
// game starts. frameCount is a built-in p5.js variable
// that increases by 1 every frame.
// ------------------------------------------------------------
function drawStartScreen() {
  // Title
  fill(255);
  textAlign(CENTER);
  textSize(48);
  text("Begin the Queen's adventure.", width / 2, height / 2 + 50);

  // Subtitle
  fill(220);
  textSize(16);
  text(
    "Will you make it to the end, or meet your own demise?",
    width / 2,
    height / 2 + 90,
  );

  // Start button
  drawButton(
    width / 2,
    390,
    200,
    52,
    "Start Game",
    isMouseOver(width / 2, 390, 200, 52),
  );
}

// ------------------------------------------------------------
// drawIntro()
// Your new intro scene
// ------------------------------------------------------------
function drawIntro() {
  fill(255);
  textAlign(CENTER);
  textSize(36);
  text("Your journey begins...", width / 2, height / 2 - 20);

  fill(200);
  textSize(18);
  text(
    "You awaken in the forest. A path splits ahead.",
    width / 2,
    height / 2 + 20,
  );

  drawButton(
    width / 2,
    390,
    200,
    52,
    "Continue",
    isMouseOver(width / 2, 390, 200, 52),
  );
}

function drawStoryScreen() {
  if (currentNode === NODE_INTRO) drawIntro();
  else if (currentNode === NODE_A) drawA();
  else if (currentNode === NODE_B) drawB();
  else if (currentNode === NODE_A1) drawA1();
  else if (currentNode === NODE_A2) drawA2();
  else if (currentNode === NODE_B1) drawB1();
  else if (currentNode === NODE_B2) drawB2();
  else if (currentNode === NODE_A1a) drawA1a();
  else if (currentNode === NODE_A1b) drawA1b();
  else if (currentNode === NODE_A2a) drawA2a();
  else if (currentNode === NODE_A2b) drawA2b();
  else if (currentNode === NODE_B1a) drawB1a();
  else if (currentNode === NODE_B1b) drawB1b();
  else if (currentNode === NODE_B2a) drawB2a();
  else if (currentNode === NODE_B2b) drawB2b();
}

// ------------------------------------------------------------
// drawGameScreen(playerBlobT, npcBlobT)
// The main gameplay screen shown during STATE_PLAY.
// Shows the new scene, choice buttons.
// ------------------------------------------------------------
function drawGameScreen() {
  drawStoryScreen();
}

// ------------------------------------------------------------
// drawRoundResult()
// Shows the win/lose/draw result for the current round.
// roundResult is set in game.js after the player picks.
// ------------------------------------------------------------
function drawRoundResult() {
  push();
  textAlign(CENTER);
  noStroke();

  if (roundResult === "win") {
    fill(0, 220, 180);
    textSize(36);
    text("You Win This Round!", width / 2, 345);
  } else if (roundResult === "lose") {
    fill(255, 120, 30);
    textSize(36);
    text("NPC Wins This Round!", width / 2, 345);
  } else {
    fill(220);
    textSize(36);
    text("Draw!", width / 2, 345);
  }

  pop();
}

// ------------------------------------------------------------
// drawGameOverScreen()
// Final screen shown during STATE_OVER.
// Displays the overall winner and final scores.
// overallWinner and scores are read from game.js.
// ------------------------------------------------------------
function drawGameOverScreen() {
  // Blobs still animating on the end screen
  drawBlob(220, 220, 55, color(0, 200, 180), frameCount * 0.015);
  drawBlob(580, 220, 55, color(255, 150, 30), frameCount * 0.015 + 50);

  textAlign(CENTER);
  noStroke();

  // Overall result — shown in the winner's colour
  if (overallWinner === "player") {
    fill(0, 220, 180);
    textSize(52);
    text("You Win!", width / 2, 130);
  } else if (overallWinner === "npc") {
    fill(255, 120, 30);
    textSize(52);
    text("NPC Wins!", width / 2, 130);
  } else {
    fill(220);
    textSize(52);
    text("It's a Draw!", width / 2, 130);
  }

  // Final scores
  fill(160);
  textSize(18);
  text("You " + playerScore + "  —  " + npcScore + " NPC", width / 2, 175);

  // Play Again button
  drawButton(
    width / 2,
    390,
    220,
    52,
    "Play Again",
    isMouseOver(width / 2, 390, 220, 52),
  );
}
