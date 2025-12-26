//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const chars = 'abcdefghijklmnopqrstuvwxyz'.split('');

export const isPangram = (text) => {
  if(!text) return false; 
  const textArr = text.toLowerCase().split('').filter((char) => char !== ' ');
  const setOfText = new Set();
  for (let char of textArr) {
    if(chars.includes(char)){
      setOfText.add(char);
    }
  } 
  return setOfText.size === 26;  
};
