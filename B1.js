// This file defines the drawing for scene B1.

function drawB1() {
  // --- Story text ---
  fill(10, 150);
  noStroke();
  rect(30, 30, width - 60, height - 60, 20);
  fill(255);
  textSize(22);
  textAlign(LEFT, TOP);
  textAlign(LEFT);
  text(
    "A cloaked traveler sits by the fire. They gesture for you to join them.",
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
    "Listen to story.",
    isMouseOver(BTN_POSITIONS[0], BTN_Y, BTN_W, BTN_H),
  );

  // Button 2 (CHOICE_2)
  drawButton(
    BTN_POSITIONS[1],
    BTN_Y,
    BTN_W,
    BTN_H,
    "Decline and steal their pack.",
    isMouseOver(BTN_POSITIONS[1], BTN_Y, BTN_W, BTN_H),
  );
}
