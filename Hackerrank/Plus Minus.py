n = int(input())

arr = list(map(int, input().rstrip().split()))

rn = len(arr)

positive = 0
negative = 0
zero = 0

for i in arr:
    if i > 0:
        positive += 1
    elif i == 0:
        zero += 1
    else:
        negative += 1

print(str.format('{0:.6f}', (positive/rn)))
print(str.format('{0:.6f}', (zero/rn)))
print(str.format('{0:.6f}', (negative/rn)))
