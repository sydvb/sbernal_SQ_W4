// This file defines the drawing for intro scene.

function drawIntro() {
  // --- Story text ---
  fill(255);
  textAlign(CENTER);
  textSize(22);
  text(
    "You are Rylin, a lone peddler roaming from forest to forest, chasing rumors of \
    the Queen’s Lost Crown, a treasure said to grant its finder a lifetime of prosperity.\
    Your pack is light, your hopes are high, and the path ahead forks into two very \
    different woods.",
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
    "Enter the Whisperwood -- A forest known for strange lights and wandering spirits.",
    isMouseOver(BTN_POSITIONS[0], BTN_Y, BTN_W, BTN_H),
  );

  // Button 2 (CHOICE_2)
  drawButton(
    BTN_POSITIONS[1],
    BTN_Y,
    BTN_W,
    BTN_H,
    "Enter the Bramblepath -- A harsher forest, full of thorns but rich with hidden trade routes.",
    isMouseOver(BTN_POSITIONS[1], BTN_Y, BTN_W, BTN_H),
  );
}
