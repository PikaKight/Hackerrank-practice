T = int(input())
l = []
prime = []
result = []

for _ in range(T):
    i = int(input())
    l.append(i)

s = 0
while s < len(l):
    a = l[s] * 2
    i = 0
    while i < a:
        if i % 2 == 1 and i % 3 == 1 and i % 5 == 1 and i % 7 == 1 and i % 11 == 1:
            prime.append(i)
    x = 0
    y = len(prime) - 1
    while x > y:
        if (prime[x] + prime[y - x]) / 2 == s:
            result.append(prime[x])
            result.append(prime[y])
            break
        x += 1
    s += 1
