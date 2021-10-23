/*
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]
 

Constraints:

1 <= numRows <= 30


/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const result =[];
    function gen(numRows, count, result){
        if(count > numRows)
            return;
        if(count === 1){
            result.push([1]);
            gen(numRows, count+1, result);
            return;
        }
        else if(count === 2){
            result.push([1,1]);
            gen(numRows, count+1, result);
            return;
        }

        const arr = [];
        arr.push(1);
        var tempArray = result[count-2]
        for(let i = 1 ;i<count-1;i++){
            arr.push(tempArray[i-1] + tempArray[i]);
        }
        arr.push(1);
        result.push(arr)
        gen(numRows, count+1, result);
    };
    gen(numRows, 1, result)
    
    return result;
   
    
}
