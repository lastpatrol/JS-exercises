/*

Задача: дано натуральное число N.
Напишите функцию для реверса этого числа.
Функция должна вернуть число.
Условие:
Нельзя использовать циклы, преобразование в строки, списки/массивы.
P.S.: задача часто дается на позиции junior разработчика.

*/

const getLastDigit = (num) => num % 10;
const cutLastDigit = (num) => Math.floor(num / 10);

export default (inputNum) => {
  const iter = (acc, num) => {
    if (num === 0) {
      return acc;
    }

    const lastDigit = getLastDigit(num);
    const cuttedNum = cutLastDigit(num);
    return iter(acc * 10 + lastDigit, cuttedNum);
  };

  return iter(0, inputNum);
};
