const graph = {
  a: { b: 2, c: 1 },
  b: { f: 7 },
  c: { d: 5, e: 2 },
  d: { f: 2 },
  e: { f: 1 },
  f: { g: 1 },
  g: {},
};

const infinityCost = 100000000;

function shortestPath(graph, start, end) {
  const costs = {};
  const processed = [];
  let neighbors = {};

  Object.keys(graph).forEach((node) => {
    if (node !== start) {
      const value = graph[start][node];
      costs[node] = value || infinityCost;
    }
  });

  let node = findLowestCost(costs, processed);

  while (node) {
    const cost = costs[node];
    neighbors = graph[node];

    console.log({ node, cost, neighbors });

    Object.keys(neighbors).forEach((neighbor) => {
      const newCost = cost + neighbors[neighbor];
      if (newCost < costs[neighbor]) costs[neighbor] = newCost;
    });

    processed.push(node);
    node = findLowestCost(costs, processed);
    console.log({ processed, nextNode: node });
  }

  //   return costs;
}

function findLowestCost(costs, processed) {
  let lowestCost = infinityCost;
  let lowestNode;

  Object.keys(costs).forEach((node) => {
    let currentCost = costs[node];

    if (currentCost < lowestCost && !processed.includes(node)) {
      lowestCost = currentCost;
      lowestNode = node;
    }
  });

  return lowestNode;
}

console.log(shortestPath(graph, "a", "g"));
