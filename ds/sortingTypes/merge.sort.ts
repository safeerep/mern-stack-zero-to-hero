// merge sort

const mergeSort = ( arr: number[]) => {
    if (arr.length < 2) return arr;
    const middle: number = Math.floor(arr.length/2)
    const sortedFirstHalf = mergeSort(arr.slice(0, middle))
    const sortedSecondHalf = mergeSort(arr.slice( middle))

    return (merge(sortedFirstHalf, sortedSecondHalf))
}

const merge = ( leftArr: number[], rightArr: number[]):number[] => {
    const newArray: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while ( leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if ( leftArr[leftIndex] < rightArr[rightIndex]) {
            newArray.push(leftArr[leftIndex])
            leftIndex++;
        } else {
            newArray.push(rightArr[rightIndex])
            rightIndex++
        }
    }
    return [ ...newArray, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]
}

const array4 = [45,6,34,783,44,23]
console.log(mergeSort(array4));
