# 문제
# 세준이는 크기가 N×N인 배열 A를 만들었다. 배열에 들어있는 수 A[i][j] = i×j 이다. 
# 이 수를 일차원 배열 B에 넣으면 B의 크기는 N×N이 된다. B를 오름차순 정렬했을 때, B[k]를 구해보자.

# 배열 A와 B의 인덱스는 1부터 시작한다.

# 입력
# 첫째 줄에 배열의 크기 N이 주어진다. N은 10**5보다 작거나 같은 자연수이다. 
# 둘째 줄에 k가 주어진다. k는 min(109, N2)보다 작거나 같은 자연수이다.

# 출력
# B[k]를 출력한다.

import sys
from collections import deque

sys.stdin = open("ex.txt", "r")
n = int(sys.stdin.readline().rstrip())
k = int(sys.stdin.readline().rstrip())

# i번째 행에서 x보다 작은 수의 개수
def get_num_smaller(x: int) -> int:
    num_smaller = 0
    for i in range(1, n + 1):
        num_smaller += min(n, (x - 1) // i)

    return num_smaller 

# n - (i번째 행에서 x보다 작거나 같은 수의 개수)
def get_num_bigger(x: int) -> int:
    num_bigger = 0
    for i in range(1, n + 1):
        num_bigger += n - min(n, x // i)

    return num_bigger

low = 1
high = min(n * n, int(1e9))
answer = -1 

# X가 k번째 수
#   -> X보다 작은 수가 k-1개 이하
#   -> X보다 큰 수가 N-k 개 이하
#   배열의 전채 원소 수 N = n**2
while low <= high:
    mid = (low + high) // 2

    num_smaller = get_num_smaller(mid)
    num_bigger = get_num_bigger(mid)

    if num_smaller > k - 1:
        # mid보다 작은 수가 많으면 답은 low~mid - 1 사이에 존재
        high = mid - 1
    elif num_bigger > n * n - k:
        # mid 보다 큰 수가 많으면 답은 mid+1 ~ high 사이에 존재
        low = mid + 1
    else:
        # mid보다 작은 수가 k-1개 이하이고 큰 수가 n-k 개 이하면 mid는 k번째 수 이다. (정답)
        answer = mid
        break

print(answer)

