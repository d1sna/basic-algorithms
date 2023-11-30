let counter = 0;
const testArray = [
  10, 3, 4, 5, 1, 2, 1, 4, 6, 8, 9, 3, 1, 5, 654, 745, 31, 432, 432, 4, 1, 4,
  341, 34124, -1, -1, -1, -43, -24, -1, -23,
];

function quickSort(items) {
  counter++;

  if (items.length <= 1) return items;

  let bearingElementIndex = Math.floor(items.length / 2);
  let bearingElementValue = items[bearingElementIndex];
  let lowerPart = [];
  let greaterPart = [];

  for (let i = 0; i < items.length; i++) {
    if (i === bearingElementIndex) continue;
    if (items[i] > bearingElementValue) greaterPart.push(items[i]);
    else lowerPart.push(items[i]);
  }

  return [
    ...quickSort(lowerPart),
    bearingElementValue,
    ...quickSort(greaterPart),
  ];
}

// diff O(logN)
const result = quickSort(testArray);
console.log({ result, counter });
