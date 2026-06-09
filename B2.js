// This file defines the drawing for scene B2.

function drawB2() {
  // --- Story text ---
  fill(10, 150);
  noStroke();
  rect(30, 30, width - 60, height - 60, 20);
  fill(255);
  textSize(22);
  textAlign(LEFT, TOP);
  textAlign(LEFT);
  text(
    "You push deeper and find a hidden burrow. Something glints inside.",
    60,
    70,
    MAX_WIDTH,
  );

  // --- Choice buttons ---
  // Button 1 (CHOICE_1)
  drawButton(
    BTN_POSITIONS[0],
    BTN_Y,
    BTN_W,
    BTN_H,
    "Investigate.",
    isMouseOver(BTN_POSITIONS[0], BTN_Y, BTN_W, BTN_H),
  );

  // Button 2 (CHOICE_2)
  drawButton(
    BTN_POSITIONS[1],
    BTN_Y,
    BTN_W,
    BTN_H,
    "Set a trap and wait.",
    isMouseOver(BTN_POSITIONS[1], BTN_Y, BTN_W, BTN_H),
  );
}
