n = int(input())
ne = []
dis = []
result = []

for i in range(n):
    a = int(input())
    ne.append(a)
    ne.sort()

# print(ne)

i = 0
while i < n - 1:
    x = ((ne[i + 1] - ne[i]) / 2 ) + ne[i] 
    dis.append(x)
    i += 1

# print(dis)

new_ne = ne[1:n - 1]

# print(new_ne)

i = 0
while i < len(new_ne):
    x = abs(new_ne[i] - dis[i])
    y = abs(new_ne[i] - dis[i + 1])
    z = x + y
    result.append(z)
    # print(result)

    i += 1

print(min(result))