//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  
  constructor(matrixLine) {
    if(!/\n/g.test(matrixLine)){
      this.matrix = matrixLine.split(" ").map(item => [Number(item)]); 
    }else{
      this.matrix = matrixLine.split("\n").map(item => item.split(' ')).map(item => item.map(Number)); 
    }
  }

  get rows() {
    return this.matrix;
  }

  get columns() {
    return this.matrix[0].map((_, colIndex) => {
      return this.matrix.map(row => row[colIndex])
    })
    
  }
}
