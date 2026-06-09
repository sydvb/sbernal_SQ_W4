// This file defines the drawing for scene B1b.

function drawB1b() {
  // --- Story text ---
  fill(10, 150);
  noStroke();
  rect(30, 30, width - 60, height - 60, 20);
  fill(255);
  textSize(22);
  textAlign(LEFT, TOP);
  textAlign(LEFT);
  text(
    "The pack contains nothing but spoiled rations. Worse, the traveler curses your dishonesty.\
    You lose your remaining supplies and wander out of the forest completely poor.",
    60,
    70,
    MAX_WIDTH,
  );
}
