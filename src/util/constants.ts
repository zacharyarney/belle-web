export const WPM_OPTIONS = [
  30, 60, 120, 180, 240, 260, 280, 300, 320, 340, 360, 380, 400, 410, 420, 430,
  440, 450, 460, 470, 480, 490, 500,
];

export const DEFAULT_WPM = 360;

export const NEW_LINE_REGEX = /(?:\r\n|\r|\n)/g;
export const WHITE_SPACE_REGEX = /(?:\s+)/g;

// Matches a word ending in normal punctuation and accounts for possible quotation marks
export const END_OF_SENTENCE_REGEX =
  /[.!?]$|(?<=[.?!,])"$|(?<=[.?!,])'$|(?<=[.?!,])”$|(?<=[.?!,])’$/;
