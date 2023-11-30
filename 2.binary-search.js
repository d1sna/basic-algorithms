let operationsCounter = 0;

function binarySearch(items, foundItem) {
  let startIndex = 0;
  let finishIndex = items.length;
  let foundPosition;
  let middleIndex;

  while (!foundPosition && startIndex < finishIndex) {
    operationsCounter++;
    middleIndex = Math.floor((startIndex + finishIndex) / 2);

    if (items[middleIndex] === foundItem) {
      foundPosition = middleIndex;
      return foundPosition;
    }

    if (foundItem < items[middleIndex]) {
      finishIndex = middleIndex;
    } else {
      startIndex = middleIndex;
    }
  }
}

function binarySearchRecursive(items, foundItem) {
  operationsCounter++;
  let startIndex = 0;
  let finishIndex = items.length;
  let middleIndex = Math.floor(startIndex + finishIndex / 2);

  if (foundItem === items[middleIndex]) return middleIndex;

  if (items.length <= 1) return -1;

  return foundItem < items[middleIndex]
    ? binarySearch(items.slice(startIndex, middleIndex), foundItem)
    : binarySearch(items.slice(middleIndex, finishIndex), foundItem);
}

// diff : O(logN)
const result = binarySearchRecursive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10);
console.log({ result, operationsCounter });
