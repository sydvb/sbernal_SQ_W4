// This file defines the drawing for scene B1a.

function drawB1a() {
  // --- Story text ---
  fill(10, 150);
  noStroke();
  rect(30, 30, width - 60, height - 60, 20);
  fill(255);
  textSize(22);
  textAlign(LEFT, TOP);
  textAlign(LEFT);
  text(
    "The traveler shares tales of greed and downfall. You leave with no treasure, but with a\
    sharpened sense of judgment that saves you from future ruin.",
    60,
    70,
    MAX_WIDTH,
  );
}
