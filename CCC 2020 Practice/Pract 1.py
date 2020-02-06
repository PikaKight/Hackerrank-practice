n = int(input())
total = 0
used = []
for i in range(n):
    if n - i >= 0 and i is not in used or n - i is not in used:
        used.append(i)
        total += 1

print(total)