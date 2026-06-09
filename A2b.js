// This file defines the drawing for scene A2b.

function drawA2b() {
  // --- Story text ---
  fill(10, 150);
  noStroke();
  rect(30, 30, width - 60, height - 60, 20);
  fill(255);
  textSize(22);
  textAlign(LEFT, TOP);
  textAlign(LEFT);
  text(
    "Your trade delights the herbalist. In return, she gives you a rare compass that points toward\
    valuable artifacts. With it, your journey becomes far more prosperous.",
    60,
    70,
    MAX_WIDTH,
  );
}
