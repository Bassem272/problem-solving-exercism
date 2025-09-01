//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (n) => {
  let arrays = [];
  let r = 0; 
  while(r < n){
    let row = Array(r+1).fill(1); 
    for (let index = 1; index < row.length-1; index++) {
      row[index] = arrays[r-1][index-1] + arrays[r-1][index];
    }
    arrays.push(row); 
    r++;
  }
  return arrays; 
};
