import reverseNum from '../003.js';

test('reverseNum', () => {
  expect(reverseNum(12345)).toEqual(54321);
  expect(reverseNum(506)).toEqual(605);
  expect(reverseNum(2300)).toEqual(32);
  expect(reverseNum(0)).toEqual(0);
  expect(reverseNum(1)).toEqual(1);
  expect(reverseNum(9)).toEqual(9);
});
