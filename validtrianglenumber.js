//Objective is to find the number of valid triples that constitute valid triangle sides

let nums = [2,2,3,4]


//O(n^2) solution where n is the number of elements in the array
//We use a solution similar to 3Sum

let count = 0
nums.sort((a,b) => a - b)

//Similar approach to '3Sum'
for (let i = 0; i < nums.length - 2; i++) {
    //This can be put inside as well but it'd be looped over n^2 times vs
    //n times
    let k = i + 2
    
    //If nums[i] == 0, then we might have a negative result for 'count'
    for (let j = i + 1; j < nums.length - 1 && nums[i] != 0; j++) {
        while (k < nums.length && nums[i] + nums[j] > nums[k]) {
            k++
        }
        count += k - j - 1
    }
}

return count