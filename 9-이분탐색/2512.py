import sys
from collections import deque

sys.stdin = open("ex.txt", "r")
n = int(sys.stdin.readline().rstrip())
requests = list(map(int, sys.stdin.readline().rstrip().split()))
budget = int(sys.stdin.readline().rstrip())

def calculate_needed_budget(upper_bound: int) -> int:

    needed_budget = 0
    for request in requests:
        needed_budget += min(request, upper_bound)

    return needed_budget

low = 0
high = max(requests)
good_upper_bound = -1

# low가 high보다 작거나 같을때까지 이분탐색 수행
while low <=  high:
    mid = (low + high) // 2

    if calculate_needed_budget(mid) <= budget:
        good_upper_bound = mid
        low = mid + 1
        
    else:
        high = mid - 1
    
answer = -1
for request in requests:
    given = min(request, good_upper_bound)
    answer = max(answer, given)
    
print(answer)
