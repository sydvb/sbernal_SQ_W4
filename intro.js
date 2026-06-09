// This file defines the drawing for intro scene.

function drawIntro() {
  // --- Story text ---
  fill(10, 150);
  noStroke();
  rect(30, 30, width - 60, height - 60, 20);
  fill(255);
  textSize(22);
  textAlign(LEFT, TOP);
  textAlign(LEFT);
  text(
    "You are Rylin, a lone peddler roaming from forest to forest, chasing rumors of\
    the Queen’s Lost Crown, a treasure said to grant its finder a lifetime of prosperity. Your pack is light, your hopes are high, and the path ahead forks into two very different woods.",
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
    "Enter the Whisperwood.",
    isMouseOver(BTN_POSITIONS[0], BTN_Y, BTN_W, BTN_H),
  );

  // Button 2 (CHOICE_2)
  drawButton(
    BTN_POSITIONS[1],
    BTN_Y,
    BTN_W,
    BTN_H,
    "Enter the Bramblepath.",
    isMouseOver(BTN_POSITIONS[1], BTN_Y, BTN_W, BTN_H),
  );
}
