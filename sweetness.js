function maxSweetness(N, songs) {
  let a = 0,
    b = 0;
  const mymap = new Map();

  const vect = [];

  for (let i = 0; i < N; i++) {
    const [B, L] = songs[i];
    a += L;

    if (mymap.has(B)) {
      const temp = mymap.get(B);
      mymap.delete(B);
      mymap.set(B, Math.min(temp, L));
    } else {
      mymap.set(B, L);
    }
  }

  for (const [band, length] of mymap.entries()) {
    vect.push(length);
  }

  const sortedVect = vect.sort((a, b) => a - b);

  for (let i = 0; i < sortedVect.length; i++) {
    a -= sortedVect[i];
    b += sortedVect[i] * (i + 1);
  }

  return a * vect.length + b;
}

const inputs = [
  [
    [1, 2],
    [2, 2],
    [3, 2],
  ],
  [
    [2, 3],
    [1, 2],
    [2, 4],
  ],
];

for (const input of inputs) {
  console.log(maxSweetness(input.length, input));
}
