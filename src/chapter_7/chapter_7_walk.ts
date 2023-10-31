import { endAdventure, haveAdventures } from "../..";
import { askQuestion, clear, print } from "../ui/console";

const PACES = ["slow", "normal", "fast"] as const;
type pace = (typeof PACES)[number];

const DISTANCES = ["long", "short"] as const;
type distance = (typeof DISTANCES)[number];

class Walk {
  myPace: pace = PACES[1];
  distanceCovered: distance = DISTANCES[1];
}

export function goForAWalk(): void {
  clear(true);
  print("Wait... did u go for a walk?");
  print("Wait... was this all a dream?");
  const walk = new Walk();
  walk.myPace = PACES[2];
  walk.distanceCovered = DISTANCES[0];

  if (walk.myPace === "fast" && walk.distanceCovered === "long") {
    print("You have done a long fast walk 🛏 What a lovely dream.");
    print("Although...❓❓❓");
    print("What are these tarts doing here?! 🥧🥧🥧🥧🥧🥧 🤔");

    print(
      "✅ CONGRATULATIONS! You successfully made it through Wonderland! 🥳"
    );

    return askQuestion("Press ENTER to re-enter Wonderland! ", haveAdventures);
  } else {
    print("You are unable to complete your walk! 😱");
    return endAdventure();
  }
}
