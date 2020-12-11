import { setWordOptions } from "./setWordOptions";

it("just returns the options argument if that includes the lemma", () => {
  const options = ["foo", "bar", "baz"];
  const lemma = "baz";

  expect(setWordOptions(options, lemma)).toEqual(options);
});

it("adds the lemma to the options and shuffles them", () => {
  const options = ["foo", "bar", "baz"];
  const lemma = "quux";

  expect(setWordOptions(options, lemma)).toEqual(
    expect.arrayContaining(options.concat(lemma))
  );
});
