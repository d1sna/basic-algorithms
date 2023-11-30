let operationsCounter = 0;

function selectionSort(notSortedArray) {
  for (let i = 0; i < notSortedArray.length; i++) {
    let indexOfMinimal = i;

    for (let j = 0; j < notSortedArray.length; j++) {
      const currentValue = notSortedArray[j];
      const temporaryMinimalValue = notSortedArray[indexOfMinimal];

      if (currentValue < temporaryMinimalValue && j > i) {
        indexOfMinimal = j;
      }

      operationsCounter++;
    }

    const minValue = notSortedArray[indexOfMinimal];
    notSortedArray[indexOfMinimal] = notSortedArray[i];
    notSortedArray[i] = minValue;
  }

  return notSortedArray;
}

// diff : O(n^2)
const result = selectionSort([3, 1, 4, 2, 5, 8, 7, 9, 7, 10]);
console.log({ result, operationsCounter });
