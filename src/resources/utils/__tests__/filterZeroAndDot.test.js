import filterZeroAndDot from '../filterZeroAndDot';

describe('filterZeroAndDot', function () {
  test('消除左側0', function () {
    expect(filterZeroAndDot('05')).toBe('5');
    expect(filterZeroAndDot('00123456')).toBe('123456');
    expect(filterZeroAndDot('00.123456')).toBe('0.123456');
    expect(filterZeroAndDot('0.123456')).toBe('0.123456');
    expect(filterZeroAndDot('123456')).toBe('123456');
    expect(filterZeroAndDot('100')).toBe('100');
    expect(filterZeroAndDot('100.00100')).toBe('100.00100');
    expect(filterZeroAndDot('0')).toBe('0');
    expect(filterZeroAndDot('0.0')).toBe('0.0');
  });

  test('消除第二個以上的點與第二個點右邊所有字', function () {
    expect(filterZeroAndDot('0.00.')).toBe('0.00');
    expect(filterZeroAndDot('0.00.1')).toBe('0.00');
    expect(filterZeroAndDot('0..')).toBe('0.');
    expect(filterZeroAndDot('0..001')).toBe('0.');
  });

  test('有 e+ 就直接顯示 Infinity', function () {
    expect(filterZeroAndDot('1e+8')).toBe('Infinity');
  });

  test('有 e- 就直接顯示 -Infinity', function () {
    expect(filterZeroAndDot('1e-8')).toBe('-Infinity');
  });
});
