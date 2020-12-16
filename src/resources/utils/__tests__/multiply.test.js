import multiply from '../multiply';

describe('multiply', function () {
  test('整數相乘', function () {
    expect(multiply(9, 7)).toBe(63);
  });

  test('浮點數相乘', function () {
    expect(multiply(3, 0.3)).toBe(0.9);
    expect(multiply(3, 0.3)).not.toBe(0.8999999999999999);
  });

  test('浮點數相乘', function () {
    expect(multiply(0.362, 100)).toBe(36.2);
    expect(multiply(0.362, 100)).not.toBe(36.199999999999996);
  });
});
