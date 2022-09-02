import sys
import math
sys.stdin = open("ex.txt","r")
[a, b] = map(int,sys.stdin.readline().rstrip().split(' '))

def solution(x):
    if (x < 10):
        return x
    return chr(x + 55)

answer = ''
if (a == 0):
    answer = 0
else:
    while(a > 0):
        tmp = solution(a % b)
        answer = str(tmp) + answer
        a = math.floor(a / b)

print(answer)
