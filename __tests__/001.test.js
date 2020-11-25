import countWays from '../001';

test('countWays', () => {
    expect(countWays(0)).toEqual(0);
    expect(countWays(1)).toEqual(1);
    expect(countWays(2)).toEqual(2);
    expect(countWays(3)).toEqual(3);
    expect(countWays(5)).toEqual(8);
    expect(countWays(8)).toEqual(34);
});
