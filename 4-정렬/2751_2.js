// in place 퀵정렬 (unstable)

function quickSort(arr, left = 0, right = arr.lenght - 1) {
    if (left >= right) {
        return
    }

    const mid = Math.floor((left + right) / 2)
    const pivot = arr[mid]
    const partition = divide(arr, left, right, pivot)

    quickSort(arr, left, partition - 1)
    quickSort(arr, partition, right)
}
