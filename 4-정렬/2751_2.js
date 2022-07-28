// in place 퀵정렬 (unstable)

const fs = require('fs')
const input = fs.readFileSync('ex.txt', 'utf-8').toString().trim().split('\n')
//const input = fs.readFileSync('/dev/stdin', 'utf-8').toString().split('\n')

let [n, ...arr] = input
arr = arr.map(v => Number(v))
//const result = arr.sort((a, b) => a - b)
//console.log(result.join('\n'))

let result = quickSort(arr)
console.log(result.join('\n'))

function quickSort(array, left = 0, right = array.length - 1) {
    if (left >= right) {
        return
    }
    const mid = Math.floor((left + right) / 2)
    const pivot = array[mid]
    const partition = divide(array, left, right, pivot)
    quickSort(array, left, partition - 1)
    quickSort(array, partition, right)

    function divide(array, left, right, pivot) {
        while (left <= right) {
            while (array[left] < pivot) {
                left++
            }
            while (array[right] > pivot) {
                right--
            }

            if (left <= right) {
                let temp = array[left]
                array[left] = array[right]
                array[right] = temp
                left++
                right--
            }
        }
        return left
    }
    return array
}
