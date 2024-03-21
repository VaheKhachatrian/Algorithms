function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let min = i
        for(let j = i; j < arr.length; j++) {
            if(arr[j] < arr[min]) min = j;
        }
        [arr[min], arr[i]] = [arr[i], arr[min]]
    }
    return arr
}

let arr = [5,2,12,6,6,7]
console.log(selectionSort(arr));