// This file defines the drawing for scene B2a.

function drawB2a() {
  // --- Story text ---
  fill(10, 150);
  noStroke();
  rect(30, 30, width - 60, height - 60, 20);
  fill(255);
  textSize(22);
  textAlign(LEFT, TOP);
  textAlign(LEFT);
  text(
    "A creature bites your hand, inflicting a strange fever. Though you survive, you\
    learn the hard way that not all glitter is gold.",
    60,
    70,
    MAX_WIDTH,
  );
}
