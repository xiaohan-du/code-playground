def binarySearch(testArray, testNumber):
    top = len(testArray) - 1
    bottom = 0
    idx = top // 2
    while bottom <= top:
        val = testArray[idx]
        if val == testNumber: 
            return idx
        elif val < testNumber:
            bottom = idx + 1
        else: 
            top = idx - 1
        idx = (bottom + top) // 2
