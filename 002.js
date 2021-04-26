/*

Задача: представьте, что вы строите пирамиду из N блоков.
В пирамиде на каждом верхнем уровне блоков меньше, чем на нижнем.
Необходимо определить, сколько различных пирамид можно построить из N блоков.
Входные данные: N - натуральное число от 1 до 100.
Вывод: кол-во всевозможных пирамид из N блоков

*/

const makeProgression = (n) => {
  const iter = (current, acc) => {
    if (current > n) {
      return acc;
    }

    return iter(current + 1, [...acc, current]);
  };

  return iter(1, []);
};

const countPyramids = (totalSum) => {
  const iter = (remainder, maxNextNum, iterAcc) => {
    if (remainder === 0) {
      return iterAcc + 1;
    }
    if (maxNextNum === 0 && remainder !== 0) {
      return iterAcc;
    }

    const possibleNextNums = makeProgression(Math.min(remainder, maxNextNum));
    return possibleNextNums.reduce(
      (acc, nextNum) => iter(remainder - nextNum, nextNum - 1, acc),
      iterAcc,
    );
  };

  if (totalSum === 0) return 0;
  return iter(totalSum, totalSum, 0);
};

export default countPyramids;
