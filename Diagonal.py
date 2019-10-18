from math import *
n = int(input().strip())

arr = []
for _ in range(n):
    arr.append(list(map(int, input().rstrip().split())))

rn = len(arr)
l = 0
l_sum = 0

while True:
    for row in arr:
        for col in arr:
            print(col[l])
            l_sum += col[l]
            l += 1
            if l >= rn:
                break
        break
    break

print(l_sum)

r = (rn - 1)
r_sum = 0
while True:
    for row in arr:
        for col in arr:
            print(col[r])
            r_sum += col[r]
            r -= 1
            if r < 0:
                break
        break
    break
print(r_sum)

print(abs(l_sum - r_sum))