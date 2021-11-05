/*

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length)
        return false;
    var arr = new Array(26);
    for(let i=0;i<s.length;i++){
        if(arr[s.charCodeAt(i)-97] === undefined)
            arr[s.charCodeAt(i)-97]=1;
        else
            arr[s.charCodeAt(i)-97]++
    }
    for(let i=0;i<t.length;i++){
        if(arr[t.charCodeAt(i)-97]){
            arr[t.charCodeAt(i)-97]--;
            if(arr[t.charCodeAt(i)-97] === 0)
                arr[t.charCodeAt(i)-97] = undefined;
        }
        else
            return false
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i] !== undefined)
            return false
    }
    return true
};
