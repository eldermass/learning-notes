/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
let fourSum = function (nums, target) {
    const ret = []
    nums.sort((x, y) => x - y)
    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue
        if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break
        if (nums[i] + nums[nums.length - 3] + nums[nums.length - 2] + nums[nums.length - 1] < target) continue
        for (let j = i + 1; j < nums.length - 2; j++) {
            if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break
            if (nums[i] + nums[j] + nums[nums.length - 2] + nums[nums.length - 1] < target) continue
            if (j > i + 1 && nums[j] === nums[j - 1]) continue
            let left = j + 1,
                right = nums.length - 1
            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right]
                if (sum === target) {
                    ret.push([nums[i], nums[j], nums[left], nums[right]])
                    while (left < right && nums[left] === nums[left + 1]) {
                        left++
                    }
                    left++
                    while (left < right && nums[right] === nums[right - 1]) {
                        right--
                    }
                    right--
                } else if (sum < target) {
                    left++
                } else {
                    right--
                }
            }
        }
    }
    return ret
}

let nums = [-3, -2, -1, 0, 0, 1, 2, 3],
    target = 0
console.log(fourSum(nums, target))
// [[-3,-2,2,3],[-3,-1,1,3],[-3,0,0,3],[-3,0,1,2],[-2,-1,0,3],[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
