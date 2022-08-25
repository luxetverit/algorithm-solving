f = open('ex.txt', 'r')
input = f.read()
f.close

n = len(input)
arr = []
for i in range(n):
    arr.append(input[i:])
arr.sort()
print(*arr, sep = '\n')
