/*

Given a string columnTitle that represents the column title as appear in an Excel sheet, return its corresponding column number.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
 

Example 1:

Input: columnTitle = "A"
Output: 1
Example 2:

Input: columnTitle = "AB"
Output: 28
Example 3:

Input: columnTitle = "ZY"
Output: 701
Example 4:

Input: columnTitle = "FXSHRXW"
Output: 2147483647
 

Constraints:

1 <= columnTitle.length <= 7
columnTitle consists only of uppercase English letters.
columnTitle is in the range ["A", "FXSHRXW"].

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    var count = 1;
    var sum = 0;
    for(let i=columnTitle.length-1;i>=0;i--){
        sum += count*( columnTitle.charCodeAt([i]) - 64);
        count = count*26;
    }
    return sum
};
