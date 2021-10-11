/*

Write a function that reverses a string. The input string is given as an array of characters s.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 

Constraints:

1 <= s.length <= 105
s[i] is a printable ascii character.

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s, i=0) {
     if(i >= s.length/2)
        return s;
    s = reverseString(s, i+1);
    var length = s.length - 1;
    var c = s[i];
    s[i] = s[length - i]
    s[length - i] = c;
    
    return s;
    
};


