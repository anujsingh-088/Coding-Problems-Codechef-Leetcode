/*

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1
 

Constraints:

1 <= s.length <= 105
s consists of only lowercase English letters.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var obj = {};
    for(let i=0;i<s.length;i++){
        let temp = s.charCodeAt(i) - 97
        if(obj[temp] === undefined)
            obj[temp] = 1;
        else
            obj[temp]++;
    }
    for(let i = 0; i<s.length;i++){
        let temp = s.charCodeAt(i) - 97;
        if(obj[temp] === 1)
            return i
    }
    return -1
};
