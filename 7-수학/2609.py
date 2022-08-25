# 문제
# 두 개의 자연수를 입력받아 최대 공약수와 최소 공배수를 출력하는 프로그램을 작성하시오.

# 입력
# 첫째 줄에는 두 개의 자연수가 주어진다. 이 둘은 10,000이하의 자연수이며 사이에 한 칸의 공백이 주어진다.

# 출력
# 첫째 줄에는 입력으로 주어진 두 수의 최대공약수를, 둘째 줄에는 입력으로 주어진 두 수의 최소 공배수를 출력한다.

f = open('ex.txt', 'r')
num1, num2 = map(int, f.read().split(' '))
f.close

def getGCD(a, b):
    if b == 0:
        return a
    return getGCD(b, a % b)

gcdval = getGCD(num1, num2)
lcdval = int(gcdval * (num1 / gcdval) * (num2 / gcdval))
print(gcdval)
print(lcdval)

##result = getGCD(num1, num2)
