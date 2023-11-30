function insertionSort(arr) {
  const len = arr.length;

  for (let i = 1; i < len; i++) {
    // Сохраняем текущий элемент
    const currentElement = arr[i];

    // Начинаем с последнего элемента отсортированной части
    let j = i - 1;

    // Перемещаем все элементы, которые больше текущего, на одну позицию вперёд
    while (j >= 0 && arr[j] > currentElement) {
      console.log({ j, currentElement, jArr: arr[j] });
      arr[j + 1] = arr[j];
      j--;
    }

    // Вставляем текущий элемент на правильное место
    arr[j + 1] = currentElement;
  }

  return arr;
}

// Пример использования
const unsortedArray = [64, 25, 12, 22, 11];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray); // [11, 12, 22, 25, 64]
