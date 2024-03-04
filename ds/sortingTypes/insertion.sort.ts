// insertion sort

const insertionSort = ( arr: number[]) :number[] => {
    for (let i: number = 1; i < arr.length; i++) {
        let current = arr[i];
        let j: number = i - 1;
        while ( j >= 0 && arr[j] > current) {
            arr[j+1] = arr[j]
            j--;
        }
        arr[j+1] = current;
    }
    return arr;
}

const array2 = [90,3,-90,67,95];
console.log(insertionSort(array2))