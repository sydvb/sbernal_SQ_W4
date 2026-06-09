// This file defines the drawing for scene A2a.

function drawA2a() {
  // --- Story text ---
  fill(10, 150);
  noStroke();
  rect(30, 30, width - 60, height - 60, 20);
  fill(255);
  textSize(22);
  textAlign(LEFT, TOP);
  textAlign(LEFT);
  text(
    "The herbalist senses an illness beginning in you and brews a remedy on the spot.\
    You leave with restored health and a deeper respect for the wisdom of strangers.",
    60,
    70,
    MAX_WIDTH,
  );
}
