let operationsCounter = 0;

function bubbleSort(notSortedArray) {
  for (let i = 0; i < notSortedArray.length; i++) {
    for (let j = 0; j < notSortedArray.length; j++) {
      const currentValue = notSortedArray[j];
      const nextValue = notSortedArray[j + 1];

      if (nextValue < currentValue) {
        notSortedArray[j] = nextValue;
        notSortedArray[j + 1] = currentValue;
      }

      operationsCounter++;
    }
  }

  return notSortedArray;
}

// diff : O(n^2)
const result = bubbleSort([3, 1, 4, 2, 5, 8, 7, 9, 7, 10]);
console.log({ result, operationsCounter });
