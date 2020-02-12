n  = int(input())
final = 0
result = []

for i in range(n):
    if n - i >= 0 and (n - i) not in result:
        final += 1
        result.append(i)

print(final)