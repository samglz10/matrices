// 2d array or multidimensional arrays
const matrix = [[1,2,3],
                [4,5,6],
                [7,8,9]]

matrix[0][0] = 'X'
matrix[0][1] = 'O'
matrix[0][2] = 'X'

matrix[1][0] = 'O'
matrix[1][1] = 'X'
matrix[1][2] = 'O'

matrix[2][0] = 'X'
matrix[2][1] = 'O'
matrix[2][2] = 'X'


for(let row of matrix){
    const rowString = row.join(' ')
    //console.log(rowString)
}

let grades = [
    [12, 13, 32, 43, 42, 23],
    [12, 43, 21, 12, 43, 12],
    [43, 12 , 43, 12, 45, 12]
]
/*
//make for loop for the outer array
for(let i =0; i < grades.length; i ++){
    //console.log(grades[i]);
    //inner array loop
    for(let j =0; j < grades[i].length; j++){
        //first is for the row and second for the column
        console.log(grades[i][j]);
    }
    console.log('\n')
}
*/
grades.forEach((row)=>{
    row.forEach((column)=>{
        console.log(column)
    })
    console.log('\n')
})