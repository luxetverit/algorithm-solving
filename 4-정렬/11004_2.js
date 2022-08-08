// 퀵정렬

const fs = require('fs')
const input = fs.readFileSync('ex.txt').toString().trim().split('\n')

let [nk, arr] = input
//console.log(nk)
nk = nk.split(' ').map(v => Number(v))
arr = arr.split(' ').map(v => Number(v))

const k = nk[1]
let result = quickSort(arr)
console.log(result[k - 1])

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left >= right) {
        return
    }
    const mid = Math.floor((left + right) / 2)
    const pivot = arr[mid]
    const partition = divide(arr, left, right, pivot)
    quickSort(arr, left, partition - 1)
    quickSort(arr, partition, right)

    function divide(arr, left, right, pivot) {
        while (left <= right) {
            while (arr[left] < pivot) {
                left++
            }
            while (arr[right] > pivot) {
                right--
            }
            if (left <= right) {
                let tmp = arr[left]
                arr[left] = arr[right]
                arr[right] = tmp
                left++
                right--
            }
        }
        return left
    }
    return arr
}
