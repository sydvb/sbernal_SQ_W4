// This file defines the drawing for scene B.

function drawB() {
  // --- Story text ---
  fill(255);
  textAlign(CENTER);
  textSize(22);
  text(
    "Thick thorns scrape your coat as you push through. The forest is rough, \
    but you spot signs of travelers—broken branches, old campfires.",
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
