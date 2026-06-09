// This file defines the drawing for scene A1a.

function drawA1a() {
  // --- Story text ---
  fill(10, 150);
  noStroke();
  rect(30, 30, width - 60, height - 60, 20);
  fill(255);
  textSize(22);
  textAlign(LEFT, TOP);
  textAlign(LEFT);
  text(
    "Inside the satchel is a shimmering charm that strengthens your body.\
    You leave Whisperwood healthier and more prepared than ever.\
    The treasure hunt continues with renewed vigor.",
    60,
    70,
    MAX_WIDTH,
  );
}
