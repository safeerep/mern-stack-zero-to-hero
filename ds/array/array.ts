// leetcode 2974
const numberGame = (nums: number[]): number[] => {
    let arr: number[] = nums.sort((a, b) => a - b)
    for (let i: number = 0; i < nums.length-1; i += 2) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
    }
    return arr;
};

// leetcode 1822
const arraySign = (nums: number[]):number => {
    let newArray: number[] = []
    for (let i: number = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            return 0;
        } else if (nums[i] > 0) {
            newArray.push(1)
        } else {
            newArray.push(-1)
        }
    }
    let product: number = 1;
    newArray.forEach((element) => {
        product *= element;
    })
    if (product > 0) {
        return 1
    } else {
        return -1
    }
};

// leetcode 1572
const diagonalSum = (mat: number[][]): number => {
    let total: number = 0;
    for (let i: number = 0; i < mat.length; i++) {
        if (mat[i].length % 2 !== 0 && Math.floor(mat.length / 2) === i) {
            total += mat[i][i];
        } else {
            total += mat[i][i]
            total += mat[i][mat.length - i - 1]
        }
    }
    return total;
};

// leetcode 169
const majorityElement = (nums: number[]): number => {
    for (let i: number = 0; i < nums.length; i++) {
        let majorityCount = 0;
        for (let j: number = 0; j < nums.length; j++) {
            if (nums[j] === nums[i]) {
                majorityCount++;
                if (majorityCount > Math.floor(nums.length / 2)) {
                    return nums[i]
                }
            } else {
                continue;
            }
        }
    }
    return 0;
};