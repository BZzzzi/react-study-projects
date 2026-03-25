import dicePurple01 from "./assets/dice-purple-1.svg";
import dicePurple02 from "./assets/dice-purple-2.svg";
import dicePurple03 from "./assets/dice-purple-3.svg";
import dicePurple04 from "./assets/dice-purple-4.svg";
import dicePurple05 from "./assets/dice-purple-5.svg";
import dicePurple06 from "./assets/dice-purple-6.svg";
import diceRed01 from "./assets/dice-red-1.svg";
import diceRed02 from "./assets/dice-red-2.svg";
import diceRed03 from "./assets/dice-red-3.svg";
import diceRed04 from "./assets/dice-red-4.svg";
import diceRed05 from "./assets/dice-red-5.svg";
import diceRed06 from "./assets/dice-red-6.svg";

const DICE_IMAGES = {
  purple: [
    dicePurple01,
    dicePurple02,
    dicePurple03,
    dicePurple04,
    dicePurple05,
    dicePurple06,
  ],
  red: [diceRed01, diceRed02, diceRed03, diceRed04, diceRed05, diceRed06],
};

function Dice({ color = "red", num = 1 }) {
  const src = DICE_IMAGES[color][num - 1];
  const alt = `${color} ${num}`;
  return <img src={src} alt={alt}></img>;
}

export default Dice;
