/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    length=nums.length
    let count=0
    for(let i =0;i<length;i++){
        if(nums[i]==0){
            nums.splice(i,1)
            i--
            count = count+1
        }
    }
    for(let j=0;j<count;j++){
        nums.push(0)
    }
    return nums

};