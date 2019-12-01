def fuel_needed(m: int):
    total = m

    while m > 0:
        fuel = (m // 3) - 2
        if fuel < 0:
            fuel = 0 
        total += fuel 
        m = fuel
    
    return total


print(fuel_needed(3371958
))

answer = 5055050
