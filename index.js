const hipsterMatrix = [
    ["bicycle", "rights", "locavore", "austin", "palo"],
    ["bulb", "portland", "direct", "trade", "kale"],
    ["Lumbersexual", "godard", "meditation", "scenester", "poke"],
    ["Tofu", "crucifix", "readymade", "VHS", "actually"],
    ["mustache", "irony", "drinking", "vinegar", "Brooklyn"]
  ];
  
  
  // Implement joinDeep, which will join every string in this matrix into one string
  // Seperate items with in an array with a space, seperate each string array with a newline \n
  /** 
    * @param matrix {string[][]}
    * @returns string
    * */
/*   
  function joinDeep(matrix) {
    const newArray=[];
      for(let row = 0; row < matrix.length; row++){
          if(row >= 1){
            newArray.push('\n')
          }
            for(let column = 0; column < matrix[row].length; column++){
              const oneString = matrix[row][column];
            // console.log(oneString,row, column)
              newArray.push(oneString);
            } 
        }
        newArray.push('\n')
        const gibberish = newArray.join("");
      
        return gibberish
      }

  */
 // const hipsterSpeak = joinDeep(hipsterMatrix);
 // console.log('Hipster Speak:\n', hipsterSpeak);
  
  // Implement oddMatrixItems, which iterates a matrix (array of array of strings in this case)
  // Create and return a new matrix, with only the strings that are an odd length
  // Example: if you encoutner "portland", remove because 8 chars is even
  // BUt if you encounter "VHS", keep because 3 characters is odd
  /**
    * @param matrix {string[][]}
    * @returns string[][]
    * */
    function oddMatrixItems(matrix) {
    const newMatrix = [];
    for(let row = 0; row < matrix.length; row++){
       //console.log(matrix[row]);
       const rowOfStrings = matrix[row];
       const oddWords = rowOfStrings.filter(oddStrings)
       //console.log(oddWords)
       newMatrix.push(oddWords)
       function oddStrings(element){
          return element.length % 2 !==0;
       }
  }
  return newMatrix;
}

  const oddHipsterSpeak = oddMatrixItems(hipsterMatrix);
  console.log('Odd Hipster Speak:\n', oddHipsterSpeak);
  
