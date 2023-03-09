# 문제
# 세준이는 N개의 빨대를 가지고 있다. N
# 개의 빨대 중에 3개의 빨대를 선택했을 때, 
# 이 빨대로 삼각형을 만들 수 있다면, 세 변의 길이의 합의 최댓값을 구하고 싶다.

# 입력
# 첫째 줄에 빨대의 개수 N이 주어진다. 
# N은 3보다 크거나 같고, 1,000,000보다 작거나 같은 자연수이다. 
# 둘째 줄부터 N개의 줄에 빨대의 길이가 한 줄에 하나씩 주어진다. 
# 빨대의 길이는 1,000,000보다 작거나 같은 자연수이다.

# 출력
# 첫째 줄에 삼각형 세 변의 길이의 합의 최댓값을 출력한다. 만약 삼각형을 만들 수 없으면 -1을 출력한다.

import sys
sys.stdin = open("ex.txt", "r")
N = int(sys.stdin.readline().rstrip())
A = [int(sys.stdin.readline().rstrip()) for _ in range(N)]

# 가장 큰 변의 길이 < 나머지 두 변의 길이합

A.sort()

answer = -1
for i in range(N - 1, 1, -1):
    if A[i] < A[i - 1] + A[i - 2]:
        answer = A[i] + A[i - 1] + A[i - 2]
        break

print(answer)
