import random
from binarySearch import binarySearch
maxCount = 20
maxTestInt = 100
testArray = []
for i in range(maxCount):
    testArray.append(random.randint(0, maxTestInt))
testArray.sort();
print(testArray)
print('sorted test array is ' + '[' + ' '.join(str(x) for x in testArray) + ']')
testNumber = 55
print('test number is ' + str(testNumber))

output = binarySearch(testArray, testNumber);

print(output)
