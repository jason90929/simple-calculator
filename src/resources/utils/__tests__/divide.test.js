import divide from '../divide';

describe('divide', function () {
  test('整數相除', function () {
    expect(divide(5, 2)).toBe(2.5);
  });

  test('浮點數相除', function () {
    expect(divide(1.21, 1.1)).toBe(1.1);
    expect(divide(1.21, 1.1)).not.toBe(1.0999999999999999);
  });
});
