// bubble sort

const bubbleSort = ( arr: number[]) => {
    for (let i: number = 0; i < arr.length - 1; i++) {
        for (let j: number = 0; j < (arr.length-1-i); j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr;
}

const array = [12]

console.log(bubbleSort(array))