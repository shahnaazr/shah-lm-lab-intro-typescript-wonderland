import { endAdventure, haveAdventures } from "../..";
import { askQuestion, clear, print } from "../ui/console";
import { goForAWalk } from "../chapter_7/chapter_7_walk";

// ⚠️ This is a very unusual type setup. It's not a great idea in the real world
// to nest so many properties with the exact same name.
// But in Wonderland, this sort of thing is normal,
// so we've just got to find a way through it...

interface WakeUp {
  wake?: WakeUpFromDream;
}
interface WakeUpFromDream {
  wake?: WakeUpFromREMSleep;
}
interface WakeUpFromREMSleep {
  wake?: WakeUpFromDeepSleep;
}
interface WakeUpFromDeepSleep {
  canWake?: string;
}

export function wakeUp(): void {
  clear(true);

  const awoken = tryToWakeUp();

  // optional parameters can be accessed safely with the ?. operator
  // this will only return if every parameter in the whole chain is properly set...
  if (awoken.wake?.wake?.wake?.canWake === "Yes") {
    print("You have awoken in your bed 🛏 in your dream.");
    print("Although...❓❓❓");
    print("What are these shoes doing here?! 🤔");
    print("Time to go for a walk");
    return askQuestion("Press ENTER to continue! ", goForAWalk);
  } else {
    print("You are unable to go for a walk! 😱");
    return endAdventure();
  }
}

function tryToWakeUp(): WakeUp {
  return {
    wake: {
      wake: {
        wake: {
          canWake: "Yes",
        },
      },
    },
  };
}
