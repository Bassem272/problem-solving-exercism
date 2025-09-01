//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const COST = {
  '1': 800,
  '2': 760,
  '3': 720,
  '4': 640,
  '5': 600
};

export const cost = (books) => {
  const subsets = [];

  while (books.length > 0) {
    const subset = [];
    for (let i = 0; i < books.length; i++) {
      const book = books[i];
      if (!subset.includes(book)) {
        subset.push(book);
        books.splice(i, 1);
        i--;
      }
    }
    subsets.push(subset);
  }

 let count5 = subsets.filter(s => s.length === 5).length;
let count3 = subsets.filter(s => s.length === 3).length;

let pairs = Math.min(count5, count3);

for (let i = 0; i < pairs; i++) {
  let fiveSet = subsets.find(s => s.length === 5);
  let threeSet = subsets.find(s => s.length === 3);
  
  threeSet.push(fiveSet.pop());
}

return subsets.reduce((total, subset) => {
    return total + subset.length * COST[subset.length]
  }, 0 );

};