export const messages = [
  'Not implemented yet',
  'Soon, maybe',
  'NOT YET HENRY',
  'I spended more time doing this message system than implementing this feature',
];

export function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
