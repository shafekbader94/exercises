function generateMatrix(numRows, numColumns) {
    let matrix = []
    let num = 1
    
    for (let r = 0; r < numRows; r++) {
        matrix.push([])
        for (let c = 0; c < numColumns; c++) {
            matrix[r].push(num++)
        }
    }
    return matrix
}
///spot2
let matrix = generateMatrix(3,4)

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j])
    }
 
}


///spot3
function get(rowNum, colNum){
    return matrix[rowNum][colNum]
}

console.log(get(1,2))


///spot4
for (let i = 0; i < matrix.length; i++) {
    let line =""
    for (let j = 0; j < matrix[i].length; j++) {
        line = line + (matrix[i][j] + "\t")
    }
    console.log(line)
}

///spot5
function printRow(rowNum){
        for (let i = 0; i < matrix[rowNum].length; i++) {
            console.log(matrix[rowNum][i])
        }

}
printRow(1)

///spot5
function alter(rowNum, colNum, changeTo){

    return matrix[rowNum][colNum] = changeTo


}
alter(1, 3, 174)

console.log(matrix)

/********************************* */
function printColumn(matrix, colNum) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i][colNum])
    }
}

printColumn(1) //prints 2, 6, 10 on separate lines
