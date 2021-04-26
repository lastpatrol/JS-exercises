import countPyramids from '../002.js';

test('countPyramids', () => {
  expect(countPyramids(0)).toEqual(0);
  expect(countPyramids(1)).toEqual(1);
  expect(countPyramids(2)).toEqual(1);
  expect(countPyramids(3)).toEqual(2);
  expect(countPyramids(4)).toEqual(2);
  expect(countPyramids(5)).toEqual(3);
  expect(countPyramids(6)).toEqual(4);
  expect(countPyramids(7)).toEqual(5);
  expect(countPyramids(8)).toEqual(6);
  expect(countPyramids(9)).toEqual(8);
  expect(countPyramids(10)).toEqual(10);
  expect(countPyramids(11)).toEqual(12);
  expect(countPyramids(12)).toEqual(15);
});
