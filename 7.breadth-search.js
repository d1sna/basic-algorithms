const graph = {
  A: ["B", "C"],
  B: ["E"],
  C: ["D", "F"],
  D: ["E"],
  E: ["G"],
  F: ["E"],
};

// const graphMatrix = [
//   [0, 1, 0, 0, 0, 0],
//   [0, 0, 0, 1, 0, 0],
//   [0, 1, 0, 1, 0, 0],
//   [0, 0, 0, 1, , 0],
//   [0, 0, 0, 0, 0, 1],
//   [0, 0, 1, 1, 0, 0],
// ];

// поиск в ширину
function breadthSearch(graph, start, end) {
  let queue = [];
  queue.push(start);

  while (queue.length) {
    const current = queue.shift();

    if (graph[current]?.includes(end)) return true;
    else queue = [...queue, ...(graph[current] ? graph[current] : [])];
  }

  return false;
}

const result = breadthSearch(graph, "B", "D");
console.log({ result });
