function weightDifference(N, K, weights) {
  let numberOfItemsCarriedByChef = N - K;

  let sortedWeights = weights.sort((a, b) => b - a);

  let weightsCarriedByChef = sortedWeights
    .slice(0, numberOfItemsCarriedByChef)
    .reduce((current, next) => current + next, 0);

  let weightsCarriedByKid = sortedWeights
    .slice(numberOfItemsCarriedByChef, N)
    .reduce((current, next) => current + next, 0);

  return weightsCarriedByChef - weightsCarriedByKid;
}

let testCase = [
  {
    N: 5,
    K: 2,
    weights: [8, 4, 5, 2, 10],
  },
  { N: 8, K: 3, weights: [1, 1, 1, 1, 1, 1, 1, 1] },
];
testCase.forEach(({ N, K, weights }) => {
  console.log(weightDifference(N, K, weights));
});
