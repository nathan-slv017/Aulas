function arrayMaxConsecutiveSum(inputArray, k) {
  let maior = 0;
  if (k === 1) {
    return Math.max.apply(null, inputArray);
  }

  for (let i = 1; i < inputArray.length; i++) {
    const number = reclusiva(inputArray[i], 1, k - 1, i);
    if (number > maior) maior = number;
  }

  function reclusiva(number, comeco, rodada, index) {
    if (comeco > rodada) return number;
    return number + reclusiva(inputArray[index + 1], comeco + 1, rodada, index + 1);
  }
  return maior;
}
const meuArray = [
  963, 741, 22, 851, 399, 382, 190, 247, 494, 452, 891, 532, 795, 920, 465, 831,
  344, 391, 582, 897, 763, 951, 735, 806, 320, 702, 200, 59, 870, 345, 695, 321,
  817, 83, 416, 36, 914, 335, 117, 985, 690, 303, 875, 556, 292, 309, 496, 791,
  509, 360, 235, 784, 607, 341,
];
console.log(arrayMaxConsecutiveSum(meuArray, 23));
