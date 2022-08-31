import sys
sys.stdin = open("ex.txt","r")
input = sys.stdin.readline

counts = [0] * 10001  # save the frequency of numbers respectively.
for _ in range(int(input())):
    counts[int(input())] += 1
    

for num in range(1, 10000+1):
    if counts[num] > 0:
        for _ in range(counts[num]):
            print(num)