let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let matrix2 = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9,]
]


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