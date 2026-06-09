// This file defines the drawing for scene B.

function drawB() {
  // --- Story text ---
  fill(10, 150);
  noStroke();
  rect(30, 30, width - 60, height - 60, 20);
  fill(255);
  textSize(22);
  textAlign(LEFT, TOP);
  textAlign(LEFT);
  text(
    "Thick thorns scrape your coat as you push through. The forest is rough, but you spot signs\
    of travelers—broken branches, old campfires.",
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
    "Approach campfire smoke.",
    isMouseOver(BTN_POSITIONS[0], BTN_Y, BTN_W, BTN_H),
  );

  // Button 2 (CHOICE_2)
  drawButton(
    BTN_POSITIONS[1],
    BTN_Y,
    BTN_W,
    BTN_H,
    "Search underbush.",
    isMouseOver(BTN_POSITIONS[1], BTN_Y, BTN_W, BTN_H),
  );
}
