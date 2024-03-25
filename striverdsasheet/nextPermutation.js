

function nextPermutation(nums) {

    let i= nums.length - 2 // 5
    while(i>=0 && nums[i] >= nums[i+1]) // 
    {
        i-- // 4 
    }

    if(i=== -1)
    {
        nums.reverse()
        return nums;
    }

    let j = nums.length - 1 // 6
    while(nums[j] <= nums[i]) // 0 == 0
    {
        j--  // 5 
    }

    [nums[i],nums[j]] = [nums[j],nums[i]] // [3,0] = [0,3]

    let left = i + 1; // 5
    let right = nums.length - 1; // 6
    while (left < right) {
        // [0,0] = [0,0]
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++; // 6
        right--; // 5 
    }
    console.log(nums)

    // return nums


}

let nums = [2,1,5,4,3,0,0];
console.log(nextPermutation(nums));
