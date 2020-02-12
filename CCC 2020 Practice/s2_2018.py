n = int(input())
i = [int(x) for x in input().split()]

correct = False
while not correct:
    correct = True
    if i[0] < i[len(i) - 1]:
        pass

print(i.join())
for _ in range(n - 1):
    a = input()
    print(a)
