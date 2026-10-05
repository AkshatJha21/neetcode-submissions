class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) {
            return false;
        }
        let sArr = s.split("");
        let tArr = t.split("");
        sArr.sort();
        tArr.sort();
        for (let i = 0; i < sArr.length; i++) {
            if (sArr[i] === tArr[i]) {
                continue;
            } else {
                return false;
            }
        }
        return true;
    }
}
