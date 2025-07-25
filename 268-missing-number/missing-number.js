/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort((a, b) => a - b);
    length=nums.length
    for(let i=0;i<=length;i++){
        if(nums[i]!=i){
            return i
        }
    }


};