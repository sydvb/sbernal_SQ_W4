// This file defines the drawing for scene A.

function drawA() {
  // --- Story text ---
  fill(255);
  textAlign(CENTER);
  textSize(22);
  text(
    "Soft blue lights drift between the trees. \
    The air hums with quiet magic. You feel watched, but not threatened.",
    width / 2,
    150,
  );

  // --- Choice buttons ---
  // Button 1 (CHOICE_1)
  drawButton(
    BTN_POSITIONS[0],
    BTN_Y,
    BTN_W,
    BTN_H,
    "Follow the floating lights.",
    isMouseOver(BTN_POSITIONS[0], BTN_Y, BTN_W, BTN_H),
  );

  // Button 2 (CHOICE_2)
  drawButton(
    BTN_POSITIONS[1],
    BTN_Y,
    BTN_W,
    BTN_H,
    "Ignore them and take the mossy trail.",
    isMouseOver(BTN_POSITIONS[1], BTN_Y, BTN_W, BTN_H),
  );
}
