// quick sort

const quickSort = ( arr: number[]):number[] => {
    if (arr.length < 2) return arr;
    const pivot = arr[0];
    const leftArray: number[] = []
    const rightArray: number[] = []

    for (let i: number = 1; i < arr.length; i++) {
        if (pivot < arr[i]) {
            rightArray.push(arr[i])
        } else {
            leftArray.push(arr[i])
        }
    }

    return [ ...quickSort(leftArray), pivot, ...quickSort(rightArray)]
}

const array5 = [56,34,56,23,782,7,2]
console.log(quickSort(array5));