// This file defines the drawing for scene B2b.

function drawB2b() {
  // --- Story text ---
  fill(10, 150);
  noStroke();
  rect(30, 30, width - 60, height - 60, 20);
  fill(255);
  textSize(22);
  textAlign(LEFT, TOP);
  textAlign(LEFT);
  text(
    "Your trap catches a small forest spirit who, impressed by your cleverness, reveals the\
    location of the Queen’s Lost Crown. You retrieve it and finally claim the ultimate treasure. Congrats!",
    60,
    70,
    MAX_WIDTH,
  );
}
