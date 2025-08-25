// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Return each wagon's id in form of an array.
 *
 * @param {...numbers} ids
 * @returns {number[]} wagon ids
 */
// export function getListOfWagons(...ids) {
//  return ids; 
// } 
// both are corrct
export function getListOfWagons(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
 return [...arguments]
}

/**
 * Reorder the array of wagons by moving the first 2 wagons to the end of the array.
 *
 * @param {Iterable<number>} ids
 * @returns {number[]} reordered list of wagons
 */
// export function fixListOfWagons(ids) {
// const [first , second , ...rest] = ids ; 
//   return [...rest, first, second]
// }
// this is so logical if in the same array
export function fixListOfWagons(ids) {
const copy = [...ids];
  copy.push(...copy.splice(0,2))
  return copy; 
}

/**
 * Fixes the array of wagons by inserting an array of wagons after the first element in eachWagonsID.
 *
 * @param {Iterable<number>} ids
 * @param {Iterable<number>} missingWagons
 * @returns {number[]} corrected list of wagons
 */
export function correctListOfWagons(ids, missingWagons) {
 // const [first , ...rest] = ids;
 //  return [first, ...missingWagons, ...rest]; 
  const copy = [...ids]; 
  copy.splice(1,0, ...missingWagons)
  return copy; 
}

/**
 * Extend route information by adding another object
 *
 * @param {Record<string, string>} information
 * @param {Record<string, string>} additional
 * @returns {Record<string, string>} extended route information
 */
export function extendRouteInformation(information, additional) {
return {
  ...information, ...additional
}
}

/**
 * Separate arrival time from the route information object
 *
 * @param {Record<string, string>} information
 * @returns {[string, Record<string, string>]} array with arrival time and object without arrival time
 */
export function separateTimeOfArrival(information) {
  const {timeOfArrival, ...rest} = information;
  return[timeOfArrival, rest]
}
