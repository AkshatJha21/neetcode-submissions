class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        nums.sort();
        let isDuplicate = false;
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] == nums[i + 1]) {
                isDuplicate = true;
                return isDuplicate;
            } else {
                continue;
            }
        }
        return isDuplicate;
    }
}
