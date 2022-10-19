const n = 5
let val = 0
for (let i = 0; i < 5; i++) {
    result = []
    while (true) {
        let val = parseInt(Math.random() * 45 + 1)
        if (result.indexOf(val) == -1) {
            result.push(val)
        }
        if (result.length == 6) {
            break
        }
    }
    result.sort((a, b) => a - b)
    console.log(result)
}
