function partition(arr, l, r) {
    let pivot = arr[r];
    let i = l - 1;
    for (let j = l; j < r; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[r]] = [arr[r], arr[i + 1]];
    return i + 1;
}

function quickSort(arr, l = 0, r = arr.length - 1) {
    if (l < r) {
        let pivotIndex = partition(arr, l, r);
        quickSort(arr, l, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, r);
    }
    return arr;
}

let arr = [5, 2, 12, 6, 6, 7];
console.log(quickSort(arr));
