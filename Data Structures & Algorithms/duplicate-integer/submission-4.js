class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let dupe = false;
        nums.sort();
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] === nums[i + 1]) {
                dupe = true;
                break;
            }
        }
        return dupe;
    }
}
