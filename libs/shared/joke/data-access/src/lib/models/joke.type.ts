export type JokeType = {
  readonly error: boolean;
  readonly category: string;
  readonly type: string;
  readonly joke: string;
  readonly flags: FlagsType;
  readonly id: number;
  readonly safe: boolean;
  readonly lang: string;
};

type FlagsType = {
  readonly nsfw: boolean;
  readonly religious: boolean;
  readonly political: boolean;
  readonly racist: boolean;
  readonly sexist: boolean;
  readonly explicit: boolean;
};
