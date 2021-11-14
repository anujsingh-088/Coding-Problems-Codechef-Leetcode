/*

You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

 

Example 1:


Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
Example 2:


Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
Example 3:

Input: matrix = [[1]]
Output: [[1]]
Example 4:

Input: matrix = [[1,2],[3,4]]
Output: [[3,1],[4,2]]


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    for(let i =0;i<matrix.length/2;i++){
        for(let j=0;j<matrix.length;j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[matrix.length - i - 1][j]
            matrix[matrix.length - i - 1][j] = temp;
        }
    }
    for(let i =0;i<matrix.length;i++){
        for(let j=i;j<matrix.length;j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp;
        }
    }
};

// 1 2 3  00 01 02
// 4 5 6  10 11 12
// 7 8 9  20 21 22

// 7 8 9
// 4 5 6
// 1 2 3

// 7 4 1
// 8 
// 9

// 1 4 7
// 2 5 8
// 3 6 9
