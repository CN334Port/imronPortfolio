d = int(input(": "))
m = int(input(": "))
y = int(input(": "))


def ordinalDate(d, m, y):
    sum_d = 0
    if m >= 1:
        if m == 1:
            sum_d += d
        else:
            sum_d += 31
    if m >= 3:
        if m == 3:
            sum_d += d
        else:
            sum_d += 31
    if m >= 4:
        if m == 4:
            sum_d += d
        else:
            sum_d += 30
    if m >= 5:
        if m == 5:
            sum_d += d
        else:
            sum_d += 31
    if m >= 6:
        if m == 6:
            sum_d += d
        else:
            sum_d += 30
    if m >= 7:
        if m == 7:
            sum_d += d
        else:
            sum_d += 31
    if m >= 8:
        if m == 8:
            sum_d += d
        else:
            sum_d += 31
    if m >= 9:
        if m == 9:
            sum_d += d
        else:
            sum_d += 30
    if m >= 10:
        if m == 10:
            sum_d += d
        else:
            sum_d += 31
    if m >= 11:
        if m == 11:
            sum_d += d
        else:
            sum_d += 30
    if m >= 12:
        if m == 12:
            sum_d += d
        else:
            sum_d += 31

    if (y // 4 == 0 and y // 100 != 0) or y // 400 == 0:
        if m >= 2:
            if m == 2:
                sum_d += d
            else:
                sum_d += 29

    else:
        if m >= 2:
            if m == 2:
                sum_d += d
            else:
                sum_d += 28

    return sum_d


print(ordinalDate(d, m, y))
