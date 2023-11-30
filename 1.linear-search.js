let operationsCounter = 0;

function linearSearch(items, foundItem) {
  for (let i = 0; i < items.length; i++) {
    operationsCounter++;
    if (items[i] === foundItem) return i;
  }
}

// difficulty O(n)
const result = linearSearch([1, 2, 3, 4, 5], 5);
console.log({ result, operationsCounter });
