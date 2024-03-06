import type { DynamicRule, Preset, Variant } from "unocss";

// TODO: rename dummy?

// workaround missing autocomplete
// https://github.com/hi-ogawa/unocss-typescript-dsl/issues/12

export function dummyRule(autocomplete: string): DynamicRule {
  return [/a^/, () => "", { autocomplete }];
}

export function dummyVariant(autocomplete: string): Variant {
  return {
    match: () => undefined,
    autocomplete,
  };
}

export function dummyPreset(): Preset {
  return {
    name: "dummy-preset",
    rules: [
      dummyRule("border"),
      dummyRule("transition"),
      dummyRule("(max-|min-|)(w|h)-full"),
      dummyRule("(max-|min-|)(w|h)-<num>"),
      dummyRule("(top|left|right|bottom)-<num>"),
      dummyRule("ring-<num>"),
      dummyRule("opacity-<percent>"),
      dummyRule("rounded-full"),
      dummyRule("absolute"),
      dummyRule("relative"),
      dummyRule("fixed"),
    ],
    variants: [
      dummyVariant("important"),
      dummyVariant("aria-$aria"),
      dummyVariant("media-$media"),
    ],
  };
}
