// selection sort 

const selectionSort = ( arr: number[]):number[] => {
    for (let i: number = 0; i < arr.length-1; i++) {
        let smallestValueOnIndex = i;
        for (let j: number = i+1; j < arr.length; j++) {
            if (arr[smallestValueOnIndex] > arr[j]) {
                smallestValueOnIndex = j;
            }
        }
        [arr[smallestValueOnIndex], arr[i]] = [arr[i], arr[smallestValueOnIndex]]
    }
    return arr;
}

const array3 = [23,34,12,452,8,90]
console.log(selectionSort(array3));