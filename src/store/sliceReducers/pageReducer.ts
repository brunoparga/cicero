import { Action, PageState } from "../../types";

function pageReducer(page: PageState, { type, payload }: Action): PageState {
  switch (type) {
    case "RESULTS_SAVED":
      return { ...page, resultsSaved: true };
    case "SET_GUESS": {
      const { guess } = page;
      const typedPayload = payload as { property: string; value: boolean };

      guess[typedPayload.property] = typedPayload.value;

      // If the current guess is correct, check if all guesses are correct and
      // reveal answer if so
      if (typedPayload.value) {
        const wordIsGuessed = Object.values(page.guess).every(
          (entry: boolean) => entry
        );

        if (wordIsGuessed) {
          return { ...page, guess, revealAnswer: true };
        }
      }

      return { ...page, guess };
    }
    case "SET_STATUS":
      return { ...page, status: payload as "frontPage" | "studying" | "done" };
    case "SET_WORDS":
      return { ...page, currentWordIndex: -1 };
    case "TOGGLE_DEPONENT":
      return { ...page, passiveSelected: !page.passiveSelected };
    case "TOGGLE_PLURAL":
      return { ...page, pluralSelected: !page.pluralSelected };

    default:
      return page;
  }
}

export { pageReducer };
