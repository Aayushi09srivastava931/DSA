/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    n = nums.length
    let totalsum = n * (n + 1) / 2
    let sum = 0
    for(let i=0;i<n;i++){
        sum = sum +nums[i]
    }
     let missing_number = totalsum - sum
     return missing_number
};