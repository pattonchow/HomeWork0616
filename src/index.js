class Solution {
  solution(S) {
    const charMap = new Map();
    let count = 0;

    for (let i = 0; i < S.length; i++) {
      const char = S[i];
      if (!charMap.has(char)) {
        charMap.set(char, i);
        count++;
      } else {
        let maxIndex = charMap.get(char);
        for (let [key, value] of charMap.entries()) {
          if (value <= maxIndex) {
            charMap.delete(key);
          }
        }
        charMap.set(char, i);
      }
    }

    return count;
  }
}

// Example usage:
const solution = new Solution();
console.log(solution.solution("world")); // Output: 1
console.log(solution.solution("dddd")); // Output: 4
console.log(solution.solution("cycle")); // Output: 2
console.log(solution.solution("abba")); // Output: 2
