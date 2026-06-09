// This file defines the drawing for scene A1b.

function drawA1b() {
  // --- Story text ---
  fill(10, 150);
  noStroke();
  rect(30, 30, width - 60, height - 60, 20);
  fill(255);
  textSize(22);
  textAlign(LEFT, TOP);
  textAlign(LEFT);
  text(
    "You avoid the satchel and soon find a quiet clearing where a map is carved into stone.\
    It reveals a shortcut to safer forests. You learn that patience and caution can be their own kind of treasure.",
    60,
    70,
    MAX_WIDTH,
  );
}
