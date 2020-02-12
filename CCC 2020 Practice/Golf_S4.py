m = int(input())
n = int(input())
club = []
result = []


for _ in range(n):
    x = int(input())
    club.append(x)
    
club.sort(reverse=True)

y = 0
i = y
z = m
x = 0
for s in club:
    while i < n:
        if z >= club[i]:
            z -= club[i]
            x += 1
            # print(x, z, s)
        else:
            i += 1
    if z == 0:        
        result.append(x)
    x = 0
    z = m
    i = y + 1
    y += 1        

if len(result) > 0:
    print(f"Roberta wins in {min(result)} strokes.")

else:
    print("Roberta acknowledges defeat.")