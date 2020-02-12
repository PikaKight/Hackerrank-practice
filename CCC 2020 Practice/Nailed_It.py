n = int(input())
list = [int(i) for i in input().split()]

a = 0
b = n - 1

new_list = []
while a < b:
    c = list[a] + list[b - a]
    new_list.append(c)
    a += 1

maxi = max(new_list)

a = 0
i = 0
mid = n // 2 
while a < b:
    c = list[a] + list[b - a]
    if c == maxi and a < mid:
        i += 1
    a += 1

if i == 1:
    a = 0
    while a < n:
        c = 0
        c += n - a
        if a == n and n > 0:
            a = 0
            n -= 1  
else:
    c = 1

print(i, c)
