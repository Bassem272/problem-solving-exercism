// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
// export function twoSum(array1, array2) {
//   let firstNum = ''; 
//   for (let name of array1) {
//       firstNum += name;     
//   }
//   let secNum = ''; 
//   for (let name of array2) {
//       secNum += name;     
//   }
//   return Number(firstNum) + Number(secNum); 
// }
export function twoSum(array1, array2) {
 let firstNum = BigInt(array1.join('')); 
  let secNum = BigInt(array2.join('')); 
  return Number(firstNum + secNum)
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
// export function luckyNumber(value) {
//   return value === Number(String(value).split('').reverse().join(""))
// }
export function luckyNumber(value) {
let reversed = 0; 
  let original = value; 
  while(value > 0){
    reversed = reversed * 10 + (value % 10); 
    value = Math.floor(value / 10);
  }; 
  return original === reversed; 
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
   if(input === '' || input === null || input === undefined){
    return 'Required field'; 
  }
  const num = Number(input); 
  if(Number.isNaN(num) || num === 0){
    return 'Must be a number besides 0'
  }
  return ''

}
