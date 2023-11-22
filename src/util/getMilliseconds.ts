export function getMilliseconds(wpm: number) {
  return (60 / wpm) * 1000;
}
