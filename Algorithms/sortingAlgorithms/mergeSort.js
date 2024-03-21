function merge(leftHalf, rightHalf) {
    const mergedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftHalf.length && rightIndex < rightHalf.length) {
        if (leftHalf[leftIndex] < rightHalf[rightIndex]) {
            mergedArray.push(leftHalf[leftIndex]);
            leftIndex++;
        } else {
            mergedArray.push(rightHalf[rightIndex]);
            rightIndex++;
        }
    }

    while (leftIndex < leftHalf.length) {
        mergedArray.push(leftHalf[leftIndex]);
        leftIndex++;
    }

    while (rightIndex < rightHalf.length) {
        mergedArray.push(rightHalf[rightIndex]);
        rightIndex++;
    }

    return mergedArray;
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middleIndex = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, middleIndex);
    const rightHalf = arr.slice(middleIndex);

    return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

const array = [12, 11, 13, 5, 6, 7];
const sortedArray = mergeSort(array);
console.log(sortedArray); 
