const HANDS = ['rock', 'scissor', 'paper'];

function random(n) {
  return Math.floor(Math.random() * n);
}

export function generateRandomHand() {
  const idx = random(HANDS.length);
  return HANDS[idx];
}

export function getResult(me, other) {
  if (me === other) {
    return '무승부';
  }

  if (
    (me === 'scissor' && other === 'paper') ||
    (me === 'rock' && other === 'scissor') ||
    (me === 'paper' && other === 'rock')
  ) {
    return '승리';
  }

  return '패배';
}
